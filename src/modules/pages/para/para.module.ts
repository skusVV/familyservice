import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParaComponent } from './para.component';
import { ParaRoutingModule } from './para.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    ParaComponent,
  ],
  imports: [
    CommonModule,
    ParaRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [ParaComponent]
})
export class ParaModule { }
