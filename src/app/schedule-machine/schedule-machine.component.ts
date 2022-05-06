import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Machines, ScheduleMachine } from 'src/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MachineserviceService } from '../services/machine.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-schedule-machine',
  templateUrl: './schedule-machine.component.html',
  styleUrls: ['./schedule-machine.component.css']
})
export class ScheduleMachineComponent implements OnInit {

  scheduleForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ScheduleMachineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Machines, formBuilder: FormBuilder, public machineService: MachineserviceService) { 
      this.scheduleForm = formBuilder.group({
        date: ['', Validators.required],
        time: ['', Validators.required],
        action: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void{
    const scheduleMachine: ScheduleMachine = {
        id: this.data.id,
        date: this.scheduleForm.get('date')?.value,
        time: this.scheduleForm.get('time')?.value,
        action: this.scheduleForm.get('action')?.value
    }
    let date1: Date = new Date(scheduleMachine.date)
    scheduleMachine.date = formatDate(date1, "dd/MM/yyyy", "en-GB")

    this.machineService.scheduleMachine(scheduleMachine).subscribe();
    this.dialogRef.close();
  }
}
