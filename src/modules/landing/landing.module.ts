import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SectionComponent } from '../../components/section/section.component';
import { DoubleSectionComponent } from '../../components/doubleSection/doubleSection.component';
import {ContactsComponent} from '../../components/contacts/contacts.component';
import {LandingRoutingModule} from './landing.routes';
import {PricesComponent} from '../../components/prices/prices.component';
import {PriceComponent} from '../../components/price/price.component';
import {SharedModule} from '../shared.module';
import {PersonListComponent} from '../../components/personList/personList.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    LandingComponent,
    SectionComponent,
    DoubleSectionComponent,
    ContactsComponent,
    PricesComponent,
    PriceComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    MatCardModule
  ],
  providers: [
  ]
})
export class LandingModule { }
