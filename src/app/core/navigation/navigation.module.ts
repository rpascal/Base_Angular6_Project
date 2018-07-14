import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { NavItemComponent } from './nav-item/nav-item.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [NavMenuComponent, NavItemComponent, NavLinkComponent],
  exports: [NavMenuComponent]
})
export class NavigationModule { }
