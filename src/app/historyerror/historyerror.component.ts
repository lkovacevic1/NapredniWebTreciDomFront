import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ErrorMessage } from 'src/model';
import { MachineserviceService } from '../services/machine.service';

@Component({
  selector: 'app-historyerror',
  templateUrl: './historyerror.component.html',
  styleUrls: ['./historyerror.component.css']
})
export class HistoryerrorComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Action', 'Date', 'Error Message', 'Machine'];
  dataSource: ErrorMessage[] = [];

  constructor(public machineService: MachineserviceService) { }

  ngOnInit(): void {
    this.machineService.getAllErrorMessages().subscribe(response => {
      this.dataSource = response;
    },(error: HttpErrorResponse) => {
      alert("Nemate dozvolu!");
    });
  }

}
