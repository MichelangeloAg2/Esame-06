import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IFilm } from '../_interfacce/ifilm';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFilm(): Observable<IFilm[]> {
    return this.http.get<any>(`${this.api}/film`)
      .pipe(
        map(res => res?.data ?? res ?? [])
      );
  }

  getFilmById(id: any) {
    return this.http.get<any>(`${this.api}film/${id}`);
  }
}