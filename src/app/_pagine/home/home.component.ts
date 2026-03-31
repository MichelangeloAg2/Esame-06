import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { IFilm } from 'src/app/_interfacce/ifilm';
import { ISerie } from 'src/app/_interfacce/iserie';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  storageUrl = environment.storageUrl;

  constructor(
    private filmService: FilmService,
    private serieService: SerietvService
  ) { }

  carousel: any[] = [];
  continua: any[] = [];
  consigliati: any[] = [];
  nuoveUscite: any[] = [];

  ngOnInit(): void {
    this.loadHome();
  }

  loadFallback() {
    this.filmService.getFilm().subscribe((film: IFilm[]) => {
      this.serieService.getSerie().subscribe((serie: ISerie[]) => {

        const tutti = [...film, ...serie];

        this.carousel = this.shuffle(tutti).slice(0, 5);
        this.consigliati = this.shuffle(tutti).slice(0, 10);
        this.nuoveUscite = this.shuffle(tutti)
          .sort((a: any, b: any) => {
            const aAnno = a.anno_uscita || a.anno_inizio || 0;
            const bAnno = b.anno_uscita || b.anno_inizio || 0;
            return bAnno - aAnno;
          })
          .slice(0, 10);

      });
    });
  }
  loadHome() {

    const c = localStorage.getItem('carousel');
    const cons = localStorage.getItem('consigliati');
    const nuove = localStorage.getItem('nuove');

    console.log('LOCAL:', c, cons, nuove);

    this.carousel = c ? JSON.parse(c) : [];
    this.consigliati = cons ? JSON.parse(cons) : [];
    this.nuoveUscite = nuove ? JSON.parse(nuove) : [];

    // opzionale fallback
    if (!this.carousel.length && !this.consigliati.length && !this.nuoveUscite.length) {
      this.loadFallback();
    }
  }

  shuffle(array: any[]) {
    return array.sort(() => 0.5 - Math.random());
  }

}