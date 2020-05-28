import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  getUser:any;
  constructor(private auth:UserService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.auth.isLoggedIn);
    this.getUser = JSON.parse(localStorage.getItem("USER"));
    if(this.getUser === undefined)
    {
      return false;
    }
    else
    {
      return true;
    }

   // return this.auth.isLoggedIn;
  }
  
}
