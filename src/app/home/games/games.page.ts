import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  pokemon: string = String(this.activatedRoute.snapshot.paramMap.get('pokemon'))

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
