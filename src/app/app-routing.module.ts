import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


const routes: Routes = [

  { path: 'LoginPage', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'Dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'Dashboard/:username', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '',   redirectTo: '/LoginPage', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
