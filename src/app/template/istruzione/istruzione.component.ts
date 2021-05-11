import { Component, OnInit } from '@angular/core';
import { EsperienzaLavorativa } from '../esperienze-lavorative/esperienzaLavorativa.model';
import { Istruzione } from './istruzione.model';

@Component({
  selector: 'app-istruzione',
  templateUrl: './istruzione.component.html',
  styleUrls: ['./istruzione.component.css']
})
export class IstruzioneComponent implements OnInit {

  esperienze: Istruzione[] = [
    {
      dataInizio: new Date(),
      dataFine: 'Ad oggi',
      titolo: 'Istruzione 1',
      presso: 'Presso 1',
      descrizione: 'Descrizione 1'
    },
    {
      dataInizio: new Date(),
      dataFine: new Date(),
      titolo: 'Istruzione 2',
      presso: 'Presso 2',
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
