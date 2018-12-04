import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';
import { VacanciesRoutingModule } from './vacancies.routing';
import {VacanciesListComponent} from '../../components/vacanciesList/vacanciesList.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
// import {HeaderComponent} from '../../components/header/header.component';
// import {MatIconModule} from '@angular/material/icon';
// import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    VacanciesComponent,
    VacanciesListComponent,
    // HeaderComponent
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
