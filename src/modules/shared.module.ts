import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VacanciesListComponent} from '../components/vacanciesList/vacanciesList.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {VacancyBlockComponent} from '../components/vacancyBlock/vacancyBlock.component';

@NgModule({
  declarations: [
    VacanciesListComponent,
    VacancyBlockComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    VacanciesListComponent,
    VacancyBlockComponent
  ]

})
export class SharedModule { }
