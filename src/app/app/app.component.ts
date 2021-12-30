import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router, public userService: UserService){}

  ngOnInit(): void {
    if(!this.hasToken())
      this.router.navigate(["login"]);
  }

  hasToken(): Boolean{
    if(localStorage.getItem("token") === null){
      return false;
    }
    return true;
  }

  deleteToken(): void{
    localStorage.clear();
    this.userService.logout();
  }
}
