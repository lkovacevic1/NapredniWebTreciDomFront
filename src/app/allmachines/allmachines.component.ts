import { Component, OnInit } from '@angular/core';
import { Machines, SearchMachine } from 'src/model';
import { MatDialog } from '@angular/material/dialog';
import { MachineserviceService } from '../services/machine.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ScheduleMachineComponent } from '../schedule-machine/schedule-machine.component';

@Component({
  selector: 'app-allmachines',
  templateUrl: './allmachines.component.html',
  styleUrls: ['./allmachines.component.css']
})
export class AllmachinesComponent implements OnInit {

  name: string = '';
  status: string = '';
  dateFrom: string = '';
  dateTo: string = '';

  displayedColumns: string[] = ['Status', 'Created By', 'Active', 'Name', 'Created', 'Actions', 'Schedule'];
  dataSource: Machines[] = [];

  constructor(public formBuilder: FormBuilder,public machineService: MachineserviceService, public dialog: MatDialog, public userService: UserService) {
    
   }

  ngOnInit(): void {
    this.getMachines();
  }

  public getMachines(): void{
    this.machineService.getMachines().subscribe(response => {
      this.dataSource = response;
    },(error: HttpErrorResponse) => {
      alert("Nemate dozvolu!");
    });
  }

  public deleteMachine(machine: Machines): void{
    this.machineService.deleteMachine(machine.id).subscribe(response => {
      this.machineService.getMachines().subscribe(response => {
        this.dataSource = response;
      })
    },(error: HttpErrorResponse) => {
      alert("Nemate dozvolu!");
    });
  }

  public startMachine(machine: Machines): void{
    this.machineService.startMachine(machine.id).subscribe(response => {
    },(error: HttpErrorResponse) => {
      alert(error.error);
    });
  }

  public stopMachine(machine: Machines): void{
    this.machineService.stopMachine(machine.id).subscribe(response => {
    },(error: HttpErrorResponse) => {
      alert(error.error);
    });
  }

  public restartMachine(machine: Machines): void{
    this.machineService.restartMachine(machine.id).subscribe(response => {
    },(error: HttpErrorResponse) => {
      alert(error.error);
    });
  }

  public searchMachines(): void{
    const searchParams: SearchMachine = {
                          name: this.name,
                          status: this.status,
                          dateFrom: this.dateFrom==='' ? null : new Date(this.dateFrom),
                          dateTo: this.dateTo==='' ? null : new Date(this.dateTo) 
                        }
    if(this.name === '' && this.status === '' && this.dateFrom === '' && this.dateTo === ''){
      this.machineService.getMachines().subscribe(response => {
        this.dataSource = response;
      })
    }else{
      this.machineService.searchMachines(searchParams).subscribe(response => {
        this.dataSource = response;
      })
    }
  }

  public onOpenModal(machine: Machines){
    this.dialog.open(ScheduleMachineComponent, {
      width: '350px',
      data: machine,
    });
  }
}
