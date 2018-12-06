import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VoditelComponent} from './voditel.component';

export const voditelRoutes: Routes = [
  {
    path: '',
    component: VoditelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(voditelRoutes)],
  exports: [RouterModule],
})
export class VoditelRoutingModule {
}
