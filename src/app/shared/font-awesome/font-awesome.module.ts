import { NgModule } from '@angular/core';
import { FontAwesomeModule as FontAwesomeModuleMain } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas);


@NgModule({
  imports: [FontAwesomeModuleMain],
  exports: [FontAwesomeModuleMain]
})
export class FontAwesomeModule { }
