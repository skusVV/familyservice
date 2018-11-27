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

