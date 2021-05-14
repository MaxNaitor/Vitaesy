import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Istruzione } from 'src/app/template/istruzione/istruzione.model';
import { IstruzioneService } from './istruzione.service';

@Component({
  selector: 'app-istruzione-form',
  templateUrl: './istruzione-form.component.html',
  styleUrls: ['./istruzione-form.component.css']
})
export class IstruzioneFormComponent implements OnInit {

  istruzioniForm: FormGroup = new FormGroup({
    'istruzioni': new FormArray([])
  })

  adOggiCheck: boolean[] = [];

  constructor(private istruzioniService: IstruzioneService) { }

  ngOnInit(): void {
    for (let ist of this.istruzioniService.istruzioni) {
      this.aggiungiIstruzione(ist.titolo, ist.presso, ist.descrizione, ist.dataInizio, ist.dataFine)
    }
    console.log(this.istruzioniForm)
  }


  aggiungiIstruzione(titolo: string, presso: string, descrizione: string, dataInizio: Date, dataFine: Date | string) {
    (<FormArray>this.istruzioniForm.get('istruzioni')).push(new FormGroup({
      'titolo': new FormControl(titolo, Validators.required),
      'presso': new FormControl(presso, Validators.required),
      'descrizione': new FormControl(descrizione, Validators.required),
      'dataInizio': new FormControl(dataInizio, Validators.required),
      'dataFine': new FormControl(dataFine)
    }))
    this.adOggiCheck.push(false)
  }

  eliminaIstruzione(id: number) {
    (<FormArray>this.istruzioniForm.get('istruzioni')).removeAt(id);
    this.istruzioniService.eliminaIstruzione(id);
  }

  eliminaTutte() {
    for (let i = this.getIstruzioni().length - 1; i >= 0; i--) {
      this.istruzioniService.eliminaIstruzione(i);
    }
    (<FormArray>this.istruzioniForm.get('istruzioni')).clear()
  }

  resettaForm(id: number) {
    (<FormArray>this.istruzioniForm.get('istruzioni')).controls[id].reset()
  }

  getIstruzioni() {
    return (<FormArray>this.istruzioniForm.get('istruzioni')).controls
  }

  adOggi(id: number) {
    this.adOggiCheck[id] = !this.adOggiCheck[id];
    this.getIstruzioni()[id].get('dataFine').reset()
  }

  onDataFineChange(id: number) {
    this.adOggiCheck[id] = false;
  }

  onSubmit() {
    let validForms = new FormArray([]);
    for (let control of this.getIstruzioni()) {
      if (control.valid) {
        validForms.push(control)
      }
    }
    if (validForms.length === 0) {
      alert('Impossibile inviare!\n' +
        'Hai compilato tutti i campi? ')
    }
    let istruzioni: Istruzione[] = (<FormArray>validForms).value;
    for (let ist of istruzioni) {
      if (ist.dataFine == null) {
        ist.dataFine = 'Ad oggi'
      }
    }
    this.istruzioniService.inviaIstruzioni(istruzioni)
  }

  inviaSingola(id: number) {
    this.istruzioniService.inviaIstruzioni([this.getIstruzioni()[id].value])
  }

}
