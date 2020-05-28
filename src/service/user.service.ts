import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from 'src/model/viewmodel/loginmodel';
import { UserManagement } from 'src/model/viewmodel/usermanagement';
import { UserIdentity } from 'src/model/viewmodel/userauthentication';

interface StatusLogging{
  success:boolean;
  message:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private loggedStatus = false;
  constructor(private http:HttpClient) { }
  login(user:LoginModel)
  {
    return this.http.post("https://localhost:44385/api/user/login",user);
  }
  setLoggedIn(boolean)
  {
    this.loggedStatus=boolean;
  }
  get isLoggedIn()
  {   
    return this.loggedStatus;
  }
  getConfirmEmail(email:string)
  {
   var  user = JSON.parse(localStorage.getItem("USER")) as UserIdentity;
   var token = user.token;
   var headers:HttpHeaders  = new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
  .set('Authorization','Bearer '+ token);
    return this.http.get("https://localhost:44385/api/user/confirmemail?email="+email);    
  }
  getUser(email:string)
  {
     var user = JSON.parse(localStorage.getItem("USER")) as UserIdentity;
     var token = user.token;
     var headers:HttpHeaders  = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=UTF-8')
    .set('Authorization','Bearer '+token);
    return this.http.get<UserIdentity>("https://localhost:44385/api/admin/user/getuser?email="+email,{headers:headers});
  }

 
}
