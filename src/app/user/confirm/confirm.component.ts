import { Component, OnInit } from '@angular/core';
import { UserIdentity } from 'src/model/viewmodel/userauthentication';
import { UserService } from 'src/service/user.service';
import { UserManagement } from 'src/model/viewmodel/usermanagement';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  confirmUser:UserIdentity;
  confirmPlease:string;
  confirmed:string;
  getUser:UserIdentity;
  constructor(private userService:UserService) { 
    this.confirmUser={
      email:'',
      emailConfirmed:false,
      lockEnabled:false,
      role:'',
      token:'',
    };
    this.confirmPlease="Please confirm your account by using your mail.Click here if you want to resend confirm mail";
    this.confirmed="You have confirmed your mail.Now you can use this account";
    this.confirmUser = JSON.parse(localStorage.getItem("USER"));
    console.log(this.confirmUser);
    this.userService.getUser(this.confirmUser.email).subscribe(res=>{
      this.confirmUser = res as UserIdentity;
      console.log(this.confirmUser);
    });
  }

  ngOnInit() {
    if(this.confirmUser.emailConfirmed==false)
    {
      this.confirmEmail();  
    }else
    {
      this.userService.setLoggedIn(true);
      window.location.href="/home"; 
    } 
  }
  confirmEmail()
  {
    this.userService.getConfirmEmail(this.confirmUser.email).toPromise().then(res=>{
      console.log(res);
    });
  }

}
