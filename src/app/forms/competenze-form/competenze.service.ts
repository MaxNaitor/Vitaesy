import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Competenze } from 'src/app/template/competenze-personali/competenze.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenzeService {

  competenze: Competenze = {
    linguaMadre: 'Italiano',
    lingueStraniere: [{
      lingua: 'Inglese',
      ascolto: 'C1',
      lettura: 'C1',
      parlato: 'B2'
    },
    {
      lingua: 'Francese',
      ascolto: 'A1',
      lettura: 'B1',
      parlato: 'A2'
    },
    ],
    competenze: [
      'Comunicazione', 'Problem Solving'
    ],
    patenti: ['B']
  }

  aggiornaCompetenze = new Subject<Competenze>()

  constructor() { }

  eliminaLingua(id: number) {
    this.competenze.lingueStraniere.splice(id, 1);
    this.aggiornaCompetenze.next(this.competenze)
  }

  eliminaCompetenza(id: number) {
    this.competenze.competenze.splice(id, 1)
    this.aggiornaCompetenze.next(this.competenze)
  }

  eliminaPatente(id: number) {
    this.competenze.patenti.splice(id, 1)
    this.aggiornaCompetenze.next(this.competenze)
  }

  inviaCompetenze (competenze: Competenze) {
    console.log(competenze)
    this.competenze = competenze
    this.aggiornaCompetenze.next(this.competenze)
  }
}
