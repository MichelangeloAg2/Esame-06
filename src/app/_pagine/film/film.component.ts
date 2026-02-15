import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  filmNonFiniti: any[] = [];
  filmListPref: any[] = [];
  filmAnimazione: any[] = [];
  filmFantasy: any[] = [];
  filmConsigliati: any[] = [];
  constructor(private filmService: FilmService) {
    this.filmAnimazione = this.filmService.getFilmAnimazione();
    this.filmFantasy = this.filmService.getFilmFantasy();
  }


}
