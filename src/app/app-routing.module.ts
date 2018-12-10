import { NgModule } from '@angular/core';
import { Routes, RouterModule,
  // PreloadAllModules
} from '@angular/router';

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
    path: 'nania/',
    redirectTo: 'nania',
  },
  {
    path: 'nania',
    loadChildren: '../modules/pages/nania/nania.module#NaniaModule',
  },
  {
    path: 'cleaner/',
    redirectTo: 'cleaner',
  },
  {
    path: 'cleaner',
    loadChildren: '../modules/pages/cleaner/cleaner.module#CleanerModule',
  },
  {
    path: 'ohrana/',
    redirectTo: 'ohrana',
  },
  {
    path: 'ohrana',
    loadChildren: '../modules/pages/ohrana/ohrana.module#OhranaModule',
  },
  {
    path: 'sidelka/',
    redirectTo: 'sidelka',
  },
  {
    path: 'sidelka',
    loadChildren: '../modules/pages/sidelka/sidelka.module#SidelkaModule',
  },
  {
    path: 'povar/',
    redirectTo: 'povar',
  },
  {
    path: 'povar',
    loadChildren: '../modules/pages/povar/povar.module#PovarModule',
  },
  {
    path: 'voditel/',
    redirectTo: 'voditel',
  },
  {
    path: 'voditel',
    loadChildren: '../modules/pages/voditel/voditel.module#VoditelModule',
  },
  {
    path: 'sadovnik/',
    redirectTo: 'sadovnik',
  },
  {
    path: 'sadovnik',
    loadChildren: '../modules/pages/sadovnik/sadovnik.module#SadovnikModule',
  },
  {
    path: 'hardirobchik/',
    redirectTo: 'hardirobchik',
  },
  {
    path: 'hardirobchik',
    loadChildren: '../modules/pages/harderobchik/harderobchik.module#HarderobchikModule',
  },
  {
    path: 'para/',
    redirectTo: 'para',
  },
  {
    path: 'para',
    loadChildren: '../modules/pages/para/para.module#ParaModule',
  },
  {
    path: '**',
    redirectTo: '',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

