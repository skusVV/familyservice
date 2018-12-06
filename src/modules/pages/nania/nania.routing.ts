import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NaniaComponent} from './nania.component';

export const naniaRoutes: Routes = [
  {
    path: '',
    component: NaniaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(naniaRoutes)],
  exports: [RouterModule],
})
export class NaniaRoutingModule {
}
