import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/service/home.service';
import { HomeViewModel } from 'src/model/viewmodel/homeviewmodel';
import { CategoryList } from 'src/model/categorymapper';
import { ServiceList } from 'src/model/servicemapper';
import { Frequency } from 'src/model/frequency';
import { Store } from '@ngrx/store';
import { ServiceState } from 'src/state/service.state';
import { Observable } from 'rxjs';
import { ServiceInterface } from 'src/model/serviceInterface';
import { environment }  from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  homeVM : HomeViewModel;
  resObj:any;
  wwwroot:string = environment.wwwroot;
  
  serviceCart:Observable<ServiceInterface[]>;
  constructor(private homeService:HomeService) { 
    //this.serviceCart = store.select('service');
  }

  ngOnInit() {
    this.homeVM = {
      categoryList:[{
        displayOrder:0,
        id:0,
        name:''
      }],
      serviceList:[{
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
        }
      }]
    }
     this.homeService.getAll().toPromise().then(res =>{
       console.log(res);
       this.getAll(res);
       this.homeVM = res;  
     });
     localStorage.removeItem("DETAIL");
  }
  getAll(res)
  {
    this.homeVM = res;
    console.log(this.homeVM);
    console.log(this.resObj);
  //  console.log(this.serviceCart);
  }

}
