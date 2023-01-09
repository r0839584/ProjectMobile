import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-moves',
  templateUrl: './moves.page.html',
  styleUrls: ['./moves.page.scss'],
})
export class MovesPage implements OnInit {

  pokemon: string = String(this.activatedRoute.snapshot.paramMap.get('pokemon'))

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
