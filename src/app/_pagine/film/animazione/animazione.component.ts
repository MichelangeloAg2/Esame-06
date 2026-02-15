import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-animazione',
  templateUrl: './animazione.component.html',
  styleUrls: ['./animazione.component.scss']
})
export class AnimazioneComponent {

  filmAnimazione: any[] = [];
  constructor(private filmService: FilmService) {
    this.filmAnimazione = this.filmService.getFilmAnimazione();
  }
}
