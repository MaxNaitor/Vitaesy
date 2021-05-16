import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Competenze } from 'src/app/template/competenze-personali/competenze.model';
import { CompetenzeService } from './competenze.service';

@Component({
  selector: 'app-competenze-form',
  templateUrl: './competenze-form.component.html',
  styleUrls: ['./competenze-form.component.css']
})
export class CompetenzeFormComponent implements OnInit {

  competenzeForm: FormGroup;

  constructor(private compService: CompetenzeService) { }

  ngOnInit(): void {
    this.competenzeForm = new FormGroup({
      'linguaMadre': new FormControl(this.compService.competenze.linguaMadre, Validators.required),
      'lingueStraniere': new FormArray([]),
      'competenze': new FormArray([]),
      'patenti': new FormArray([])
    })
    const lingueStraniere = this.compService.competenze.lingueStraniere
    for (let i = 0; i < lingueStraniere.length; i++) {
      this.aggiungiLingua(lingueStraniere[i].lingua, lingueStraniere[i].ascolto, lingueStraniere[i].lettura, lingueStraniere[i].parlato)
    }
    const competenze = this.compService.competenze.competenze
    for (let i = 0; i < competenze.length; i++) {
      console.log(competenze[i])
      this.aggiungiCompetenza(competenze[i])
    }
    const patenti = this.compService.competenze.patenti
    for (let i = 0; i < patenti.length; i++) {
      this.aggiungiPatente(patenti[i])
    }
  }

  aggiungiLingua(lingua: string, ascolto: string, lettura: string, parlato: string) {
    (<FormArray>this.competenzeForm.get('lingueStraniere')).push(new FormGroup({
      'lingua': new FormControl(lingua, Validators.required),
      'ascolto': new FormControl(ascolto, Validators.required),
      'lettura': new FormControl(lettura, Validators.required),
      'parlato': new FormControl(parlato, Validators.required),
    }))
  }

  aggiungiCompetenza(competenza: string) {
    (<FormArray>this.competenzeForm.get('competenze')).push(new FormControl(competenza, Validators.required))
  }

  aggiungiPatente(patente: string) {
    (<FormArray>this.competenzeForm.get('patenti')).push(new FormControl(patente, Validators.required))
  }

  eliminaLingua(id: number) {
    (<FormArray>this.competenzeForm.get('lingueStraniere')).removeAt(id)
    this.compService.eliminaLingua(id)
  }

  eliminaCompetenza(id: number) {
    (<FormArray>this.competenzeForm.get('competenze')).removeAt(id)
    this.compService.eliminaCompetenza(id)
  }

  eliminaPatente(id: number) {
    (<FormArray>this.competenzeForm.get('patenti')).removeAt(id)
    this.compService.eliminaPatente(id)
  }

  getLingueStraniere() {
    return (<FormArray>this.competenzeForm.get('lingueStraniere')).controls
  }

  getCompetenze() {
    return (<FormArray>this.competenzeForm.get('competenze')).controls
  }

  getPatenti() {
    return (<FormArray>this.competenzeForm.get('patenti')).controls
  }

  onSubmit() {
    let competenze: Competenze = {
      linguaMadre: this.competenzeForm.get('linguaMadre').value,
      lingueStraniere: this.competenzeForm.get('lingueStraniere').value,
      competenze: this.competenzeForm.get('competenze').value,
      patenti: this.competenzeForm.get('patenti').value
    }
    this.compService.inviaCompetenze(competenze)
  }

}
