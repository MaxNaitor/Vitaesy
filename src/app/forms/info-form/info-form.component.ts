import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {

  infoForm: FormGroup
  uploadForm: FormGroup
  imgInserita = false;

  constructor(private infoService: InfoService, public fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }

  ngOnInit(): void {
    this.infoForm = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'cognome': new FormControl(null, Validators.required),
      'dataNascita': new FormControl(null, Validators.required),
      'indirizzo': new FormControl(null, Validators.required),
      'civico': new FormControl(null, [Validators.required,this.civicoValidator.bind(this)]),
      'telefono': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  mostraImg(event) {
    this.imgInserita = true
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity()
    this.infoService.previewImmagine(this.uploadForm.get('avatar').value)
  }

  onSubmit() {
    const info = {
      'nome': this.infoForm.get('nome').value,
      'cognome': this.infoForm.get('cognome').value,
      'dataDiNascita': this.infoForm.get('dataNascita').value,
      'indirizzo': this.infoForm.get('indirizzo').value,
      'civico': this.infoForm.get('civico').value,
      'telefono': this.infoForm.get('telefono').value,
      'email': this.infoForm.get('email').value,
    }
    this.infoService.inserisciInfo(info)
  }

  civicoValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value <= 0) {
      return { isCivicoInvalid: true }
    }
    return null
  }

  mostraForm() {
    console.log(this.infoForm)
  }
}
