import { Component, Input, OnInit } from '@angular/core';

import { NavigationNode } from '../navigation-node.model';

@Component({
  selector: 'scraper-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {
  @Input() node: NavigationNode;
  constructor() { }

  ngOnInit() {
  }

}
