import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenzeFormComponent } from './forms/competenze-form/competenze-form.component';
import { EsperienzeFormComponent } from './forms/esperienze-form/esperienze-form.component';
import { InfoFormComponent } from './forms/info-form/info-form.component';
import { IstruzioneFormComponent } from './forms/istruzione-form/istruzione-form.component';
import { DescrizioneComponent } from './home/descrizione/descrizione.component';
import { HomeComponent } from './home/home.component';
import { RiempimentoComponent } from './riempimento/riempimento.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {
    path: 'riempimento', component: RiempimentoComponent, children: [
      { path: '', component: DescrizioneComponent, pathMatch: 'full' },
      { path: 'info-personali', component: InfoFormComponent },
      { path: 'esperienze', component: EsperienzeFormComponent },
      { path: 'istruzione', component: IstruzioneFormComponent },
      { path: 'competenze', component: CompetenzeFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
