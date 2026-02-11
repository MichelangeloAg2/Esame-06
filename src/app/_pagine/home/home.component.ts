import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  carouselItems = [
    {
      img: 'assets/img/coverfilm1.png',
      title: '"Non lasciarti catturare dal vento"',
      text: 'Vivi l\'avventura. Senti la foresta. Sopravvivi a ciò che non conosci.'
    },
    {
      img: 'assets/img/coverfilm2.png',
      title: '"Tutti ci osservano..."',
      text: 'In un mondo in cui non ci si può più nascondere...',
      color: '#a16868'
    },
    {
      img: 'assets/img/coverfilm3.png',
      title: '"Il suono delle acque. Il ritmo del mondo"',
      text: 'Scopri il mondo, attraverso i suoi suoni.'
    }
  ];


  continueWatching = [
    {
      title: "L'Esploratore",
      img: 'assets/img/poster-film1.png',
      description: 'Viaggia in un mondo dove la sopravvivenza è tutto...'
    },
    {
      title: "La Spia",
      img: 'assets/img/poster-film2.png',
      description: 'Nuove tecnologie ci spiano ogni giorno...'
    },
    {
      title: "Il Tempio sul Fiume",
      img: 'assets/img/posterfilm3.png',
      description: 'Scopri i luoghi di culto del Giappone...'
    }
  ];

  popularMovies = [
    {
      title: 'La Spia',
      img: 'assets/img/poster-film2.png',
      year: 2025,
      genre: 'Azione',
      rating: '4.9/5'
    },
    {
      title: 'Cactus Assassini',
      img: 'assets/img/poster-film4.png',
      year: 2009,
      genre: 'Horror',
      rating: '3.9/5'
    }
  ];

}
