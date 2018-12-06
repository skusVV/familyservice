import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HarderobchikComponent} from './harderobchik.component';

export const harderobchikRoutes: Routes = [
  {
    path: '',
    component: HarderobchikComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(harderobchikRoutes)],
  exports: [RouterModule],
})
export class HarderobchikRoutingModule {
}
