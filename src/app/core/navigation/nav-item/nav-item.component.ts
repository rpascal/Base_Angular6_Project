import { Component, Input, OnInit } from '@angular/core';

import { NavigationNode } from '../navigation-node.model';

@Component({
  selector: 'scraper-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() node: NavigationNode;
  @Input() level: number;


  constructor() { }

  ngOnInit() {
  }

}
