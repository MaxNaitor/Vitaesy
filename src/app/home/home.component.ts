import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stato: string

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  compila() {
    this.router.navigate(['/riempimento','info-personali'])
  }

  ngOnInit(): void {
    this.stato = this.activeRoute.snapshot.params['stato'];
    this.activeRoute.params.subscribe((params:Params) => {
      console.log(params['stato'])
    })
    console.log(this.stato)
  }

}
