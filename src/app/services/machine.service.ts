import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { ErrorMessage, MachineName, Machines, ScheduleMachine, SearchMachine } from 'src/model';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MachineserviceService {

  private apiMachineUrl = environment.apiMachineUrl;
  private headers;

  constructor(private http: HttpClient) { 
    this.headers= new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${localStorage.getItem("token")}`)
  }

  public getMachines(): Observable<Machines[]>{
    return this.http.get<Machines[]>(`${this.apiMachineUrl}/all`, { 'headers': this.headers}).pipe(map(response => {
      return response;
    }));
  }

  public deleteMachine(machineId: number): Observable<void>{
    return this.http.put<void>(`${this.apiMachineUrl}/destroy/${machineId}`, {}, { 'headers': this.headers });
  }

  public addMachine(machine: MachineName): Observable<Machines>{
    return this.http.post<Machines>(`${this.apiMachineUrl}/create`, machine, { 'headers': this.headers });
  }

  public searchMachines(searchParametar: SearchMachine): Observable<Machines[]>{
    let array_params: string[] = [searchParametar.name, searchParametar.status, typeof searchParametar.dateFrom === null ? '' : formatDate(searchParametar.dateFrom as Date, 'dd-MM-yyyy', 'en-GB') , typeof searchParametar.dateTo === null ? '' : formatDate(searchParametar.dateTo as Date, 'dd-MM-yyyy', 'en-GB')];
    let path: string = '?'
    console.log("Parametri:")
    console.log(array_params[0])
    console.log(array_params[1])
    console.log(array_params[2])
    console.log(array_params[3])
    if(array_params[0] !== '')
      path += 'name=' + array_params[0] + '&'
    if(array_params[1] !== '')
      path += 'status=' + array_params[1].toUpperCase() + '&'
    if(array_params[2] !== '')
      path += 'dateFrom=' + array_params[2] + '&'
    if(array_params[3] !== '')
      path += 'dateTo=' + array_params[3] + '&'

    console.log(path.concat('name=', array_params[0], '&'))
    console.log(`${this.apiMachineUrl}/search${path}`)
    console.log(path)
    return this.http.get<Machines[]>(`${this.apiMachineUrl}/search${path}`, { 'headers': this.headers}).pipe(map(response => {
      return response;
    }));
  }

  public startMachine(machineId: number): Observable<void>{
    return this.http.put<void>(`${this.apiMachineUrl}/start/${machineId}`, {}, { 'headers': this.headers })
  }

  public stopMachine(machineId: number): Observable<void>{
    return this.http.put<void>(`${this.apiMachineUrl}/stop/${machineId}`, {}, { 'headers': this.headers })
  }

  public restartMachine(machineId: number): Observable<void>{
    return this.http.put<void>(`${this.apiMachineUrl}/restart/${machineId}`, {}, { 'headers': this.headers })
  }

  public scheduleMachine(scheduleMachine: ScheduleMachine): Observable<void>{
    return this.http.put<void>(`${this.apiMachineUrl}/schedule/${scheduleMachine.id}`, scheduleMachine , { 'headers': this.headers })
  }

  public getAllErrorMessages(): Observable<ErrorMessage[]>{
    return this.http.get<ErrorMessage[]>(`${this.apiMachineUrl}/errorHistory`, { 'headers': this.headers });
  }
}
