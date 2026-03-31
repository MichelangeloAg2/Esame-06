import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  loginForm!: FormGroup;
  step1Form!: FormGroup;
  step2Form!: FormGroup;
  step3Form!: FormGroup;

  currentStep: number = 1;
  currentStepHeight: number = 0;

  comuniFiltrati: any[] = [];
  capMultipli: string[] = [];
  mostraSelectCap = false;

  //IMG BACKGROUND
  bgUrl: string = environment.storageUrl + 'background/backgroung.png';

  constructor(private fb: FormBuilder, private adminService: ApiService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.step1Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      terms: [false, Validators.requiredTrue]
    });

    this.step2Form = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      data_nascita: ['', Validators.required],
      sesso: ['', Validators.required],
      comune: ['', Validators.required],
      codice_catastale: [''], // Resta nascosto
      indirizzo: ['', Validators.required],
      citta: ['', Validators.required],
      paese: ['', Validators.required],
      cap: ['', Validators.required],
      codice_fiscale: ['']
    });

    this.step3Form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', Validators.required]
    }, { validators: this.passwordMatchValidator.bind(this) });

    this.step1Form.valueChanges.subscribe(() => this.updateStepHeight());

    this.step2Form.valueChanges.subscribe(() => {
      this.generaCodiceFiscale();
      this.updateStepHeight();
    });

    this.step3Form.valueChanges.subscribe(() => this.updateStepHeight());

    setTimeout(() => this.updateStepHeight(), 0);

    //  AUTOCOMPLETE COMUNI (RXJS)
    this.step2Form.get('comune')?.valueChanges.pipe(

      debounceTime(400), // aspetta che l'utente smetta di scrivere
      distinctUntilChanged(), //  evita chiamate duplicate
      switchMap(valore => {

        if (!valore || valore.length < 2) {
          this.comuniFiltrati = [];
          return of([]);
        }

        return this.adminService.cercaComuni(valore);
      })

    ).subscribe((res: any) => {
      this.comuniFiltrati = res;
    });

  }


  passwordMatchValidator(group: FormGroup) {
    const pass = group.get('password')?.value;
    const pass2 = group.get('password2')?.value;
    return pass === pass2 ? null : { mismatch: true };
  }

  // ================= AUTOCOMPLETE COMUNI =================


  selezionaComune(c: any) {

    this.step2Form.patchValue({
      comune: c.nomeComune,
      codice_catastale: c.codice_catastale,
      cap: ''
    });

    this.comuniFiltrati = [];

    this.adminService.getCapByComune(c.nomeComune)
      .subscribe((caps: any[]) => {

        // pulizia dati
        const capsPuliti = [...new Set(
          caps
            .map(c => String(c).trim())
            .filter(c => c && c !== '0')
        )];

        this.capMultipli = capsPuliti;

        if (capsPuliti.length === 1) {
          this.step2Form.patchValue({ cap: capsPuliti[0] });
          this.mostraSelectCap = false;
        } else if (capsPuliti.length > 1) {
          this.mostraSelectCap = true;
        } else {
          this.mostraSelectCap = false;
        }

      });
  }

  // ================= CODICE FISCALE =================

  generaCodiceFiscale() {

    const nome = this.step2Form.get('nome')?.value;
    const cognome = this.step2Form.get('cognome')?.value;
    const data = this.step2Form.get('data_nascita')?.value;
    const sesso = this.step2Form.get('sesso')?.value;
    const comune = this.step2Form.get('codice_catastale')?.value;

    if (!nome || !cognome || !data || !sesso || !comune) return;

    const mesi = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];

    const estrai = (str: string, isNome = false) => {
      const cons = str.toUpperCase().replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/g, '');
      const voc = str.toUpperCase().replace(/[^AEIOU]/g, '');

      if (isNome && cons.length >= 4) {
        return cons[0] + cons[2] + cons[3];
      }

      return (cons + voc + 'XXX').substring(0, 3);
    };

    const cognomeCF = estrai(cognome);
    const nomeCF = estrai(nome, true);

    const date = new Date(data);
    const anno = date.getFullYear().toString().slice(-2);
    const mese = mesi[date.getMonth()];

    let giorno = date.getDate();
    if (sesso === 'F') giorno += 40;

    const giornoStr = giorno.toString().padStart(2, '0');

    let cfParziale = cognomeCF + nomeCF + anno + mese + giornoStr + comune;
    cfParziale = cfParziale.toUpperCase();

    const dispari: Record<string, number> = {
      0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21,
      A: 1, B: 0, C: 5, D: 7, E: 9, F: 13, G: 15, H: 17, I: 19, J: 21,
      K: 2, L: 4, M: 18, N: 20, O: 11, P: 3, Q: 6, R: 8, S: 12, T: 14,
      U: 16, V: 10, W: 22, X: 25, Y: 24, Z: 23
    };

    const pari: Record<string, number> = {
      0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
      A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9,
      K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19,
      U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25
    };

    let somma = 0;

    for (let i = 0; i < cfParziale.length; i++) {
      const c = cfParziale[i];
      if (!c || (!dispari[c] && dispari[c] !== 0)) continue;

      if (i % 2 === 0) somma += dispari[c];
      else somma += pari[c];
    }

    const controllo = String.fromCharCode((somma % 26) + 65);
    const cfFinale = cfParziale + controllo;

    this.step2Form.patchValue({
      codice_fiscale: cfFinale
    }, { emitEvent: false });
  }

  nextStep() {
    if (this.currentStep === 1 && this.step1Form.valid) this.currentStep++;
    else if (this.currentStep === 2 && this.step2Form.valid) this.currentStep++;
    this.updateStepHeight();
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
    this.updateStepHeight();
  }

  register() {
    if (this.step3Form.valid) {

      const data = {
        ...this.step1Form.value,
        ...this.step2Form.value,
        ...this.step3Form.value
      };

      this.adminService.register(data).subscribe({
        next: (res: any) => {
          console.log('Utente registrato', res);
          alert('Registrazione completata!');
        },
        error: (err) => {
          console.error('Errore registrazione', err);
          alert('Errore durante la registrazione');
        }
      });

    } else {
      this.step3Form.markAllAsTouched();
    }
  }

  updateStepHeight() {
    setTimeout(() => {
      const stepEl = document.querySelector(`.step-card.active`) as HTMLElement;
      if (stepEl) this.currentStepHeight = stepEl.scrollHeight;
    }, 50);
  }

  get passwordMismatch() {
    return this.step3Form.errors?.['mismatch'];
  }
}