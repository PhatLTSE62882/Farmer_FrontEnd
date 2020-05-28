import { Component, OnInit } from '@angular/core';
import { Service } from 'src/model/service';
import { AdminService } from 'src/service/admin.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  serviceList:Service[];
  wwwroot:string = environment.wwwroot;
  constructor(private adminService:AdminService,private router:Router) { 
    this.adminService.getAllService().subscribe(res=>{
      this.serviceList = res as Service[];
    })
  }
  ngOnInit() {

  }
  delete(id)
  {
    this.adminService.deleteService(id).subscribe(res=>{
         if(res===true)
         {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigateByUrl("/service")
         }
    });
  }
}
