import { Component, Input, OnInit } from '@angular/core';

import { NavigationNode } from '../navigation-node.model';

@Component({
  selector: 'scraper-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {


  @Input() menu: NavigationNode[];

  constructor() { }

  ngOnInit() {
  }

}
