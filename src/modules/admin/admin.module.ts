import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {TextMaskModule} from 'angular2-text-mask';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {AdminRoutingModule} from './admin.routing';
import {MatTabsModule} from '@angular/material/tabs';
import {RemoveFormComponent} from '../../components/removeForm/removeForm.component';
import {AddVacantionComponent} from '../../components/addVacantion/addVacantion.component';
import { AdminResolver } from './admin.resolver';
import {MatExpansionModule} from '@angular/material/expansion';
import {VacanciesComponent} from '../../components/vacancies/vacancies.component';

@NgModule({
  declarations: [
    AdminComponent,
    RemoveFormComponent,
    AddVacantionComponent,
    VacanciesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatSelectModule,
    TextMaskModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTabsModule,
    MatRadioModule,
    MatExpansionModule
  ],
  providers: [
    AdminResolver
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
