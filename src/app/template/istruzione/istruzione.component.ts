import { Component, OnInit } from '@angular/core';
import { IstruzioneService } from 'src/app/forms/istruzione-form/istruzione.service';
import { Istruzione } from './istruzione.model';

@Component({
  selector: 'app-istruzione',
  templateUrl: './istruzione.component.html',
  styleUrls: ['./istruzione.component.css']
})
export class IstruzioneComponent implements OnInit {

  istruzione: Istruzione[]

  constructor(private istruzioneService: IstruzioneService) { }

  ngOnInit(): void {
    this.istruzione = this.istruzioneService.istruzioni
    this.istruzioneService.aggiornaIstruzione.subscribe((ist: Istruzione[]) => {
      this.istruzione = ist
    })
  }

  isAttuale(idEsperienza: number) {
    return typeof this.istruzione[idEsperienza].dataFine === 'string'
  }
}
