import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PovarComponent} from './povar.component';

export const povarRoutes: Routes = [
  {
    path: '',
    component: PovarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(povarRoutes)],
  exports: [RouterModule],
})
export class PovarRoutingModule {
}
