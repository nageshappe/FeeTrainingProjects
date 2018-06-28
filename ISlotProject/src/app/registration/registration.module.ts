import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { route } from './registration.routes';
import { RegisterComponent } from './pages/register/register.component';
import { InterviewerSignupComponent } from './pages/interviewer-signup/interviewer-signup.component';
import { AdminSignupComponent } from './pages/admin-signup/admin-signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [LandingPageComponent, LoginComponent, RegisterComponent, InterviewerSignupComponent, AdminSignupComponent]
})
export class RegistrationModule { }
