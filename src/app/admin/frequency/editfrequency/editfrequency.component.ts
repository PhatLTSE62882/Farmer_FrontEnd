import { Component, OnInit } from '@angular/core';
import { Frequency } from 'src/model/frequency';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/service/admin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './editfrequency.component.html',
  styleUrls: ['./editfrequency.component.css']
})
export class EditFrequencyComponent implements OnInit {

  currentId:number;
  frequencyDetail:Frequency;
  constructor(private activatedRoute:ActivatedRoute,private adminService:AdminService,private router:Router) { 
    this.frequencyDetail = {
      frequencyCount:0,
      id:0,
      name:''
    }
  }

  ngOnInit() {
      this.currentId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
      if(this.currentId!=0)
      {
        this.adminService.getFrequencyDetail(this.currentId).subscribe(res=>{
             this.frequencyDetail = res as Frequency;
         });
      }
  }
  updateOrInsert(form:Frequency)
  {
      //console.log(form as CategoryList);
      console.log(this.frequencyDetail);
      this.adminService.updateFrequency(this.frequencyDetail).toPromise().then(res=>{
        if(res==true)
        {
           this.router.navigateByUrl("/frequency");
        }
      })
  }
}

