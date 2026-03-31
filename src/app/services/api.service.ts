import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChiamataHTTP } from '../_type/chiamataHTTP';
import { concatMap, map, Observable, take, tap } from 'rxjs';
import { IRispostaServer } from '../_interfacce/IRispostaServer.interface';
import { UtilityService } from './utility.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //_______Standardizzazione API_______//


  protected calcolaRisorsa(risorsa: (string | number)[]): string {
    return `${environment.apiUrl}/${risorsa.join('/')}`;
  }

  protected richiestaGenerica(
    risorsa: (string | number)[],
    tipo: ChiamataHTTP,
    parametri: any = null
  ): Observable<IRispostaServer> {

    const url = this.calcolaRisorsa(risorsa);

    const isFormData = parametri instanceof FormData;

    const options = isFormData ? this.headersSoloAuth() : this.headers();

    switch (tipo) {

      case "GET":
        return this.http.get<IRispostaServer>(url, options);

      case "POST":
        return this.http.post<IRispostaServer>(url, parametri, options);

      case "PUT":
        return this.http.put<IRispostaServer>(url, parametri, options);

      case "DELETE":
        return this.http.delete<IRispostaServer>(url, options);
    }
  }
  private headersSoloAuth() {

    const authString = localStorage.getItem('auth');

    if (!authString) return {};

    const auth = JSON.parse(authString);

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${auth.tk}`
      })
    };
  }

  private headersFormData() {

    const authString = localStorage.getItem('auth');

    if (!authString) {
      return {};
    }

    const auth = JSON.parse(authString);


    const headers = new HttpHeaders({
      Authorization: `Bearer ${auth.tk}`
    });

    return { headers };
  }

  public get(risorsa: (string | number)[]): Observable<IRispostaServer> {
    return this.richiestaGenerica(risorsa, "GET");
  }

  public post(risorsa: (string | number)[], data: any): Observable<IRispostaServer> {

    const url = this.calcolaRisorsa(risorsa);

    if (data instanceof FormData) {
      return this.http.post<IRispostaServer>(url, data);
    }

    return this.http.post<IRispostaServer>(url, data, this.headers());
  }

  public put(risorsa: (string | number)[], data: any): Observable<IRispostaServer> {

    const url = this.calcolaRisorsa(risorsa);

    if (data instanceof FormData) {
      return this.http.put<IRispostaServer>(url, data);
    }

    return this.http.put<IRispostaServer>(url, data, this.headers());
  }

  public delete(risorsa: (string | number)[]): Observable<IRispostaServer> {
    return this.richiestaGenerica(risorsa, "DELETE");
  }
  /**
   * funzione che manda l'Utente al server per l'autenticazione
   * @param hashUtente Stringa che rappresenta hash Utente 
   * @returns Observable che rappresenta la risposta del server alla richiesta di autenticazione
   */
  public getLoginFase1(hashUtente: string): Observable<IRispostaServer> {
    const risorsa: string[] = ["login", hashUtente];
    const rit = this.richiestaGenerica(risorsa, "GET");
    return rit;
  }


  /**
   * Funzione che manda utente e password cifrati al server
   * @param hashUtente stringa che rappresenta l'hash Utente
   * @param hashPassword stringa che rappresenta l'HASH sha512 della password unita al sale
   * @returns Ritorna un Observable 
   */
  public getLoginFase2(hashUtente: string, hashPassword: string): Observable<IRispostaServer> {
    const risorsa: string[] = ["login", hashUtente, hashPassword];
    const rit = this.richiestaGenerica(risorsa, "GET");
    return rit;

  }

  /**
   * Funzione di Login
   * @param utente stringa che rappresenta l'utente
   * @param password stringa che rappresenta la password
   * @returns Ritorna Observable
   */
  public login(utente: string, password: string): Observable<IRispostaServer> {

    const hashUtente: string = UtilityService.hash(utente)
    const hashPassword: string = UtilityService.hash(password)
    const controllo$ = this.getLoginFase1(hashUtente)
      .pipe(
        take(1),
        tap(x => console.log("DATI", x)),
        map((rit: IRispostaServer): string => {
          const sale: string = rit.data.sale
          const passwordNascosta = UtilityService.nascondiPassword(hashPassword, sale)
          return passwordNascosta
        }),
        concatMap((rit: string) => {
          return this.getLoginFase2(hashUtente, rit)
        })
      )
    return controllo$;
  }

  /**
 * Funzione di Logout
 * Invalida il token lato server
 */
  public logout(): Observable<IRispostaServer> {

    const risorsa: string[] = ["logout"];

    return this.richiestaGenerica(risorsa, "POST");

  }

  //Funzione per il token.

  private headers() {

    const authString = localStorage.getItem('auth');

    if (!authString) {
      return {};
    }

    const auth = JSON.parse(authString);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${auth.tk}`
    });

    return { headers };

  }

  cercaComuni(valore: string) {
    return this.http.get(`${environment.apiUrl}/comuni?q=${valore}`);
  }

  getCapByComune(nome: string) {
    return this.http.get<any[]>(`${environment.apiUrl}/comuni/cap?nome=${nome}`);
  }

  register(data: any) {
    return this.http.post(`${environment.apiUrl}/registrazione`, data);
  }

}