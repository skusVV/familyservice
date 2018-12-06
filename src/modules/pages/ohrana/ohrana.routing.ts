import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OhranaComponent} from './ohrana.component';

export const ohranaRoutes: Routes = [
  {
    path: '',
    component: OhranaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(ohranaRoutes)],
  exports: [RouterModule],
})
export class OhranaRoutingModule {
}
