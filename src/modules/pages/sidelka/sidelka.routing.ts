import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SidelkaComponent} from './sidelka.component';

export const sidelkaRoutes: Routes = [
  {
    path: '',
    component: SidelkaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(sidelkaRoutes)],
  exports: [RouterModule],
})
export class SidelkaRoutingModule {
}
