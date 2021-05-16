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
import { EsperienzeFormComponent } from './forms/esperienze-form/esperienze-form.component';
import { IstruzioneFormComponent } from './forms/istruzione-form/istruzione-form.component';
import { CompetenzeFormComponent } from './forms/competenze-form/competenze-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RiempimentoComponent } from './riempimento/riempimento.component';
import { FooterComponent } from './footer/footer.component';

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
    EsperienzeFormComponent,
    IstruzioneFormComponent,
    CompetenzeFormComponent,
    RiempimentoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
