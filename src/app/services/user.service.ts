import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable, retry } from 'rxjs';
import { User, UserInfo, UserLoginInfo, UserResponse, AllUsersResponse, UpdateUser, InsertUser, Role } from 'src/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiServerUrl;
  private headers;
  private roles: Role[];

  constructor(private http: HttpClient) { 
    this.headers= new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${localStorage.getItem("token")}`)

      this.roles = [];
  }

  public loginUser(loginInfo: UserLoginInfo): Observable<UserResponse>{
    return this.http.post<UserResponse>(`${this.apiServerUrl}/login`, loginInfo);
  }

  public getUsers(): Observable<UserInfo[]>{
    return this.http.get<AllUsersResponse>(`${this.apiServerUrl}/all`, { 'headers': this.headers }).pipe(map(response => {
      return response.content;
    }));
  }

  public addUser(user: InsertUser): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/create`, user, { 'headers': this.headers });
  }

  public updateUser(user: UpdateUser): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/update`, user, { 'headers': this.headers });
  }

  public deleteUser(userId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${userId}`, { 'headers': this.headers });
  }

  public getAllRoles(): void{
    console.log(this.headers)
    this.http.get<Role[]>(`${this.apiServerUrl}/roles`, { 'headers': this.headers }).subscribe(response => {
      this.roles = response
      localStorage.setItem('roles', JSON.stringify(this.roles));
      console.log(this.roles)
      if(this.roles.length===0){
        alert("Nemate ni jednu dozvolu!")
      }
    });
  }

  public setHeaders(){
    this.headers = this.headers.set('Authorization', `Bearer ${localStorage.getItem("token")}`);
  }

  public logout(){
    this.headers.delete('Authorization');
  }

  public getRoles(): string[]{
    this.roles = JSON.parse(localStorage.getItem('roles') ?? '[]');
    return this.roles.map(x=>x.name);
  }

  public getCanCreateUser(): boolean{
    return this.getRoles().includes("can_create_users")
  }

  public getCanUpdateUser(): boolean{
    return this.getRoles().includes("can_update_users")
  }

  public getCanDeleteUser(): boolean{
    return this.getRoles().includes("can_delete_users")
  }

  public getCanReadUser(): boolean{
    return this.getRoles().includes("can_read_users")
  }
}