import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { LoginModel } from 'src/model/viewmodel/loginmodel';
import { UserIdentity } from 'src/model/viewmodel/userauthentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:LoginModel;
  identity:UserIdentity;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.loginForm={
      password:'',
      username:''
    };
    this.identity = {
      email:'',
      token:'',
      role:'',
      emailConfirmed:false,
      lockEnabled:false
    }
  }
  login()
  {
    this.userService.login(this.loginForm).toPromise().then(res =>{
        this.identity = res as UserIdentity;
        console.log(this.identity);
        localStorage.setItem("USER",JSON.stringify(this.identity));
        this.router.navigateByUrl("/confirmemail");       
    });   
  }
}
