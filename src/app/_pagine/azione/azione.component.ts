import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { IFilm } from 'src/app/_interfacce/ifilm';
import { ISerie } from 'src/app/_interfacce/iserie';

@Component({
  selector: 'app-azione',
  templateUrl: './azione.component.html',
  styleUrls: ['./azione.component.scss']
})
export class AzioneComponent {


  filmAzione: IFilm[] = [];
  serieAzione: ISerie[] = [];

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
      this.filmAzione = film.filter(f =>
        f.categoria?.nome?.toLowerCase() === 'azione'
      );
    });

    //  SERIE
    this.serieService.getSerie().subscribe(serie => {
      this.serieAzione = serie.filter(s =>
        s.categoria?.nome?.toLowerCase().trim() === 'azione'
      );
    });

  }
}

