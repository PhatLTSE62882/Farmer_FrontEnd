import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from  '@angular/common/http';
import { DetailsComponent } from './home/details/details.component';
import {StoreModule} from '@ngrx/store';
import {ServiceReducer} from '../reducer/service.reducer';
import { CartComponent } from './cart/cart/cart.component';
import { SummaryComponent } from './cart/summary/summary.component';
import { ConfirmComponent } from './user/confirm/confirm.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { DataTablesModule } from 'angular-datatables';
import { CategoryComponent } from './admin/category/category.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from './admin/user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { EditComponent } from './admin/category/edit/edit.component';
import { TestComponent } from './admin/user/test/test.component'; 
import {AuthGuard} from '../auth/auth.guard';
import { FrequencyComponent } from './admin/frequency/frequency.component';
import { EditFrequencyComponent } from './admin/frequency/editfrequency/editfrequency.component';
import { ServiceComponent } from './admin/service/service.component';
import { EditserviceComponent } from './admin/service/editservice/editservice.component';


const appRoutes:Routes =[
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'details',component:DetailsComponent},
    {path:'cart',component:CartComponent},
    {path:'summary',component:SummaryComponent},
    {path:'login',component:LoginComponent},
    {path:'category',component:CategoryComponent,canActivate:[AuthGuard]},
    {path:'editcategory/:id',component:EditComponent,canActivate:[AuthGuard]},
    {path:'editfrequency/:id',component:EditFrequencyComponent,canActivate:[AuthGuard]},
    {path:'editservice/:id',component:EditserviceComponent,canActivate:[AuthGuard]},
    {path:'user',component:UserComponent},
    {path:'register',component:RegisterComponent},
    {path:'edit',component:EditComponent},
    {path:'confirmemail',component:ConfirmComponent},
    {path:'frequency',component:FrequencyComponent,canActivate:[AuthGuard]},
    {path:'service',component:ServiceComponent,canActivate:[AuthGuard]},


]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    CartComponent,
    SummaryComponent,
    ConfirmComponent,
    LoginComponent,
    CategoryComponent,
    UserComponent,
    RegisterComponent,
    EditComponent,
    TestComponent,
    FrequencyComponent,
    EditFrequencyComponent,
    ServiceComponent,
    EditserviceComponent
  ],
  imports: [
    DataTablesModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,  
    StoreModule.forRoot(
      {
        service:ServiceReducer
      }),
      FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
