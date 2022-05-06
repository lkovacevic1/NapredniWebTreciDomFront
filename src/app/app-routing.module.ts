import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllmachinesGuard } from './allmachines.guard';
import { AllmachinesComponent } from './allmachines/allmachines.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AuthgardGuard } from './authgard.guard';
import { AuthguardallusersGuard } from './authguardallusers.guard';
import { AuthguardcreatemachineGuard } from './authguardcreatemachine.guard';
import { AuthguardhistoryerrorGuard } from './authguardhistoryerror.guard';
import { CreatemachineComponent } from './createmachine/createmachine.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { HistoryerrorComponent } from './historyerror/historyerror.component';
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
  },
  {
    path: "allmachines",
    component: AllmachinesComponent,
    canActivate: [AllmachinesGuard]
  },
  {
    path: "createmachine",
    component: CreatemachineComponent,
    canActivate: [AuthguardcreatemachineGuard]
  },
  {
    path: "histroyError",
    component: HistoryerrorComponent,
    canActivate: [AuthguardhistoryerrorGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
