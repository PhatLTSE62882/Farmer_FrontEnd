import { Component } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { ServiceState } from 'src/state/service.state';
import { Observable } from 'rxjs';
import { ServiceInterface } from 'src/model/serviceInterface';
import { UserIdentity } from 'src/model/viewmodel/userauthentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Farmer';
  cartItems:number;
  serviceCart:Observable<ServiceInterface[]>;
  serviceCartInterface:ServiceInterface[];
  currentUser:UserIdentity;
  constructor(private store: Store<ServiceState>,private router:Router) {
    this.getCurrent();
    
     this.store.select(state => state).subscribe(data=>{
      this.serviceCartInterface = data['service'];
      this.cartItems = data['service'].length;
      console.log(data['service']);
      console.log(this.cartItems);
    });  
  }
  getCurrent()
  {
     if(localStorage.getItem("USER")!==undefined)
     {
      this.currentUser = JSON.parse(localStorage.getItem("USER"));
     }
  }
  logout()
  {
       localStorage.removeItem("USER");
       window.location.href="/home";
      // this.router.navigateByUrl("/home");

  }
  
}
