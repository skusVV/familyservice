import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';

export const addRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(addRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
