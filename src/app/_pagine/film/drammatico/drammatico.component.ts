import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-filmdrammatici',
  templateUrl: './drammatico.component.html',
  styleUrls: ['./drammatico.component.scss']
})
export class DrammaticoComponent {

  filmDrammatici: any[] = [];

  constructor(private filmService: FilmService) {
    this.filmDrammatici = this.filmService.getFilmDrammatici();
  }

}
