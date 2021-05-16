import { Component, OnInit } from '@angular/core';
import { CompetenzeService } from 'src/app/forms/competenze-form/competenze.service';
import { Competenze } from './competenze.model';

@Component({
  selector: 'app-competenze-personali',
  templateUrl: './competenze-personali.component.html',
  styleUrls: ['./competenze-personali.component.css']
})
export class CompetenzePersonaliComponent implements OnInit {

  competenze: Competenze

  constructor(private compService: CompetenzeService) { }

  ngOnInit(): void {
    this.competenze = this.compService.competenze
    this.compService.aggiornaCompetenze.subscribe((comp: Competenze) => {
      this.competenze = comp
    })
  }

}
