import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import { SignupComponent } from './pages/signup/signup.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './pages/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { ProductComponent } from './pages/product/product.component';
import { CreateproductComponent } from './pages/product/createproduct/createproduct.component';
import { UpdateproductComponent } from './pages/product/updateproduct/updateproduct.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderdetailsComponent } from './pages/order/orderdetails/orderdetails.component';
import { ListordersComponent } from './pages/order/listorders/listorders.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { SlideboxComponent } from './component/slidebox/slidebox.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ProductComponent,
    CreateproductComponent,
    UpdateproductComponent,
    AdminComponent,
    CartComponent,
    OrderdetailsComponent,
    ListordersComponent,
    UserdashboardComponent,
    ProfileComponent,
    SidenavComponent,
    SlideboxComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSidenavModule,
    CommonModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
