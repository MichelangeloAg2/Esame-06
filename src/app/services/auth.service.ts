import { Injectable } from '@angular/core';
import { Auth } from '../_type/auth.type';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static auth: Auth
  private ObsAuth$: BehaviorSubject<Auth>
  constructor() {
    AuthService.auth = this.leggiAuthdaLocalStorage()
    this.ObsAuth$ = new BehaviorSubject<Auth>(AuthService.auth);

  }

  leggiObsAuth() {
    return this.ObsAuth$
  }

  settaObsAuth(dati: Auth): void {
    AuthService.auth = dati;
    this.ObsAuth$.next(dati);

  }



  /**
   * Funzione serve a leggere auth se presente in LocalStorage. 
   * @returns Ritorna un oggetto Auth. 
   */
  leggiAuthdaLocalStorage(): Auth {
    const tmp: string | null = localStorage.getItem("auth");
    let auth: Auth
    if (tmp !== null) {
      auth = JSON.parse(tmp)
    }
    else {
      auth = {
        idLingua: 1,
        idUtente: null,
        idRuolo: null,
        idStato: null,
        tk: null,
        nome: null,
        abilita: null
      }
    }
    return auth;
  }

  /**
 * funzione che scrive auth su LocalStorage
 * @param auth E' un oggetto AUTH da scrivere
 */

  scriviAuthSuLocalStorage(auth: Auth): void {
    const tmp: string = JSON.stringify(auth);
    localStorage.setItem("auth", tmp);
  }

  logout() {
    const authVuoto: Auth = {
      idLingua: 1,
      tk: null,
      nome: null,
      idRuolo: null,
      idStato: null,
      idUtente: null,
      abilita: null
    };

    this.ObsAuth$.next(authVuoto);

    // reset statico
    AuthService.auth = authVuoto;

    // pulizia storage
    localStorage.removeItem('auth');
  }


}



