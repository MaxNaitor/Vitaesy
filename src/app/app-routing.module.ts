import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoFormComponent } from './forms/info-form/info-form.component';
import { DescrizioneComponent } from './home/descrizione/descrizione.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: DescrizioneComponent, pathMatch: 'full' },
      { path: 'info-personali', component: InfoFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
