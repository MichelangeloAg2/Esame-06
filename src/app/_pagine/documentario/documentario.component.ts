import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { IFilm } from 'src/app/_interfacce/ifilm';
import { ISerie } from 'src/app/_interfacce/iserie';

@Component({
  selector: 'app-documentario',
  templateUrl: './documentario.component.html',
  styleUrls: ['./documentario.component.scss']
})
export class DocumentarioComponent {

  filmDocumentario: IFilm[] = [];
  serieDocumentario: ISerie[] = [];

  constructor(
    private filmService: FilmService,
    private serieService: SerietvService
  ) { }

  ngOnInit(): void {
    this.loadContenuti();
  }

  loadContenuti() {

    //  FILM
    this.filmService.getFilm().subscribe(film => {
      this.filmDocumentario = film.filter(f =>
        f.categoria?.nome?.toLowerCase() === 'documentario'
      );
    });

    //  SERIE
    this.serieService.getSerie().subscribe(serie => {
      this.serieDocumentario = serie.filter(s =>
        s.categoria?.nome?.toLowerCase().trim() === 'documentario'
      );
    });

  }
}




