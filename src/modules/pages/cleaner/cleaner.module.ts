import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanerComponent } from './cleaner.component';
import { CleanerRoutingModule } from './cleaner.routing';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    CleanerComponent,
  ],
  imports: [
    CommonModule,
    CleanerRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [CleanerComponent]
})
export class CleanerModule { }
