import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { AddRoutingModule } from './add.routing';

@NgModule({
  declarations: [
    AddComponent,
  ],
  imports: [
    CommonModule,
    AddRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AddComponent]
})
export class AddModule { }
