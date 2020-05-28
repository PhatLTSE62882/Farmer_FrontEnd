import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/service/admin.service';
import { CategoryList } from 'src/model/categorymapper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList:CategoryList[];
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit() {
    
    this.adminservice.getAllCategory().subscribe(res=>{
      console.log(res);
      this.categoryList=res as CategoryList[];
    })
  }
  delete(id:number)
  {
    console.log(id);
  }


}
