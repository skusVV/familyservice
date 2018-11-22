import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddComponent} from './add.component';

export const addRoutes: Routes = [
  {
    path: '',
    component: AddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(addRoutes)],
  exports: [RouterModule],
})
export class AddRoutingModule {
}
