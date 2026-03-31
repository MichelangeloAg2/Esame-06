import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { IFilm } from 'src/app/_interfacce/ifilm';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film: IFilm[] = [];
  categorieFilm: any[] = [];
  filmNonFiniti: IFilm[] = [];
  filmListPref: IFilm[] = [];
  filmConsigliati: IFilm[] = [];
  filmAnimazione: IFilm[] = [];
  filmHorror: IFilm[] = [];
  filmDrammatico: IFilm[] = [];
  filmFantasy: IFilm[] = [];
  filmFantascienza: IFilm[] = [];
  filmCommedia: IFilm[] = [];
  filmDocumentario: IFilm[] = [];
  filmAzione: IFilm[] = [];


  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.loadFilm();
  }

  loadFilm() {
    this.filmService.getFilm().subscribe({
      next: (data) => {
        console.log("FILM RAW:", data);

        this.film = data;
        this.divideFilm();
      },
      error: (err) => {
        console.error('Errore nel caricamento film', err);
      }
    });
  }

  divideFilm() {

    this.filmNonFiniti = this.film.filter(f => f.continua_a_guardare);
    this.filmListPref = this.film.filter(f => f.preferito);
    this.filmConsigliati = this.film.filter(f => f.consigliato);

    //  GRUPPO DINAMICO PER CATEGORIA
    const mapCategorie: any = {};

    this.film.forEach(f => {
      if (!f) return;

      const nome = f.categoria?.nome || 'Altro';

      if (!mapCategorie[nome]) {
        mapCategorie[nome] = [];
      }

      mapCategorie[nome].push(f);
    });

    this.categorieFilm = Object.keys(mapCategorie).map(nome => ({
      nome,
      lista: mapCategorie[nome]
    }));

    if (!this.categorieFilm.length) {
      this.categorieFilm = [{
        nome: 'Tutti',
        lista: this.film
      }];
    }
    console.log('CATEGORIE FILM:', this.categorieFilm);
  }

}
