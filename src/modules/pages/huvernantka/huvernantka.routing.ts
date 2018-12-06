import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HuvernantkaComponent} from './huvernantka.component';

export const huvernantkaRoutes: Routes = [
  {
    path: '',
    component: HuvernantkaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(huvernantkaRoutes)],
  exports: [RouterModule],
})
export class HuvernantkaRoutingModule {
}
