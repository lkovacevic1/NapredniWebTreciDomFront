import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MachineName } from 'src/model';
import { MachineserviceService } from '../services/machine.service';

@Component({
  selector: 'app-createmachine',
  templateUrl: './createmachine.component.html',
  styleUrls: ['./createmachine.component.css']
})
export class CreatemachineComponent implements OnInit {

  createmachineform: FormGroup

  constructor(private formBuilder: FormBuilder, private machineService: MachineserviceService, private router: Router) { 
    this.createmachineform = formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  public createMachine(): void{
    this.machineService.addMachine(this.createmachineform.get('name')?.value).subscribe(response => {
      this.router.navigate(["allmachines"]);
    });
  }
}
