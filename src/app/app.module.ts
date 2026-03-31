import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_componenti/navbar/navbar.component';
import { HomeComponent } from './_pagine/home/home.component';
import { DatipersonaliComponent } from './_pagine/datipersonali/datipersonali.component';
import { PaginanontrovataComponent } from './_pagine/paginanontrovata/paginanontrovata.component';
import { HorrorComponent } from './_pagine/horror/horror.component';
import { CommediaComponent } from './_pagine/commedia/commedia.component';
import { DrammaticoComponent } from './_pagine/drammatico/drammatico.component';
import { FantasyComponent } from './_pagine/fantasy/fantasy.component';
import { FantascienzaComponent } from './_pagine/fantascientifico/fantascientifico.component';
import { DocumentarioComponent } from './_pagine/documentario/documentario.component';
import { AnimazioneComponent } from './_pagine/animazione/animazione.component';
import { FilmComponent } from './_pagine/film/film.component';
import { SerietvComponent } from './_pagine/serietv/serietv.component';
import { FooterComponent } from './_componenti/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieCardComponent } from './_componenti/movie-card/movie-card.component';
import { MovieRowComponent } from './_componenti/movie-row/movie-row.component';
import { AdminDashboardComponent } from './_pagine/admin-dashboard/admin-dashboard.component';
import { UtenteComponent } from './models/utente/utente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './_pagine/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './_pagine/login/login.component';
import { AuthNavbarComponent } from './_componenti/auth-navbar/auth-navbar.component';
import { MainLayoutComponent } from './_componenti/main-layout/main-layout.component';
import { AuthLayoutComponent } from './_componenti/auth-layout/auth-layout.component';
import { AzioneComponent } from './_pagine/azione/azione.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SerieCardComponent } from './_componenti/serie-card/serie-card.component';
import { DettaglioComponent } from './_pagine/dettaglio/dettaglio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DatipersonaliComponent,
    PaginanontrovataComponent,
    HorrorComponent,
    CommediaComponent,
    DrammaticoComponent,
    FantasyComponent,
    FantascienzaComponent,
    DocumentarioComponent,
    AnimazioneComponent,
    FilmComponent,
    SerietvComponent,
    FooterComponent,
    MovieCardComponent,
    MovieRowComponent,
    AdminDashboardComponent,
    UtenteComponent,
    IndexComponent,
    LoginComponent,
    AuthNavbarComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    AzioneComponent,
    SerieCardComponent,
    DettaglioComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
