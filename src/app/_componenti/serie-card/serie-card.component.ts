import { Component, Input } from '@angular/core';
import { ISerie } from 'src/app/_interfacce/iserie';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.scss']
})
export class SerieCardComponent {

  @Input() serie!: ISerie;

  private storage = environment.storageUrl;

  getImage(): string {
    return this.serie?.locandina
      ? this.storage + this.serie.locandina
      : 'assets/no-image.jpg';
  }

  getAnno(): string {
    return this.serie?.anno_inizio?.toString() || '';
  }
}