import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OhranaComponent } from './ohrana.component';
import { OhranaRoutingModule } from './ohrana.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    OhranaComponent,
  ],
  imports: [
    CommonModule,
    OhranaRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [OhranaComponent]
})
export class OhranaModule { }
