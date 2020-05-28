import { Component, OnInit } from '@angular/core';
import { ServiceState } from 'src/state/service.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ServiceInterface } from 'src/model/serviceInterface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:number;
  serviceCart:Observable<ServiceInterface[]>;
  serviceCartInterface:ServiceInterface[];
  totalPrice:number = 0;
  wwwroot:string = environment.wwwroot;
  constructor(private store: Store<ServiceState>) {
    this.store.select(state => state).subscribe(data=>{
     this.serviceCartInterface = data['service'];
     this.cartItems = data['service'].length;
     console.log(data['service']);
     console.log(this.cartItems);
    // this.getTotal(this.serviceCartInterface);
   });  
  }

  ngOnInit() {
  }
  getTotal():number
  {
    this.serviceCartInterface.forEach(element => {
      this.totalPrice+=element.price;
    });
    return this.totalPrice;
  }


}
