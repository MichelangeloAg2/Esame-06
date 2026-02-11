import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faUser = faUser;

  // Eventuali metodi futuri per il menu o il profilo
  // Non serve alcun codice JS per i dropdown: ng-bootstrap gestisce tutto automaticamente
}

