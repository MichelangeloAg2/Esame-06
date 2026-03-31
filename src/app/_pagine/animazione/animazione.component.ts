import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { IFilm } from 'src/app/_interfacce/ifilm';
import { ISerie } from 'src/app/_interfacce/iserie';

@Component({
  selector: 'app-animazione',
  templateUrl: './animazione.component.html',
  styleUrls: ['./animazione.component.scss']
})
export class AnimazioneComponent implements OnInit {

  filmAnimazione: IFilm[] = [];
  serieAnimazione: ISerie[] = [];

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
      this.filmAnimazione = film.filter(f =>
        f.categoria?.nome?.toLowerCase() === 'animazione'
      );
    });

    //  SERIE
    this.serieService.getSerie().subscribe(serie => {
      this.serieAnimazione = serie.filter(s =>
        s.categoria?.nome?.toLowerCase().trim() === 'animazione'
      );
    });

  }
}