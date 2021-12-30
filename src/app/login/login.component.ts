import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginInfo } from 'src/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'login user';

  loginForm: FormGroup;
  userLoginIngo: UserLoginInfo;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router){
    this.loginForm = this.formBuilder.group({
      mail:['', Validators.required],
      password:['', Validators.required]
    })
    this.userLoginIngo = { 
      mail: '',
      password: ''
    }
  }

  ngOnInit(): void {
      
  }

  loginUser(){
    this.userLoginIngo = {
      mail: this.loginForm.get('mail')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.userService.loginUser(this.userLoginIngo).subscribe(login => {
      localStorage.setItem("token", login.jwt);
      this.userService.setHeaders();
      this.userService.getAllRoles();
      this.router.navigate([""]);
    })
  }

}
