import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Info } from 'src/app/template/infopersonali/info.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  inserimento = new Subject<Info>()
  immagine = new Subject<File>()

  constructor() { }

  inserisciInfo(info: Info) {
    this.inserimento.next(info)
  }

  previewImmagine(img: File) {
    this.immagine.next(img)
  }

}
