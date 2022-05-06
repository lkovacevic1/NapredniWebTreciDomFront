import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsertUser, Role } from 'src/model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  allRoles: Role[] = [];
  createform: FormGroup;
  roles: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.roles = formBuilder.group({
      can_read_users_box: [''],
      can_create_users_box: [''],
      can_update_users_box: [''],
      can_delete_users_box: [''],
      can_search_machines: [''],
      can_read_machines: [''],
      can_start_machines: [''],
      can_stop_machines: [''],
      can_restart_machines: [''],
      can_create_machines: [''],
      can_destroy_machines:[''],
    });
    this.createform = formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  createUser(): void{
    if(this.roles.get('can_read_users_box')?.value){
      this.allRoles.push({ id: 1, name: "can_read_users"})
    }
    if(this.roles.get('can_create_users_box')?.value){
      this.allRoles.push({id: 2, name: "can_create_users"})
    }
    if(this.roles.get('can_update_users_box')?.value){
      this.allRoles.push({id: 3, name: "can_update_users"})
    }
    if(this.roles.get('can_delete_users_box')?.value){
      this.allRoles.push({id: 4, name: "can_delete_users"})
    }
    if(this.roles.get('can_search_machines')?.value){
      this.allRoles.push({id: 5, name: "can_search_machines"})
    }
    if(this.roles.get('can_read_machines')?.value){
      this.allRoles.push({id: 6, name: "can_read_machines"})
    }
    if(this.roles.get('can_start_machines')?.value){
      this.allRoles.push({id: 7, name: "can_start_machines"})
    }
    if(this.roles.get('can_stop_machines')?.value){
      this.allRoles.push({id: 8, name: "can_stop_machines"})
    }
    if(this.roles.get('can_restart_machines')?.value){
      this.allRoles.push({id: 9, name: "can_restart_machines"})
    }
    if(this.roles.get('can_create_machines')?.value){
      this.allRoles.push({id: 10, name: "can_create_machines"})
    }
    if(this.roles.get('can_destroy_machines')?.value){
      this.allRoles.push({id: 11, name: "can_destroy_machines"})
    }

    const insertUser: InsertUser = {
                                    name: this.createform.get('name')?.value, 
                                    lastName: this.createform.get('lastName')?.value, 
                                    mail: this.createform.get('mail')?.value,
                                    password: this.createform.get('password')?.value,
                                    roles: this.allRoles
                                  }
    this.userService.addUser(insertUser).subscribe(response => {
      this.router.navigate(["allusers"]);
    });
  }
}
