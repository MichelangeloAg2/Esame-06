import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { IFilm } from 'src/app/_interfacce/ifilm';
import { ISerie } from 'src/app/_interfacce/iserie';

@Component({
  selector: 'app-fantascientifico',
  templateUrl: './fantascientifico.component.html',
  styleUrls: ['./fantascientifico.component.scss']
})
export class FantascienzaComponent {


  filmFantascienza: IFilm[] = [];
  serieFantascienza: ISerie[] = [];

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
      this.filmFantascienza = film.filter(f =>
        f.categoria?.nome?.toLowerCase() === 'fantascienza'
      );
    });

    //  SERIE
    this.serieService.getSerie().subscribe(serie => {
      this.serieFantascienza = serie.filter(s =>
        s.categoria?.nome?.toLowerCase().trim() === 'fantascienza'
      );
    });

  }
}




