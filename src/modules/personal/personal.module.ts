import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { PersonalRoutingModule } from './personal.routing';

@NgModule({
  declarations: [
    PersonalComponent,
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ],
  providers: [
  ],
  bootstrap: [PersonalComponent]
})
export class PersonalModule { }
