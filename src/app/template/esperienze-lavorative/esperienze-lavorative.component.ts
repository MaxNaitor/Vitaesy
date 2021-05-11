import { Component, OnInit } from '@angular/core';
import { EsperienzaLavorativa } from './esperienzaLavorativa.model';

@Component({
  selector: 'app-esperienze-lavorative',
  templateUrl: './esperienze-lavorative.component.html',
  styleUrls: ['./esperienze-lavorative.component.css']
})
export class EsperienzeLavorativeComponent implements OnInit {

  esperienze: EsperienzaLavorativa[] = [
    {
      dataInizio: new Date(),
      dataFine: 'Ad oggi',
      titolo: 'Esperienza 1',
      datoreLavoro: 'Datore 1',
      descrizione: 'Descrizione 1'
    },
    {
      dataInizio: new Date(),
      dataFine: new Date(),
      titolo: 'Esperienza 2',
      datoreLavoro: 'Datore 2',
      descrizione: 'Descrizione 2'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  isAttuale(idEsperienza: number) {
    return typeof this.esperienze[idEsperienza].dataFine === 'string'
  }

}
