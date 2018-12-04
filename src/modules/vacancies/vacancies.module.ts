import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';
import { VacanciesRoutingModule } from './vacancies.routing';
import {VacanciesListComponent} from '../../components/vacanciesList/vacanciesList.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import {VacancyBlockComponent} from '../../components/vacancyBlock/vacancyBlock.component';

@NgModule({
  declarations: [
    VacanciesComponent,
    VacanciesListComponent,
    VacancyBlockComponent,
  ],
  imports: [
    CommonModule,
    VacanciesRoutingModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [VacanciesComponent]
})
export class VacanciesModule { }
