import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { IFilm } from 'src/app/_interfacce/ifilm';
import { ISerie } from 'src/app/_interfacce/iserie';

@Component({
  selector: 'app-commedia',
  templateUrl: './commedia.component.html',
  styleUrls: ['./commedia.component.scss']
})
export class CommediaComponent {

  filmCommedia: IFilm[] = [];
  serieCommedia: ISerie[] = [];

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
      this.filmCommedia = film.filter(f =>
        f.categoria?.nome?.toLowerCase() === 'commedia'
      );
    });

    //  SERIE
    this.serieService.getSerie().subscribe(serie => {
      this.serieCommedia = serie.filter(s =>
        s.categoria?.nome?.toLowerCase().trim() === 'commedia'
      );
    });

  }
}




