import { Component, OnInit } from '@angular/core';
import { User, UserInfo } from '../../../src/model'
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'lastName', 'mail', 'role', 'actions'];
  dataSource: UserInfo[] = [];

  constructor(public userService: UserService, public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(resopnse => {
      this.dataSource = resopnse;
    },(error: HttpErrorResponse) => {
      alert("Nemate dozvolu!");
    });
  }

  public onOpenModal(user: User, mode: String): void{
    if(mode === "edit"){
      const dialogRef = this.dialog.open(UpdatedialogComponent, {
        width: '250px',
        data: user,
      });
      
      dialogRef.afterClosed().subscribe(result => {
        this.userService.getUsers().subscribe(resopnse => {
          this.userService.getAllRoles();
          this.dataSource = resopnse;
        })
      });

    }else if(mode === "delete"){
      this.userService.deleteUser(user.id).subscribe(response => {
        this.userService.getUsers().subscribe(resopnse => {
          this.dataSource = resopnse;
        })
      },(error: HttpErrorResponse) => {
        alert("Nemate dozvolu!");
      });
    }
    
  }

  rolesNames(userInfo: UserInfo): string{
    if(userInfo.roles.length !== 0){
      const names: string[] = userInfo.roles.map(x=>x.name)
      const userRoleNames: string = names.reduce((sum, x)=>sum+', '+x);
      return userRoleNames;
    }
    return '';
  }
}
