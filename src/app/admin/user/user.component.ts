import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/service/admin.service';
import { UserManagement } from 'src/model/viewmodel/usermanagement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList : UserManagement[];
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit() {
    this.adminService.getAllUser().toPromise().then(res=>{
      console.log(res);
      this.userList=res as UserManagement[];
    })
  }
  lockUser(id)
  {
    this.adminService.lockUser(id).subscribe(res=>{
      if(res===true)
      {
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
       this.router.onSameUrlNavigation = 'reload';
       this.router.navigateByUrl("/user")
      }
      });
  } 

  unlockUser(id)
  {
    this.adminService.unlockUser(id).subscribe(res=>{
      if(res===true)
      {
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
       this.router.onSameUrlNavigation = 'reload';
       this.router.navigateByUrl("/user")
      }
      });
  }


}
