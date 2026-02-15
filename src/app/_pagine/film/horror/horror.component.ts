import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss']
})
export class HorrorComponent {

  filmHorror: any[] = [];
  constructor(private filmService: FilmService) {
    this.filmHorror = this.filmService.getFilmHorror();
  }


}
