import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/service/admin.service';
import { Service } from 'src/model/service';
import { ServiceDetail } from 'src/model/viewmodel/servicedetail';
import { ServiceList } from 'src/model/servicemapper';

@Component({
  selector: 'app-editservice',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css']
})
export class EditserviceComponent implements OnInit {
  currentId:number;
  serviceDetail:ServiceDetail;
  fileToUpload:File;
  constructor(private activatedRoute:ActivatedRoute,private adminService:AdminService,private router:Router) { 
    this.serviceDetail = {
      categoryList:[{
        displayOrder:0,
        id:0,
        name:''
      }],
      service:{
        categoryId:0,
        frequencyId:0,
        id:0,
        imageUrl:"",
        longDesc:"",
        name:"",
        price:0,
        frequency:{
          frequencyCount:0,
          id:0,
          name:""
        },category:{
          displayOrder:0,
          id:0,
          name:''
        }
      },
      frequencyList:[{
           frequencyCount:0,
           id:0,
           name:''
      }],
      fileToUpload:null
    };
      this.currentId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
  }
  ngOnInit() {
      this.adminService.getServiceDetail(this.currentId).subscribe(res=>{
           this.serviceDetail = res as ServiceDetail;
       });
  }
  updateOrInsert()
  {
    //event.PreventDefault();
    this.serviceDetail.fileToUpload=this.fileToUpload;
   // console.log(this.serviceDetail);
    //console.log(this.fileToUpload);
    console.log(JSON.stringify(this.serviceDetail.service));
     this.adminService.updateService(this.serviceDetail).toPromise().then(res=>{
       console.log(res);
       if(res===true)
       {
            this.router.navigateByUrl("/service");
       }
     });
  }
  uploadImage(file:FileList)
  {
    this.fileToUpload=file.item(0);
    console.log(this.fileToUpload.name);
    //this.imageName=this.fileToUpload.name;
    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
  }

}
