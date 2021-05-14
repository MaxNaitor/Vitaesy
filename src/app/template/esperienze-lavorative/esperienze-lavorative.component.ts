import { Component, OnInit } from '@angular/core';
import { EsperienzeService } from 'src/app/forms/esperienze-form/esperienze.service';
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

  constructor(private esperienzeService: EsperienzeService) { }

  ngOnInit(): void {
    this.esperienzeService.submitEsperienze.subscribe((esperienze: EsperienzaLavorativa[]) => {
      console.log(esperienze)
      this.esperienze = esperienze
    })
    this.esperienzeService.eliminaEsperienze.subscribe((id: number) => {
      this.esperienze.splice(id,1)
    })
  }

  isAttuale(idEsperienza: number) {
    return typeof this.esperienze[idEsperienza].dataFine === 'string'
  }

}
