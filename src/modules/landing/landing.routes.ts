import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './landing.component';

export const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(landingRoutes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
