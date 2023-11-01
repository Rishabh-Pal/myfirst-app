import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { TourListComponent } from './tour-list/tour-list.component';

const routes: Routes = [
  { path:'home', component:TourListComponent},
  { path: 'signup', component: SignupComponent },
  {path: 'login', component: LoginComponent},
  {path:'create-tour', component: CreateTourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
