import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SectionComponent } from '../section/section.component';
import { RequestComponent } from '../request/request.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TextMaskModule } from 'angular2-text-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoubleSectionComponent } from '../doubleSection/doubleSection.component';

@NgModule({
  declarations: [
    LandingComponent,
    SectionComponent,
    RequestComponent,
    DoubleSectionComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    TextMaskModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
