import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  pokemon: string = String(this.activatedRoute.snapshot.paramMap.get('pokemon'))

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
