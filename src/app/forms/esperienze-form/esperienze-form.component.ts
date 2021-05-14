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

  adOggiCheck = false;

  constructor(private esperienzeService: EsperienzeService) { }

  ngOnInit(): void {
  }


  aggiungiEsperienza() {
    (<FormArray>this.esperienzeForm.get('esperienze')).push(new FormGroup({
      'titolo': new FormControl(null, Validators.required),
      'datoreLavoro': new FormControl(null, Validators.required),
      'descrizione': new FormControl(null, Validators.required),
      'dataInizio': new FormControl(null, Validators.required),
      'dataFine': new FormControl(null)
    }))
  }

  eliminaEsperienza(id: number) {
    (<FormArray>this.esperienzeForm.get('esperienze')).removeAt(id)
    this.esperienzeService.eliminaEsperienza(id)
  }

  resettaForm(id: number) {
    (<FormArray>this.esperienzeForm.get('esperienze')).reset(id)
  }

  getEsperienze() {
    return (<FormArray>this.esperienzeForm.get('esperienze')).controls
  }

  adOggi() {
    this.adOggiCheck = !this.adOggiCheck;
    (<FormArray>this.esperienzeForm.get('esperienze')).controls[0].get('dataFine').reset()
  }

  onDataFineChange() {
    this.adOggiCheck = false;
  }

  onSubmit() {
    let esperienze: EsperienzaLavorativa[] = (<FormArray>this.esperienzeForm.get('esperienze')).value;
    for (let esp of esperienze) {
      if (esp.dataFine == null) {
        esp.dataFine = 'Ad oggi'
      }
    }
    this.esperienzeService.inviaEsperienze(esperienze)
  }

}
