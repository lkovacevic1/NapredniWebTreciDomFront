import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role, UpdateUser, UserInfo } from 'src/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.css']
})
export class UpdatedialogComponent implements OnInit {

  allRoles: Role[] = [];
  roles: FormGroup;
  updateuserform: FormGroup;

  constructor(public dialogRef: MatDialogRef<UpdatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserInfo, private userService: UserService, formBuilder: FormBuilder
  ) { 
    const names: string[] = data.roles.map(x=>x.name)
    this.roles = formBuilder.group({
      can_read_users_box: names.includes("can_read_users"),
      can_create_users_box: names.includes("can_create_users"), 
      can_update_users_box: names.includes("can_update_users"), 
      can_delete_users_box: names.includes("can_delete_users"),
      can_search_machines: names.includes("can_search_machines"),
      can_read_machines: names.includes("can_read_machines"),
      can_start_machines: names.includes("can_start_machines"),
      can_stop_machines: names.includes("can_stop_machines"),
      can_restart_machines: names.includes("can_restart_machines"),
      can_create_machines: names.includes("can_create_machines"),
      can_destroy_machines: names.includes("can_destroy_machines"),
    });
    this.updateuserform = formBuilder.group({
      name: [data.name, Validators.required],
      lastName: [data.lastName, Validators.required],
      mail: [data.mail, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void{
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
    
    const updateUser: UpdateUser = {
                                    id: this.data.id,
                                    name: this.updateuserform.get('name')?.value, 
                                    lastName: this.updateuserform.get('lastName')?.value, 
                                    mail: this.updateuserform.get('mail')?.value,
                                    roles: this.allRoles
                                  }
    this.userService.updateUser(updateUser).subscribe();
    this.dialogRef.close();
  }
}
