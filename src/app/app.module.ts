import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template/template.component';
import { InfopersonaliComponent } from './template/infopersonali/infopersonali.component';
import { EsperienzeLavorativeComponent } from './template/esperienze-lavorative/esperienze-lavorative.component';
import { IstruzioneComponent } from './template/istruzione/istruzione.component';
import { CompetenzePersonaliComponent } from './template/competenze-personali/competenze-personali.component';
import { TrattamentoDatiComponent } from './template/trattamento-dati/trattamento-dati.component';
import { InfoFormComponent } from './forms/info-form/info-form.component';
import { HomeComponent } from './home/home.component';
import { DescrizioneComponent } from './home/descrizione/descrizione.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TemplateComponent,
    InfopersonaliComponent,
    EsperienzeLavorativeComponent,
    IstruzioneComponent,
    CompetenzePersonaliComponent,
    TrattamentoDatiComponent,
    InfoFormComponent,
    HomeComponent,
    DescrizioneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
