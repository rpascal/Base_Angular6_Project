import { Injectable } from '@angular/core';

import { NavigationNode } from './navigation-node.model';
import { NavigationModule } from './navigation.module';

@Injectable({
  providedIn: NavigationModule
})
export class NavigationService {

  public getNavigationInfo(): NavigationNode[] {
    const navigation: NavigationNode[] = [
      {
        title: 'Pages',
        children: [
          {
            title: 'Home',
            faIcon: 'tree',
            routerPath: 'home'
          },
          {
            title: 'Not Found',
            faIcon: 'star',
            routerPath: 'jdskds'
          }
        ]
      }

    ];
    return navigation;
  }
}
