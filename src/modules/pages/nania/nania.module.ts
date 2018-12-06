import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaniaComponent } from './nania.component';
import { NaniaRoutingModule } from './nania.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    NaniaComponent,
  ],
  imports: [
    CommonModule,
    NaniaRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [NaniaComponent]
})
export class NaniaModule { }
