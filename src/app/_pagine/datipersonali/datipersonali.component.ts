import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utente } from '../../models/utente/utente.component';

import { faLaptop, faHeadset, faCalculator, faUserCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-datipersonali',
  templateUrl: './datipersonali.component.html',
  styleUrls: ['./datipersonali.component.scss']
})
export class DatipersonaliComponent implements OnInit {

  faLaptop = faLaptop;
  faHeadset = faHeadset;
  faCalculator = faCalculator;
  faUserCog = faUserCog;

  isEditing = false;
  userForm!: FormGroup;

  currentUser!: Utente;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // MOCK utente loggato
    this.currentUser = {
      id: 1,
      nome: 'admin01',
      cognome: 'Rossi',
      email: 'admin@mail.com',
      telefono: '123456789',
      indirizzo: 'Via Roma 1',
      citta: 'Milano',
      cap: '20100',
      paese: 'Italia',
      role: 'ADMIN'

    };


    // Inizializzazione form
    this.userForm = this.fb.group({
      nome: [this.currentUser.nome],
      cognome: [this.currentUser.cognome],
      email: [this.currentUser.email],
      telefono: [this.currentUser.telefono],
      indirizzo: [this.currentUser.indirizzo],
      citta: [this.currentUser.citta],
      cap: [this.currentUser.cap],
      paese: [this.currentUser.paese]
    });
  }
  isAdmin(): boolean {
    return this.currentUser.role === 'ADMIN';
  }

  enableEdit(): void {
    this.isEditing = true;
  }

  save(): void {
    this.currentUser = {
      ...this.currentUser,
      ...this.userForm.value
    };
    this.isEditing = false;
  }

  cancel(): void {
    this.userForm.patchValue(this.currentUser);
    this.isEditing = false;
  }
}
