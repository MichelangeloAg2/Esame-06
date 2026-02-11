import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  currentStepHeight: number = 0; // per sistemare le altezze

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // LOGIN FORM
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // REGISTRATION STEP FORMS
    this.step1Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      terms: [false, Validators.requiredTrue]
    });

    this.step2Form = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      indirizzo: ['', Validators.required],
      citta: ['', Validators.required],
      paese: ['', Validators.required],
      cap: ['', Validators.required]
    });

    this.step3Form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    // calcolo altezza iniziale step container
    setTimeout(() => this.updateStepHeight(), 0);

    // aggiorna altezza se cambiano valori nei form
    this.step1Form.valueChanges.subscribe(() => this.updateStepHeight());
    this.step2Form.valueChanges.subscribe(() => this.updateStepHeight());
    this.step3Form.valueChanges.subscribe(() => this.updateStepHeight());
  }

  // VALIDATOR PASSWORD MATCH
  passwordMatchValidator(group: FormGroup) {
    const pass = group.get('password')?.value;
    const pass2 = group.get('password2')?.value;
    return pass === pass2 ? null : { mismatch: true };
  }

  // LOGIN FUNCTION
  login() {
    if (this.loginForm.valid) {
      console.log('Login dati:', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
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
      console.log('Registrazione completata:', data);
    } else {
      this.step3Form.markAllAsTouched();
      this.updateStepHeight(); // aggiorna altezza per messaggi rossi
    }
  }

  // Calcola altezza dinamica del contenitore step
  updateStepHeight() {
    setTimeout(() => {
      const stepEl = document.querySelector(`.step-card.active`) as HTMLElement;
      if (stepEl) {
        this.currentStepHeight = stepEl.scrollHeight;
      }
    }, 50);
  }


  get passwordMismatch() {
    return this.step3Form.errors?.['mismatch'];
  }
}
