import { Component, OnInit } from '@angular/core';
import { SerietvService } from 'src/app/services/serietv.service';
import { ISerie } from 'src/app/_interfacce/iserie';

@Component({
  selector: 'app-serie',
  templateUrl: './serietv.component.html',
  styleUrls: ['./serietv.component.scss']
})
export class SerietvComponent implements OnInit {

  serie: ISerie[] = [];

  serieNonFinite: ISerie[] = [];
  serieListPref: ISerie[] = [];
  serieConsigliate: ISerie[] = [];
  categorieSerie: any[] = [];
  serieAzione: ISerie[] = [];
  serieDrammatico: ISerie[] = [];
  serieCommedia: ISerie[] = [];
  serieFantascienza: ISerie[] = [];
  serieDocumentario: ISerie[] = [];
  serieHorror: ISerie[] = [];
  serieAnimazione: ISerie[] = [];
  serieFantasy: ISerie[] = [];

  constructor(private serieService: SerietvService) { }

  ngOnInit(): void {
    this.loadSerie();
  }

  loadSerie() {
    this.serieService.getSerie().subscribe({
      next: (data) => {

        console.log('ARRAY SERIE:', data);

        data.forEach(s => {
          console.log(
            'TITOLO:', s.titolo,
            '| CAT_ID:', s.categoria?.id,
            '| CAT_NOME:', s.categoria?.nome
          );
        });

        this.serie = data;
        this.divideSerie();
      }
    });
  }


  divideSerie() {

    this.serieNonFinite = this.serie.filter(s => s.continua_a_guardare);

    // GRUPPO PER CATEGORIA DINAMICO
    const mapCategorie: any = {};

    this.serie.forEach(s => {
      const nome = s.categoria?.nome || 'Altro';

      if (!mapCategorie[nome]) {
        mapCategorie[nome] = [];
      }

      mapCategorie[nome].push(s);
    });

    // trasformo in array
    this.categorieSerie = Object.keys(mapCategorie).map(nome => ({
      nome,
      lista: mapCategorie[nome]
    }));

    console.log('CATEGORIE DINAMICHE:', this.categorieSerie);
  }
}