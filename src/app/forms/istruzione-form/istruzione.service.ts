import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Istruzione } from 'src/app/template/istruzione/istruzione.model';

@Injectable({
  providedIn: 'root'
})
export class IstruzioneService {

  istruzioni: Istruzione[] = [
    {
      dataInizio: new Date(),
      dataFine: 'Ad oggi',
      titolo: 'Istruzione 1',
      presso: 'Presso 1',
      descrizione: 'Descrizione 1'
    },
    {
      dataInizio: new Date(),
      dataFine: new Date(),
      titolo: 'Istruzione 2',
      presso: 'Presso 2',
      descrizione: 'Descrizione 2'
    },
  ]

  aggiornaIstruzione = new Subject<Istruzione[]>()

  constructor() { }

  inviaIstruzioni(istruzioni: Istruzione[]) {
    this.istruzioni = istruzioni
    this.aggiornaIstruzione.next(this.istruzioni)
  }

  eliminaIstruzione(id: number) {
    this.istruzioni.splice(id, 1)
    this.aggiornaIstruzione.next(this.istruzioni)
  }
}
