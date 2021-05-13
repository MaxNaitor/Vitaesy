import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/forms/info-form/info.service';
import { DefaultImg } from './default.img';
import { Info } from './info.model';

@Component({
  selector: 'app-infopersonali',
  templateUrl: './infopersonali.component.html',
  styleUrls: ['./infopersonali.component.css']
})
export class InfopersonaliComponent implements OnInit {

  infoUtente = {
    'nome': 'Nome',
    'cognome': 'Cognome',
    'dataDiNascita': new Date(),
    'indirizzo': 'Indirizzo',
    'civico': 123,
    'telefono': '3663938924',
    'email': 'mail@mail.com',
  }
  imageURL = new DefaultImg().url

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.inserimento.subscribe((info: Info) => {
      this.infoUtente = info
    })
    this.infoService.immagine.subscribe((img: File) => {
      // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      }
      reader.readAsDataURL(img)
    })
  }

}
