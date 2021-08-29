import { Component, OnInit } from '@angular/core';
import { mockitems } from '../../mocks/item.mock';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  items: any;

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {
      this.items = mockitems;
    })
  }

}
