import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceInterface } from 'src/model/serviceInterface';
import { Store } from '@ngrx/store';
import { ServiceState } from 'src/state/service.state';
import { OrderHeader } from 'src/model/orderheader';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  cartItems:number;
  serviceCart:Observable<ServiceInterface[]>;
  serviceCartInterface:ServiceInterface[];
  totalPrice:number = 0;
  form:OrderHeader;
  constructor(private store: Store<ServiceState>,private cartSerivce:CartService) {
    this.store.select(state => state).subscribe(data=>{
     this.serviceCartInterface = data['service'];
     this.cartItems = data['service'].length;
     console.log(data['service']);
     console.log(this.cartItems);
    this.totalPrice=this.getTotal(this.totalPrice);
   });  
  }

  order(form)
  {
    var orderHeaderVM:OrderHeader = {
      address:form.address,
      city:form.city,
      email:form.email,
      comments:'',
      id:0,
      name:form.name,
      phone:form.phone,
      serviceCount:0,
      serviceItems:this.serviceCartInterface,
      zipCode:form.zipCode,
      status:''
    }
    
    console.log(orderHeaderVM);
    this.cartSerivce.summarypost(orderHeaderVM).subscribe(res=>{
      console.log(res);
    })

  }

  ngOnInit() {
  }
  getTotal(initialPrice):number
  {
    this.serviceCartInterface.forEach(element => {
      initialPrice+=element.price;
    });
    return initialPrice;
  }


}
