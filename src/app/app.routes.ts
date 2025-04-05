import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';

export const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'contact-us', component: ContactUsComponent},
];
