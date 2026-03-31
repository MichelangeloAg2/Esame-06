import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from 'src/app/_type/auth.type';
import { IRispostaServer } from 'src/app/_interfacce/IRispostaServer.interface';
import { ApiService } from 'src/app/services/api.service';
import { catchError, delay, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  stoControllando: boolean = false;
  reactiveForm: FormGroup;
  auth: BehaviorSubject<Auth>;
  isLoggingOut: boolean = false;
  bgUrl: string = environment.storageUrl + 'background/backgroung.png';
  private distruggi$ = new Subject<void>()

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private api: ApiService,
    private router: Router
  ) {
    this.reactiveForm = this.fb.group({
      'utente': ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(40)]],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
    this.auth = this.authService.leggiObsAuth()
    console.log("AUTH", this.auth);
  }


  ngOnInit(): void {

    this.auth
      .pipe(takeUntil(this.distruggi$))
      .subscribe(user => {

        if (user?.tk && this.router.url === '/login') {
          this.router.navigate(['/home']);
        }

      });

  }

  ngOnDestroy(): void {
    this.distruggi$.next();
    this.distruggi$.complete();
  }


  accedi(): void {


    if (this.reactiveForm.invalid) {
      console.log("FORM NON VALIDO")
    } else {
      let utente = this.reactiveForm.controls['utente'].value;
      let password = this.reactiveForm.controls['password'].value;
      this.stoControllando = true;

      //richiamo Api
      this.obsLogin(utente, password).subscribe(this.osservoLogin())
      console.log("ACCEDI", utente, password);
    }
  }



  private obsLogin(utente: string, password: string): Observable<IRispostaServer> {
    return this.api.login(utente, password).pipe(
      delay(1000),
      take(1),
      catchError((err, caught) => {
        console.log("ERR", err, caught)
        const nuovo: IRispostaServer = {
          data: null,
          message: "ERRORE LOGIN",
          error: err
        }
        return of(nuovo)
      }),
      takeUntil(this.distruggi$)

    )

  }

  private osservoLogin() {
    const osservatore: Observer<any> = {
      next: (rit: IRispostaServer) => {
        console.log("RITORNO", rit)
        if (rit.data !== null) {

          const tk: string = rit.data.tk;

          const contenutoToken = UtilityService.leggiToken(tk);

          const auth = {
            idLingua: 1,
            tk: rit.data.tk,
            nome: contenutoToken.data.nome,
            idRuolo: contenutoToken.data.idRuolo,
            idStato: contenutoToken.data.idStato,
            idUtente: contenutoToken.data.idUtente,
            abilita: contenutoToken.data.abilita
          }

          this.authService.settaObsAuth(auth);
          this.authService.scriviAuthSuLocalStorage(auth);

          this.router.navigateByUrl('/home');
        } else {
          console.log("ERRORE in osservoLogin")
        }
        this.stoControllando = false;
      },
      error: (err) => {
        console.log("ERRORE", err)
        const auth: Auth = {
          idLingua: 1,
          tk: null,
          nome: null,
          idRuolo: null,
          idStato: null,
          idUtente: null,
          abilita: null,
        }
        this.authService.settaObsAuth(auth)
        this.stoControllando = false;
      },
      complete: () => console.log("COMPLETATO")
    }
    return osservatore
  }
}

