import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from './font-awesome/font-awesome.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ],
  declarations: [
  ],
  providers: [],
  exports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
