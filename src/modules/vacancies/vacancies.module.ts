import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';
import { VacanciesRoutingModule } from './vacancies.routing';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared.module';

@NgModule({
  declarations: [
    VacanciesComponent,
  ],
  imports: [
    CommonModule,
    VacanciesRoutingModule,
    MatExpansionModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [VacanciesComponent]
})
export class VacanciesModule { }
