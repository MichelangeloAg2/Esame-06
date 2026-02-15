import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.scss']
})
export class FantasyComponent {

  filmFantasy: any[] = [];
  constructor(private filmService: FilmService) {
    this.filmFantasy = this.filmService.getFilmFantasy();
  }
}
