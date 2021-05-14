import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EsperienzaLavorativa } from 'src/app/template/esperienze-lavorative/esperienzaLavorativa.model';

@Injectable({
  providedIn: 'root'
})
export class EsperienzeService {

  submitEsperienze = new Subject<EsperienzaLavorativa[]>()
  eliminaEsperienze = new Subject<number>()

  constructor() { }

  inviaEsperienze(esperienze: EsperienzaLavorativa[]) {
    this.submitEsperienze.next(esperienze)
  }
  
  eliminaEsperienza(id: number) {
    this.eliminaEsperienze.next(id)
  }
}
