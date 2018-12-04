import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';
import { VacanciesRoutingModule } from './vacancies.routing';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    VacanciesComponent,
  ],
  imports: [
    CommonModule,
    VacanciesRoutingModule,
    MatExpansionModule,
    HttpClientModule,
    SharedModule,
    InfiniteScrollModule
  ],
  providers: [
  ],
  bootstrap: [VacanciesComponent]
})
export class VacanciesModule { }
