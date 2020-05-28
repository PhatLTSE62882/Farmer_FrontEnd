import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  summarypost(form)
  {
    return this.http.post("https://localhost:44385/api/category/summary",form)
  }
}
