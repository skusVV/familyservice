import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VacanciesListComponent} from '../components/vacanciesList/vacanciesList.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {VacancyBlockComponent} from '../components/vacancyBlock/vacancyBlock.component';
import {FooterComponent} from '../components/footer/footer.component';
import {RequestComponent} from '../components/request/request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {SmoothScrollToDirective} from '../directives/scroll.directive';
import {PersonComponent} from '../components/person/person.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    VacanciesListComponent,
    VacancyBlockComponent,
    FooterComponent,
    RequestComponent,
    SmoothScrollToDirective,
    PersonComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    TextMaskModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [
    VacanciesListComponent,
    VacancyBlockComponent,
    FooterComponent,
    RequestComponent,
    PersonComponent
  ]

})
export class SharedModule { }
