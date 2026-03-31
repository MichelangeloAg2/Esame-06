import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utente } from '../../models/utente/utente.component';

import { faLaptop, faHeadset, faCalculator, faUserCog } from '@fortawesome/free-solid-svg-icons';

import { ProfiloService } from 'src/app/services/profilo.service';

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

  constructor(
    private fb: FormBuilder,
    private profiloService: ProfiloService
  ) { }

  ngOnInit(): void {

    this.profiloService.getProfilo().subscribe((res: any) => {

      this.currentUser = res.data;

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

    });

  }

  isAdmin(): boolean {
    return this.currentUser?.ruolo === 'admin';
  }

  enableEdit(): void {
    this.isEditing = true;
  }

  save(): void {

    const dati = this.userForm.value;

    this.profiloService.aggiornaProfilo(dati)
      .subscribe((res: any) => {

        // aggiorna con risposta backend
        this.currentUser = {
          ...this.currentUser,
          ...res.utente
        };

        // aggiorna anche il form
        this.userForm.patchValue(this.currentUser);

        this.isEditing = false;

      });

  }

  cancel(): void {
    this.userForm.patchValue(this.currentUser);
    this.isEditing = false;
  }

}