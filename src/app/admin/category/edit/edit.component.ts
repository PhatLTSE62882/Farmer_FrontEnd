import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/service/admin.service';
import { CategoryList } from 'src/model/categorymapper';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentId:number;
  categoryDetail:CategoryList;
  constructor(private activatedRoute:ActivatedRoute,private adminService:AdminService,private router:Router) { 
    this.categoryDetail = {
      displayOrder:0,
      id:0,
      name:''
    }
  }

  ngOnInit() {
      this.currentId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
      if(this.currentId!=0)
      {
        this.adminService.getCategoryDetail(this.currentId).subscribe(res=>{
             this.categoryDetail = res as CategoryList;
         });
      }
  }
  updateOrInsert(form:CategoryList)
  {
      //console.log(form as CategoryList);
      console.log(this.categoryDetail);
      this.adminService.updateCategory(this.categoryDetail).toPromise().then(res=>{
        if(res==true)
        {
           this.router.navigateByUrl("/category");
        }
      })
  }

}
