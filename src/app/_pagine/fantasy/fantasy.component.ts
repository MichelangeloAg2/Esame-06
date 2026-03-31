import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { IFilm } from 'src/app/_interfacce/ifilm';
import { ISerie } from 'src/app/_interfacce/iserie';


@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.scss']
})
export class FantasyComponent {
  filmFantasy: IFilm[] = [];
  serieFantasy: ISerie[] = [];

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
      this.filmFantasy = film.filter(f =>
        f.categoria?.nome?.toLowerCase() === 'fantasy'
      );
    });

    //  SERIE
    this.serieService.getSerie().subscribe(serie => {
      this.serieFantasy = serie.filter(s =>
        s.categoria?.nome?.toLowerCase().trim() === 'fantasy'
      );
    });

  }
}




