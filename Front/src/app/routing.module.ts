import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginProfComponent } from './login-prof/login-prof.component';
import { RegistrationProfComponent } from './registration-prof/registration-prof.component';
import { PredmetComponent } from './predmet/predmet.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  {path : '' , redirectTo: '/', pathMatch: 'full'},
  {path : 'login', component: LoginComponent},
  {path : 'registration', component: RegistrationComponent},
  {path : 'predmeti', component: PredmetComponent},
  {path : 'loginProf', component: LoginProfComponent},
  {path : 'registrationProf', component: RegistrationProfComponent},
  {path : 'userProfile', component: UserProfileComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute),
  ],
  declarations: []
})
export class RoutingModule { }
