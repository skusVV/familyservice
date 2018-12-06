import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SadovnikComponent} from './sadovnik.component';

export const sadovnikRoutes: Routes = [
  {
    path: '',
    component: SadovnikComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(sadovnikRoutes)],
  exports: [RouterModule],
})
export class SadovnikRoutingModule {
}
