import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-commedia',
  templateUrl: './commedia.component.html',
  styleUrls: ['./commedia.component.scss']
})
export class CommediaComponent {

  filmCommedia: any[] = [];
  constructor(private filmService: FilmService) {
    this.filmCommedia = this.filmService.getFilmCommedia();
  }

}
