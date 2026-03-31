import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IRispostaServer } from '../_interfacce/IRispostaServer.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

  constructor(private api: ApiService) { }

  getProfilo(): Observable<IRispostaServer> {
    return this.api.get(['profilo']);
  }

  aggiornaProfilo(data: any): Observable<IRispostaServer> {
    return this.api.put(['profilo'], data);
  }

}