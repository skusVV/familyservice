import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SectionComponent } from '../section/section.component';
import { RequestComponent } from '../request/request.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    LandingComponent,
    SectionComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
