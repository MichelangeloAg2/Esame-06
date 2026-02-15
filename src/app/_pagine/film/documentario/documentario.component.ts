import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-documentario',
  templateUrl: './documentario.component.html',
  styleUrls: ['./documentario.component.scss']
})
export class DocumentarioComponent {

  filmDocumentario: any[] = [];
  constructor(private filmService: FilmService) {
    this.filmDocumentario = this.filmService.getFilmDocumentario();
  }

}
