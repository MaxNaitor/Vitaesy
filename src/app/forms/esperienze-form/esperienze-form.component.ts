import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EsperienzaLavorativa } from 'src/app/template/esperienze-lavorative/esperienzaLavorativa.model';
import { EsperienzeService } from './esperienze.service';

@Component({
  selector: 'app-esperienze-form',
  templateUrl: './esperienze-form.component.html',
  styleUrls: ['./esperienze-form.component.css']
})
export class EsperienzeFormComponent implements OnInit {

  esperienzeForm: FormGroup = new FormGroup({
    'esperienze': new FormArray([])
  })

  adOggiCheck: boolean[] = [];

  constructor(private esperienzeService: EsperienzeService) { }

  ngOnInit(): void {
    for (let esp of this.esperienzeService.esperienze) {
      this.aggiungiEsperienza(esp.titolo, esp.datoreLavoro, esp.descrizione, esp.dataInizio, esp.dataFine)
    }
  }


  aggiungiEsperienza(titolo: string, datoreLavoro: string, descrizione: string, dataInizio: Date, dataFine: Date | string) {
    (<FormArray>this.esperienzeForm.get('esperienze')).push(new FormGroup({
      'titolo': new FormControl(titolo, Validators.required),
      'datoreLavoro': new FormControl(datoreLavoro, Validators.required),
      'descrizione': new FormControl(descrizione, Validators.required),
      'dataInizio': new FormControl(dataInizio, Validators.required),
      'dataFine': new FormControl(dataFine)
    }))
    this.adOggiCheck.push(false)
  }

  eliminaEsperienza(id: number) {
    (<FormArray>this.esperienzeForm.get('esperienze')).removeAt(id);
    this.esperienzeService.eliminaEsperienza(id);
  }

  eliminaTutte() {
    for (let i = this.getEsperienze().length - 1; i >= 0; i--) {
      this.esperienzeService.eliminaEsperienza(i);
    }
    (<FormArray>this.esperienzeForm.get('esperienze')).clear()
  }

  resettaForm(id: number) {
    (<FormArray>this.esperienzeForm.get('esperienze')).controls[id].reset()
  }

  getEsperienze() {
    return (<FormArray>this.esperienzeForm.get('esperienze')).controls
  }

  adOggi(id: number) {
    this.adOggiCheck[id] = !this.adOggiCheck[id];
    this.getEsperienze()[id].get('dataFine').reset()
  }

  onDataFineChange(id: number) {
    this.adOggiCheck[id] = false;
  }

  onSubmit() {
    let validForms = new FormArray([]);
    for (let control of this.getEsperienze()) {
      if (control.valid) {
        validForms.push(control)
      }
    }
    if (validForms.length === 0) {
      alert('Impossibile inviare!\n' +
        'Hai compilato tutti i campi? ')
    }
    let esperienze: EsperienzaLavorativa[] = (<FormArray>validForms).value;
    for (let esp of esperienze) {
      if (esp.dataFine == null) {
        esp.dataFine = 'Ad oggi'
      }
    }
    this.esperienzeService.inviaEsperienze(esperienze)
  }

  inviaSingola(id: number) {
    this.esperienzeService.inviaEsperienze([this.getEsperienze()[id].value])
  }

}
