import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IRispostaServer } from '../_interfacce/IRispostaServer.interface';
import { IRispostaContenuti } from '../_interfacce/irisposta-contenuti';

@Injectable({
  providedIn: 'root'
})
export class Dashboard {

  constructor(private api: ApiService) { }

  // DASHBOARD
  getDashboard(): Observable<IRispostaServer> {
    return this.api.get(['admin', 'dashboard']);
  }

  // UTENTI
  getUtenti(): Observable<IRispostaServer> {
    return this.api.get(['admin', 'utenti']);
  }

  getUtente(id: number): Observable<IRispostaServer> {
    return this.api.get(['admin', 'utenti', id]);
  }

  updateUtente(id: number, data: any): Observable<IRispostaServer> {
    return this.api.put(['admin', 'utenti', id], data);
  }

  deleteUtente(id: number): Observable<IRispostaServer> {
    return this.api.delete(['admin', 'utenti', id]);
  }

  // CONTENUTI

  getCategorie() {
    return this.api.get(['categorie']);
  }

  getContenuti(): Observable<IRispostaContenuti> {
    return this.api.get(['admin', 'contenuti']) as unknown as Observable<IRispostaContenuti>;
  }

  creaFilm(data: any): Observable<IRispostaServer> {
    return this.api.post(['admin', 'film'], data);
  }

  creaSerie(data: any): Observable<IRispostaServer> {
    return this.api.post(['admin', 'serie'], data);
  }

  updateFilm(id: number, data: any) {
    return this.api.post(['admin', 'contenuti', 'film', id], data);
  }

  updateSerie(id: number, data: FormData) {
    data.append('_method', 'PUT');
    return this.api.post(['admin', 'contenuti', 'serie', id], data);
  }


  eliminaContenuto(tipo: string, id: number): Observable<IRispostaServer> {
    return this.api.delete(['admin', 'contenuti', tipo, id]);
  }

  // EPISODI

  creaEpisodio(data: any) {
    return this.api.post(['admin', 'episodio'], data);
  }

  updateEpisodio(id: number, data: any) {
    return this.api.put(['admin', 'episodio', id], data);
  }

  deleteEpisodio(id: number) {
    return this.api.delete(['admin', 'episodio', id]);
  }

  // PAGAMENTI
  getPagamenti(): Observable<IRispostaServer> {
    return this.api.get(['admin', 'pagamenti']);
  }

  deletePagamento(id: number): Observable<IRispostaServer> {
    return this.api.delete(['admin', 'pagamenti', id]);
  }

}