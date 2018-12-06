import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuvernantkaComponent } from './huvernantka.component';
import { HuvernantkaRoutingModule } from './huvernantka.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    HuvernantkaComponent,
  ],
  imports: [
    CommonModule,
    HuvernantkaRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [HuvernantkaComponent]
})
export class HuvernantkaModule { }
