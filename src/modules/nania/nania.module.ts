import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaniaComponent } from './nania.component';
import { NaniaRoutingModule } from './nania.routing';
import {SharedModule} from '../shared.module';
import {PersonComponent} from '../../components/person/person.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    NaniaComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    NaniaRoutingModule,
    MatCardModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [NaniaComponent]
})
export class NaniaModule { }
