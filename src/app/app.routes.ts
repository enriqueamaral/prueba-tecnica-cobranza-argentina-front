import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [authGuard]
  },

  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];