import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorInterceptorService } from './error-interceptor.service';
import { PredmetComponent } from './predmet/predmet.component';
import { LoginProfComponent } from './login-prof/login-prof.component';
import { RegistrationProfComponent } from './registration-prof/registration-prof.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PredmetComponent,
    LoginProfComponent,
    RegistrationProfComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: ErrorInterceptorService,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
