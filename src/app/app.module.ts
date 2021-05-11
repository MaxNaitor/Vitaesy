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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TemplateComponent,
    InfopersonaliComponent,
    EsperienzeLavorativeComponent,
    IstruzioneComponent
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
