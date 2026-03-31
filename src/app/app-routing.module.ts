import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pagine/home/home.component';
import { IndexComponent } from './_pagine/index/index.component';
import { DatipersonaliComponent } from './_pagine/datipersonali/datipersonali.component';
import { PaginanontrovataComponent } from './_pagine/paginanontrovata/paginanontrovata.component';
import { SerietvComponent } from './_pagine/serietv/serietv.component';
import { FilmComponent } from './_pagine/film/film.component';
import { FantasyComponent } from './_pagine/fantasy/fantasy.component';
import { FantascienzaComponent } from './_pagine/fantascientifico/fantascientifico.component';
import { AnimazioneComponent } from './_pagine/animazione/animazione.component';
import { DocumentarioComponent } from './_pagine/documentario/documentario.component';
import { CommediaComponent } from './_pagine/commedia/commedia.component';
import { DrammaticoComponent } from './_pagine/drammatico/drammatico.component';
import { HorrorComponent } from './_pagine/horror/horror.component';
import { AdminDashboardComponent } from './_pagine/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './_pagine/login/login.component';
import { AuthLayoutComponent } from './_componenti/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './_componenti/main-layout/main-layout.component';
import { AzioneComponent } from './_pagine/azione/azione.component';
import { DettaglioComponent } from './_pagine/dettaglio/dettaglio.component';


export const routes: Routes = [

  // AUTENTICAZIONE
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registrazione', component: IndexComponent }
    ]
  },

  // UTENTE LOGGATO
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },

      { path: 'datipersonali', component: DatipersonaliComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent },

      { path: 'serietv', component: SerietvComponent },
      { path: 'film', component: FilmComponent },
      { path: 'contenuto/:id', component: DettaglioComponent },

      { path: 'fantasy', component: FantasyComponent },
      { path: 'fantascienza', component: FantascienzaComponent },
      { path: 'drammatico', component: DrammaticoComponent },
      { path: 'horror', component: HorrorComponent },
      { path: 'commedia', component: CommediaComponent },
      { path: 'documentario', component: DocumentarioComponent },
      { path: 'animazione', component: AnimazioneComponent },
      { path: 'azione', component: AzioneComponent }
    ]
  },

  { path: '**', component: PaginanontrovataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }