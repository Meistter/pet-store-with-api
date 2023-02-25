import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //Esta es una forma de hacerlo, que cuando la ruta este vacia cargue home, o que el home sea la ruta vacia, o que redireccione a home al estar vacia
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'categoria/:id',
    component: CategoryComponent
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  },
  {
    path: 'mycart',
    component: MycartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recover',
    component: RecoveryComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
