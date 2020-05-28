import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { AdminService } from 'src/service/admin.service';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formUser:User;
  confirmPassword:string;
  errorConfirm:string;
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit() {
    this.formUser = {
      city:'',
      email:'',
      id:'',
      passwordHash:'',
      phoneNumber:'',
      postalCode:'',
      role:0,
      state:'',
      streetAddress:'',
      name:''      
    }
  }
  register()
  {
    console.log(this.formUser);
    console.log(this.confirmPassword);
    if(this.formUser.passwordHash !== this.confirmPassword)
    {
      this.errorConfirm = "Confirm Password must be matched Password";
    }else{
      this.errorConfirm="";
      this.adminService.register(this.formUser).toPromise().then(res=>{
      });
      window.location.href="/user";

    }
    
  }

}
