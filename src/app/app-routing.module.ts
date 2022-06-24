import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {ProductComponent} from './pages/product/product.component';
import { UpdateproductComponent } from './pages/product/updateproduct/updateproduct.component';
import { CreateproductComponent } from './pages/product/createproduct/createproduct.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    pathMatch:'full' 
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch:'full' 
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch:'full' 
  },
  {
    path: 'product/update',
    component: UpdateproductComponent,
    pathMatch:'full' 
  },
  {
    path: 'product/createproduct',
    component: CreateproductComponent,
    pathMatch:'full' 
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch:'full' 
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch:'full' 
  },
  {
    path: 'user/userdashboard',
    component: UserdashboardComponent,
    pathMatch:'full' 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
