import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeViewModel } from 'src/model/viewmodel/homeviewmodel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  getAll()
  {
    return this.http.get<HomeViewModel>("https://localhost:44385/api/category/getall")
  }
  
}
