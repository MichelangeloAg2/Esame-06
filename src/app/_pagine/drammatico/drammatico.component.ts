import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { IFilm } from 'src/app/_interfacce/ifilm';
import { ISerie } from 'src/app/_interfacce/iserie';

@Component({
  selector: 'app-drammatico',
  templateUrl: './drammatico.component.html',
  styleUrls: ['./drammatico.component.scss']
})
export class DrammaticoComponent {

  filmDrammatico: IFilm[] = [];
  serieDrammatico: ISerie[] = [];

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
      this.filmDrammatico = film.filter(f =>
        f.categoria?.nome?.toLowerCase() === 'drammatico'
      );
    });

    //  SERIE
    this.serieService.getSerie().subscribe(serie => {
      this.serieDrammatico = serie.filter(s =>
        s.categoria?.nome?.toLowerCase().trim() === 'drammatico'
      );
    });

  }
}




