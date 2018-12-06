import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoditelComponent } from './voditel.component';
import { VoditelRoutingModule } from './voditel.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    VoditelComponent,
  ],
  imports: [
    CommonModule,
    VoditelRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [VoditelComponent]
})
export class VoditelModule { }
