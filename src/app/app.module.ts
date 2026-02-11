import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_componenti/navbar/navbar.component';
import { HomeComponent } from './_pagine/home/home.component';
import { DatipersonaliComponent } from './_pagine/datipersonali/datipersonali.component';
import { ModificaprofiloComponent } from './_pagine/modificaprofilo/modificaprofilo.component';
import { PaginanontrovataComponent } from './_pagine/paginanontrovata/paginanontrovata.component';
import { HorrorComponent } from './_pagine/film/horror/horror.component';
import { CommediaComponent } from './_pagine/film/commedia/commedia.component';
import { DrammaticoComponent } from './_pagine/film/drammatico/drammatico.component';
import { FantasyComponent } from './_pagine/film/fantasy/fantasy.component';
import { FantascientificoComponent } from './_pagine/film/fantascientifico/fantascientifico.component';
import { DocumentarioComponent } from './_pagine/film/documentario/documentario.component';
import { AnimazioneComponent } from './_pagine/film/animazione/animazione.component';
import { FilmComponent } from './_pagine/film/film.component';
import { SerietvComponent } from './_pagine/serietv/serietv.component';
import { FooterComponent } from './_componenti/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { routes } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocandinaComponent } from './_componenti/locandina/locandina.component';
import { MovieCardComponent } from './_componenti/movie-card/movie-card.component';
import { MovieRowComponent } from './_componenti/movie-row/movie-row.component';
import { MovieDetailComponent } from './_pagine/movie-detail/movie-detail.component';
import { AdminDashboardComponent } from './_pagine/admin-dashboard/admin-dashboard.component';
import { DashboardFilmComponent } from './_componenti/dashboard-film/dashboard-film.component';
import { DashboardSerietvComponent } from './_componenti/dashboard-serietv/dashboard-serietv.component';
import { DashboardUtentiComponent } from './_componenti/dashboard-utenti/dashboard-utenti.component';
import { DashboardPagamentiComponent } from './_componenti/dashboard-pagamenti/dashboard-pagamenti.component';
import { UtenteComponent } from './models/utente/utente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './_pagine/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DatipersonaliComponent,
    ModificaprofiloComponent,
    PaginanontrovataComponent,
    HorrorComponent,
    CommediaComponent,
    DrammaticoComponent,
    FantasyComponent,
    FantascientificoComponent,
    DocumentarioComponent,
    AnimazioneComponent,
    FilmComponent,
    SerietvComponent,
    FooterComponent,
    LocandinaComponent,
    MovieCardComponent,
    MovieRowComponent,
    MovieDetailComponent,
    AdminDashboardComponent,
    DashboardFilmComponent,
    DashboardSerietvComponent,
    DashboardUtentiComponent,
    DashboardPagamentiComponent,
    UtenteComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
