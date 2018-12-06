import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HarderobchikComponent } from './harderobchik.component';
import { HarderobchikRoutingModule } from './harderobchik.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    HarderobchikComponent,
  ],
  imports: [
    CommonModule,
    HarderobchikRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [HarderobchikComponent]
})
export class HarderobchikModule { }
