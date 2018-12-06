import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanerComponent } from './cleaner.component';
import { CleanerRoutingModule } from './cleaner.routing';
import {SharedModule} from '../shared.module';
import {PersonComponent} from '../../components/person/person.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CleanerComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    CleanerRoutingModule,
    MatCardModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [CleanerComponent]
})
export class CleanerModule { }
