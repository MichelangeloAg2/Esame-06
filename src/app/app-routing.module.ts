import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './_pagine/home/home.component';
import { ModificaprofiloComponent } from './_pagine/modificaprofilo/modificaprofilo.component';
import { DatipersonaliComponent } from './_pagine/datipersonali/datipersonali.component';
import { PaginanontrovataComponent } from './_pagine/paginanontrovata/paginanontrovata.component';

import { SerietvComponent } from './_pagine/serietv/serietv.component';
import { FilmComponent } from './_pagine/film/film.component';
import { FantasyComponent } from './_pagine/film/fantasy/fantasy.component';
import { FantascientificoComponent } from './_pagine/film/fantascientifico/fantascientifico.component';
import { AnimazioneComponent } from './_pagine/film/animazione/animazione.component';
import { DocumentarioComponent } from './_pagine/film/documentario/documentario.component';
import { CommediaComponent } from './_pagine/film/commedia/commedia.component';
import { DrammaticoComponent } from './_pagine/film/drammatico/drammatico.component';
import { HorrorComponent } from './_pagine/film/horror/horror.component';
import { AdminDashboardComponent } from './_pagine/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  //------SEZIONE PROFILO------//
  { path: 'modificaprofilo', component: ModificaprofiloComponent },
  { path: 'datipersonali', component: DatipersonaliComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },


  //------------SEZIONE CONTENUTI-------------//
  { path: 'serietv', component: SerietvComponent },
  {
    path: 'film',
    component: FilmComponent,
    children: [

      { path: 'fantasy', component: FantasyComponent },
      { path: 'fantascienza', component: FantascientificoComponent },
      { path: 'drammatico', component: DrammaticoComponent },
      { path: 'horror', component: HorrorComponent },
      { path: 'commedia', component: CommediaComponent },
      { path: 'documentario', component: DocumentarioComponent },
      { path: 'animazione', component: AnimazioneComponent },
    ]
  },

  //------SEZIONE PAGINA NON TROVATA------//

  { path: '**', component: PaginanontrovataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }