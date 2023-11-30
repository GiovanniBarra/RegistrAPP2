import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ControlDeSesionGuard } from './guards/control-de-sesion.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[ControlDeSesionGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recuperarpassword',
    loadChildren: () => import('./pages/recuperarpassword/recuperarpassword.module').then( m => m.RecuperarpasswordPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'miperfil',
    loadChildren: () => import('./pages/miperfil/miperfil.module').then( m => m.MiperfilPageModule),
    canActivate:[ControlDeSesionGuard]
  },
  {
    path: 'lista-asistencia',
    loadChildren: () => import('./pages/lista-asistencia/lista-asistencia.module').then( m => m.ListaAsistenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
