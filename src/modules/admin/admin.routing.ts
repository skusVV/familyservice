import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import { AdminResolver } from './admin.resolver';

export const addRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    resolve: { data: AdminResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(addRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
