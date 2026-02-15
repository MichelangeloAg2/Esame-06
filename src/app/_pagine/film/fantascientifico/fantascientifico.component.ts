import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-fantascientifico',
  templateUrl: './fantascientifico.component.html',
  styleUrls: ['./fantascientifico.component.scss']
})
export class FantascientificoComponent {

  filmFantascientifico: any[] = [];
  constructor(private filmService: FilmService) {
    this.filmFantascientifico = this.filmService.getFilmFantascientifico();
  }
}
