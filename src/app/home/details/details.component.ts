import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServiceList } from 'src/model/servicemapper';
import { Store } from '@ngrx/store';
import { ServiceState } from 'src/state/service.state';
import {ServiceInterface} from '../../../model/serviceInterface';
import * as ServiceActions from '../../../action/service.action';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  serviceItem:Observable<object>;
  service:ServiceList;
  serviceList:ServiceList[];
  wwwroot:string = environment.wwwroot;

  constructor(public activatedRoute:ActivatedRoute,private store: Store<ServiceState>) { }

  ngOnInit() {
    this.service = { categoryId:0,
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
      }};
    this.serviceItem = this.activatedRoute.paramMap
    .pipe(() => window.history.state);
    //console.log(this.serviceItem);
    //console.log(this.serviceItem['serviceItem']);
    this.service = this.serviceItem['serviceItem'];
   // console.log(this.service);
    var isExist = JSON.parse(localStorage.getItem("DETAIL"));
    //console.log(isExist);
    if(isExist===null || isExist=== undefined)
    {
      this.saveDetails(this.service);
      this.getDetails();
    }else
    {
     this.getDetails();
    }
  }
  saveDetails(service:ServiceList)
  {
    localStorage.setItem("DETAIL",JSON.stringify(service));
  }
  getDetails()
  {
    this.service = JSON.parse(localStorage.getItem("DETAIL"));
   // console.log(this.service);
  }
  addToCart(serviceObj)
  {
    console.log(serviceObj);
    
    this.store.dispatch(new ServiceActions.AddService({
      id:serviceObj.id,
      imageUrl:serviceObj.imageUrl,
      longDesc:serviceObj.longDesc,
      name:serviceObj.name,
      price:serviceObj.price,
      frequency:serviceObj.frequency
    }))

  }


}
