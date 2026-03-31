import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { IFilm } from 'src/app/_interfacce/ifilm';
import { ISerie } from 'src/app/_interfacce/iserie';


@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss']
})
export class HorrorComponent {
  filmHorror: IFilm[] = [];
  serieHorror: ISerie[] = [];

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
      this.filmHorror = film.filter(f =>
        f.categoria?.nome?.toLowerCase() === 'horror'
      );
    });

    //  SERIE
    this.serieService.getSerie().subscribe(serie => {
      this.serieHorror = serie.filter(s =>
        s.categoria?.nome?.toLowerCase().trim() === 'horror'
      );
    });

  }
}




