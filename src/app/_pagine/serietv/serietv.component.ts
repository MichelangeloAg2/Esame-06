import { Component, OnInit } from '@angular/core';
import { SerietvService } from 'src/app/services/serietv.service';

@Component({
  selector: 'app-serietv',
  templateUrl: './serietv.component.html',
  styleUrls: ['./serietv.component.scss']
})
export class SerietvComponent implements OnInit {

  serieAnimazione: any[] = [];
  serieFantasy: any[] = [];
  serieComiche: any[] = [];
  serieFantascienza: any[] = [];
  serieHorror: any[] = [];
  serieDocumentari: any[] = [];
  serieDrammatiche: any[] = [];
  serieConsigliate: any[] = [];
  serieListPref: any[] = [];
  serieNonFinite: any[] = [];

  constructor(private serietvService: SerietvService) { }

  ngOnInit(): void {
    this.serieAnimazione = this.serietvService.getSerieAnimazione();
    this.serieFantasy = this.serietvService.getSerieFantasy();
    this.serieComiche = this.serietvService.getSerieComiche();
    this.serieFantascienza = this.serietvService.getSerieFantascienza();
    this.serieHorror = this.serietvService.getSerieHorror();
    this.serieDocumentari = this.serietvService.getSerieDocumentari();
    this.serieDrammatiche = this.serietvService.getSerieDrammatiche();
  }
}

