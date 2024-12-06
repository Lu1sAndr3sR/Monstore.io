import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { WishComponent } from './wish/wish.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, // Ruta de la página principal
  { path: 'log-in', component: LoginComponent }, // Ruta del login
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'wish', component: WishComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent},
  { path: 'buy', component: BuyComponent }
];