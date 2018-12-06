import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParaComponent} from './para.component';

export const paraRoutes: Routes = [
  {
    path: '',
    component: ParaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(paraRoutes)],
  exports: [RouterModule],
})
export class ParaRoutingModule {
}
