import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infopersonali',
  templateUrl: './infopersonali.component.html',
  styleUrls: ['./infopersonali.component.css']
})
export class InfopersonaliComponent implements OnInit {

  nome = 'Nome'
  cognome = 'Cognome'
  dataDiNascita = new Date()
  indirizzo = 'Indirizzo'
  civico = 123
  telefono = '3663938924'
  email = 'mail@mail.com'
  
  constructor() { }

  ngOnInit(): void {
  }

}
