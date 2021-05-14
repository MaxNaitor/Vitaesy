import { Component, OnInit } from '@angular/core';
import { EsperienzeService } from 'src/app/forms/esperienze-form/esperienze.service';
import { EsperienzaLavorativa } from './esperienzaLavorativa.model';

@Component({
  selector: 'app-esperienze-lavorative',
  templateUrl: './esperienze-lavorative.component.html',
  styleUrls: ['./esperienze-lavorative.component.css']
})
export class EsperienzeLavorativeComponent implements OnInit {

  esperienze: EsperienzaLavorativa[]

  constructor(private esperienzeService: EsperienzeService) { }

  ngOnInit(): void {
    this.esperienze = this.esperienzeService.esperienze
    this.esperienzeService.aggiornaEsperienze.subscribe((esperienze: EsperienzaLavorativa[]) => {
      this.esperienze = esperienze
    })
  }

  isAttuale(idEsperienza: number) {
    return typeof this.esperienze[idEsperienza].dataFine === 'string'
  }

}
