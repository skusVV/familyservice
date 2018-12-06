import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SadovnikComponent } from './sadovnik.component';
import { SadovnikRoutingModule } from './sadovnik.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    SadovnikComponent,
  ],
  imports: [
    CommonModule,
    SadovnikRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [SadovnikComponent]
})
export class SadovnikModule { }
