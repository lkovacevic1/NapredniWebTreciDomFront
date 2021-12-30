import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { AuthgardGuard } from './authgard.guard';
import { AuthguardallusersGuard } from './authguardallusers.guard';
import { CreateuserComponent } from './createuser/createuser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "userpage",
    component: UserpageComponent,
  },
  {
    path: "allusers",
    component: AllusersComponent,
    canActivate: [AuthguardallusersGuard]
  },
  {
    path: "createuser",
    component: CreateuserComponent,
    canActivate: [AuthgardGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
