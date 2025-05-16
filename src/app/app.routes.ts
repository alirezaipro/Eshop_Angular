import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {UserPanelDashboardComponent} from './pages/userpanel/user-panel-dashboard/user-panel-dashboard.component';
import {authGuard} from './guards/auth.guard';
import {UserPanelHomeComponent} from './pages/userpanel/user-panel-home/user-panel-home.component';
import {
  UserPanelChangePasswordComponent
} from './pages/userpanel/user-panel-change-password/user-panel-change-password.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {BlogListComponent} from './pages/blogs/blog-list/blog-list.component';

export const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'blogs', component: BlogListComponent},
  {
    path: 'userpanel', component: UserPanelHomeComponent, canActivate: [authGuard], children: [

      {path: 'dashboard', component: UserPanelDashboardComponent, canActivate: [authGuard]},
      {path: 'change-password', component: UserPanelChangePasswordComponent, canActivate: [authGuard]},

    ]
  },

];
