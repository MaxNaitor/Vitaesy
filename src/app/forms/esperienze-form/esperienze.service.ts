import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EsperienzaLavorativa } from 'src/app/template/esperienze-lavorative/esperienzaLavorativa.model';

@Injectable({
  providedIn: 'root'
})
export class EsperienzeService {

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

  aggiornaEsperienze = new Subject<EsperienzaLavorativa[]>()

  constructor() { }

  inviaEsperienze(esperienze: EsperienzaLavorativa[]) {
    this.esperienze = esperienze
    this.aggiornaEsperienze.next(this.esperienze)
  }
  
  eliminaEsperienza(id: number) {
    this.esperienze.splice(id,1)
    this.aggiornaEsperienze.next(this.esperienze)
  }
}
