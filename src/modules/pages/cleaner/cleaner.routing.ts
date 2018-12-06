import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CleanerComponent} from './cleaner.component';

export const cleanerRoutes: Routes = [
  {
    path: '',
    component: CleanerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(cleanerRoutes)],
  exports: [RouterModule],
})
export class CleanerRoutingModule {
}
