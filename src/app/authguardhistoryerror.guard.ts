import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardhistoryerrorGuard implements CanActivate {

  constructor(private userService: UserService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(!this.userService.getCanStartMachine() || !this.userService.getCanStopMachine() || !this.userService.getCanRestartMachine()){
        alert("Nemate dozvolu ovoj funkionalnosti");
        return false;
      }
      return true;
  }
  
}
