import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PovarComponent } from './povar.component';
import { PovarRoutingModule } from './povar.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    PovarComponent,
  ],
  imports: [
    CommonModule,
    PovarRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [PovarComponent]
})
export class PovarModule { }
