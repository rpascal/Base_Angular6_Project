import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ErrorPageComponent } from './error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PageNotFoundComponent, ErrorPageComponent],
  exports: [PageNotFoundComponent, ErrorPageComponent]

})
export class FeaturesModule { }
