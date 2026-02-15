import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmDrammatici = [
    {
      titolo: 'Il Tempio sul Fiume',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Drammatico',
      voto: '5/5'
    },
    {
      titolo: 'Titolo del Film',
      img: 'assets/img/poster-film1.png',
      anno: 2024,
      genere: 'Drammatico',
      voto: '4,4/5'
    },
    {
      titolo: 'La Spia',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: 'Drammatico',
      voto: '4,9/5'
    },
    {
      titolo: 'Dramma Notturno',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: 'Drammatico',
      voto: '4/5'
    }
  ];

  filmAnimazione = [
    {
      titolo: 'Tip e Tap',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Animazione',
      voto: '5/5'
    },

    {
      titolo: 'Hamtaro',
      img: 'assets/img/poster-film1.png',
      anno: 2001,
      genere: 'Animazione',
      voto: '4,4/5'
    },
    {
      titolo: 'Totally Spies',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: 'Animazione',
      voto: '4,9/5'
    },
    {
      titolo: 'Sette piccoli criceti',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: 'Animazione',
      voto: '4/5'
    }
  ];

  filmCommedia = [
    {
      titolo: 'Laughing Stars',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Commedia',
      voto: '5/5'
    },
    {
      titolo: 'La Commedia Italiana',
      img: 'assets/img/poster-film1.png',
      anno: 2024,
      genere: '',
      voto: '4,4/5'
    },
    {
      titolo: 'Sette Sorrisi',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: '',
      voto: '4,9/5'
    },
    {
      titolo: 'Il Sorriso Perfetto',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: '',
      voto: '4/5'
    }
  ];
  filmDocumentario = [
    {
      titolo: 'Le sette meraviglie degli oceani',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Documentario',
      voto: '5/5'
    },
    {
      titolo: 'Il Sorriso del Mare',
      img: 'assets/img/poster-film1.png',
      anno: 2024,
      genere: 'Documentario',
      voto: '4,4/5'
    },
    {
      titolo: 'Le vette dell’ignoto',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: 'Documentario',
      voto: '4,9/5'
    },
    {
      titolo: 'Il Mare in un Sorriso',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: 'Documentario',
      voto: '4/5'
    }
  ];
  filmFantascientifico = [
    {
      titolo: 'Il Sorriso del Futuro',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Fantascienza',
      voto: '5/5'
    },
    {
      titolo: 'Un italiano su marte',
      img: 'assets/img/poster-film1.png',
      anno: 2024,
      genere: 'Fantascienza',
      voto: '4,4/5'
    },
    {
      titolo: 'Cosa c’è oltre le stelle?',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: 'Fantascienza',
      voto: '4,9/5'
    },
    {
      titolo: 'Altri sistemi, altre galassie',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: 'Fantascienza',
      voto: '4/5'
    }
  ];
  filmFantasy = [
    {
      titolo: 'Il Re del Mondo',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Fantasy',
      voto: '5/5'
    },
    {
      titolo: 'Le Cronache dell’Incantatore',
      img: 'assets/img/poster-film1.png',
      anno: 2024,
      genere: 'Fantasy',
      voto: '4,4/5'
    },
    {
      titolo: 'In viaggio con i draghi',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: 'Fantasy',
      voto: '4,9/5'
    },
    {
      titolo: 'Elfi, fate e creature magiche',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: 'Fantasy',
      voto: '4/5'
    }
  ];
  filmHorror = [
    {
      titolo: 'Psycho-Addiction',
      img: 'assets/img/posterfilm3.png',
      anno: 2016,
      genere: 'Horror',
      voto: '5/5'
    },
    {
      titolo: 'La casa stregata',
      img: 'assets/img/poster-film1.png',
      anno: 2024,
      genere: 'Horror',
      voto: '4,4/5'
    },
    {
      titolo: 'Cactus Assassini',
      img: 'assets/img/poster-film2.png',
      anno: 2025,
      genere: 'Horror',
      voto: '4,9/5'
    },
    {
      titolo: 'Solo sangue',
      img: 'assets/img/filmtot.png',
      anno: 2024,
      genere: 'Horror',
      voto: '4/5'
    }
  ];

  getFilmDrammatici() {
    return this.filmDrammatici;
  }
  getFilmAnimazione() {
    return this.filmAnimazione;
  }
  getFilmCommedia() {
    return this.filmCommedia;
  }
  getFilmDocumentario() {
    return this.filmDocumentario;
  }
  getFilmFantascientifico() {
    return this.filmFantascientifico;
  }
  getFilmFantasy() {
    return this.filmFantasy;
  }
  getFilmHorror() {
    return this.filmHorror;
  }
}
