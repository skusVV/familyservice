import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from '../components/landing/landing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SmoothScrollToDirective } from '../directives/scroll.directive';
import { AgmCoreModule } from '@agm/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SmoothScrollToDirective
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    LandingModule,
    MatMenuModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGNDW1o9odxdBB5MmX2qTHqdL7vy8MWKc'
    })
  ],
  providers: [],
})
export class AppModule { }
