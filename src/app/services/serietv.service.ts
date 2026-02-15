import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerietvService {
  serieDrammatiche = [
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Drammatico',
      voto: '5/5'
    },
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/poster-film1.png',
      anno: 2024,
      genere: 'Drammatico',
      voto: '4,4/5'
    },
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: 'Drammatico',
      voto: '4,9/5'
    },
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: 'Drammatico',
      voto: '4/5'
    }
  ];
  serieAnimazione = [
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Drammatico',
      voto: '5/5'
    },
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/poster-film1.png',
      anno: 2024,
      genere: 'Drammatico',
      voto: '4,4/5'
    },
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: 'Drammatico',
      voto: '4,9/5'
    },
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: 'Drammatico',
      voto: '4/5'
    }
  ];
  serieComiche = [
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Drammatico',
      voto: '5/5'
    },
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/poster-film1.png',
      anno: 2024,
      genere: 'Drammatico',
      voto: '4,4/5'
    },
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: 'Drammatico',
      voto: '4,9/5'
    },
    {
      titolo: 'Titolo della Serie TV',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: 'Drammatico',
      voto: '4/5'
    }
  ];
  serieFantasy = [{
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/posterfilm3.png',
    anno: 2016,
    genere: 'Drammatico',
    voto: '5/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/poster-film1.png',
    anno: 2024,
    genere: 'Drammatico',
    voto: '4,4/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/poster-film2.png',
    anno: 2025,
    genere: 'Drammatico',
    voto: '4,9/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/filmtot.png',
    anno: 2024,
    genere: 'Drammatico',
    voto: '4/5'
  }];
  serieHorror = [{
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/posterfilm3.png',
    anno: 2016,
    genere: 'Drammatico',
    voto: '5/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/poster-film1.png',
    anno: 2024,
    genere: 'Drammatico',
    voto: '4,4/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/poster-film2.png',
    anno: 2025,
    genere: 'Drammatico',
    voto: '4,9/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/filmtot.png',
    anno: 2024,
    genere: 'Drammatico',
    voto: '4/5'
  }];
  serieFantascienza = [{
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/posterfilm3.png',
    anno: 2016,
    genere: 'Drammatico',
    voto: '5/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/poster-film1.png',
    anno: 2024,
    genere: 'Drammatico',
    voto: '4,4/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/poster-film2.png',
    anno: 2025,
    genere: 'Drammatico',
    voto: '4,9/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/filmtot.png',
    anno: 2024,
    genere: 'Drammatico',
    voto: '4/5'
  }];
  serieDocumentari = [{
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/posterfilm3.png',
    anno: 2016,
    genere: 'Drammatico',
    voto: '5/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/poster-film1.png',
    anno: 2024,
    genere: 'Drammatico',
    voto: '4,4/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/poster-film2.png',
    anno: 2025,
    genere: 'Drammatico',
    voto: '4,9/5'
  },
  {
    titolo: 'Titolo della Serie TV',
    img: 'assets/img/filmtot.png',
    anno: 2024,
    genere: 'Drammatico',
    voto: '4/5'
  }];

  getSerieDrammatiche() {
    return this.serieDrammatiche;
  }
  getSerieAnimazione() {
    return this.serieAnimazione;
  }
  getSerieComiche() {
    return this.serieComiche;
  }
  getSerieFantasy() {
    return this.serieFantasy;
  }
  getSerieHorror() {
    return this.serieHorror;
  }
  getSerieFantascienza() {
    return this.serieFantascienza;
  }
  getSerieDocumentari() {
    return this.serieDocumentari;
  }
}
