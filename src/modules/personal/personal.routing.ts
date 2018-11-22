import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonalComponent} from './personal.component';

export const personalRoutes: Routes = [
  {
    path: '',
    component: PersonalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(personalRoutes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {
}
