import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserpageComponent } from './userpage/userpage.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app/app.component';
import {MatIconModule} from '@angular/material/icon';
import { AllusersComponent } from './allusers/allusers.component';
import { CreateuserComponent } from './createuser/createuser.component';
import {MatTableModule} from '@angular/material/table';
import { UpdatedialogComponent } from './updatedialog/updatedialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './home/home.component';
import { AllmachinesComponent } from './allmachines/allmachines.component';
import { CreatemachineComponent } from './createmachine/createmachine.component';
import { ScheduleMachineComponent } from './schedule-machine/schedule-machine.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { HistoryerrorComponent } from './historyerror/historyerror.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    LoginComponent,
    AllusersComponent,
    CreateuserComponent,
    UpdatedialogComponent,
    HomeComponent,
    AllmachinesComponent,
    CreatemachineComponent,
    ScheduleMachineComponent,
    HistoryerrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
