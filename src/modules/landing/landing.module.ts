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

@NgModule({
  declarations: [
    LandingComponent,
    SectionComponent,
    DoubleSectionComponent,
    ContactsComponent,
    PricesComponent,
    PriceComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class LandingModule { }
