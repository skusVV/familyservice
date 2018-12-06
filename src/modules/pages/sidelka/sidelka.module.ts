import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidelkaComponent } from './sidelka.component';
import { SidelkaRoutingModule } from './sidelka.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    SidelkaComponent,
  ],
  imports: [
    CommonModule,
    SidelkaRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [SidelkaComponent]
})
export class SidelkaModule { }
