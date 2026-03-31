import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() contenuto: any;

  private storage = environment.storageUrl;

  constructor(private router: Router) { }

  vaiAlDettaglio() {
    this.router.navigate(['/contenuto', this.contenuto.id], {
      queryParams: {
        tipo: this.contenuto.stagioni ? 'serie' : 'film'
      }
    });
  }

  play(event: Event) {
    event.stopPropagation();
    console.log('PLAY DIRETTO');
  }

  getImage(): string {

    if (!this.contenuto?.locandina) {
      return 'assets/no-image.jpg';
    }

    return this.storage + this.contenuto.locandina;
  }

  ngOnInit() {
    console.log('CONTENUTO:', this.contenuto);
    console.log('COPERTINA:', this.contenuto?.copertina);
  }
}