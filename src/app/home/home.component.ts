import { Component, OnInit } from '@angular/core';
import { UserMailToken } from 'src/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userMail: UserMailToken;

  constructor() { 
    this.userMail = JSON.parse(atob((localStorage.getItem('token') ?? '').split('.')[1]))
  }

  ngOnInit(): void {
  }

}
