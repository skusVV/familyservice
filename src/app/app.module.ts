import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from '../components/landing/landing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SmoothScrollToDirective } from '../directives/scroll.directive';

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
    LandingModule
  ],
  providers: [],
})
export class AppModule { }
