import { NgModule } from '@angular/core';
import { Routes, RouterModule,
  // PreloadAllModules
} from '@angular/router';
import {VacanciesModule} from '../modules/vacancies/vacancies.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../modules/landing/landing.module#LandingModule',
  },
  {
    path: 'personal/',
    redirectTo: 'pesronal',
  },
  {
    path: 'personal',
    loadChildren: '../modules/personal/personal.module#PersonalModule',
  },
  {
    path: 'admin/',
    redirectTo: 'admin',
  },
  {
    path: 'admin',
    loadChildren: '../modules/admin/admin.module#AdminModule',
  },
  {
    path: 'vacancies/',
    redirectTo: 'vacancies',
  },
  {
    path: 'vacancies',
    loadChildren: '../modules/vacancies/vacancies.module#VacanciesModule',
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

