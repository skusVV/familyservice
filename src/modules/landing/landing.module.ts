import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SectionComponent } from '../../components/section/section.component';
import { RequestComponent } from '../../components/request/request.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TextMaskModule } from 'angular2-text-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoubleSectionComponent } from '../../components/doubleSection/doubleSection.component';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {SmoothScrollToDirective} from '../../directives/scroll.directive';
import {ContactsComponent} from '../../components/contacts/contacts.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {LandingRoutingModule} from './landing.routes';
import {PricesComponent} from '../../components/prices/prices.component';
import {PriceComponent} from '../../components/price/price.component';

@NgModule({
  declarations: [
    LandingComponent,
    SectionComponent,
    RequestComponent,
    DoubleSectionComponent,
    HeaderComponent,
    FooterComponent,
    SmoothScrollToDirective,
    ContactsComponent,
    PricesComponent,
    PriceComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatInputModule,
    MatSelectModule,
    TextMaskModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [
  ]
})
export class LandingModule { }
