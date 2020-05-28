import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryList } from 'src/model/categorymapper';
import { UserIdentity } from 'src/model/viewmodel/userauthentication';
import { UserManagement } from 'src/model/viewmodel/usermanagement';
import { User } from 'src/model/user';
import { Frequency } from 'src/model/frequency';
import { Service } from 'src/model/service';
import { ServiceDetail } from 'src/model/viewmodel/servicedetail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user = JSON.parse(localStorage.getItem("USER")) as UserIdentity;
  token = this.user.token;
  headers:HttpHeaders  = new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
  .set('Authorization','Bearer '+ this.token);
  headersForPostImage:HttpHeaders  = new HttpHeaders()
  .set('Authorization','Bearer '+ this.token);
  headersForPost:HttpHeaders  = new HttpHeaders()
  .set('Content-Type', 'application/json; charset=UTF-8')
  .set('Authorization','Bearer '+ this.token)

  constructor(private http:HttpClient) { }
  getAllCategory()
  {
    return this.http.get<CategoryList[]>("https://localhost:44385/api/admin/category/getall",{headers:this.headers});
  }
   getAllFrequency()
  {
    return this.http.get<Frequency[]>("https://localhost:44385/api/admin/frequency/getall",{headers:this.headers});
  }
  getAllUser()
  {
    return this.http.get<UserManagement[]>("https://localhost:44385/api/admin/user/getall",{headers:this.headers});
  }
  getAllService()
  {
    return this.http.get<Service[]>("https://localhost:44385/api/admin/service/getall",{headers:this.headers});
  }
  register(formUser:User)
  {
    return this.http.post("https://localhost:44385/api/admin/user/register",formUser,{headers:this.headersForPost});
  }
  getCategoryDetail(id:number)
  {
    return this.http.get<CategoryList>("https://localhost:44385/api/admin/category/detail?id="+id,{headers:this.headers});
  }
  getFrequencyDetail(id:number)
  {
    return this.http.get<Frequency>("https://localhost:44385/api/admin/frequency/detail?id="+id,{headers:this.headers});
  }
  getServiceDetail(id:number)
  {
    return this.http.get<ServiceDetail>("https://localhost:44385/api/admin/service/detail?id="+id,{headers:this.headers});
  }
  updateCategory(form:CategoryList)
  {
    return this.http.post("https://localhost:44385/api/admin/category/update",form,{headers:this.headersForPost});
  }
  updateFrequency(form:Frequency)
  {
    return this.http.post("https://localhost:44385/api/admin/frequency/update",form,{headers:this.headersForPost});
  }
  updateService(form:ServiceDetail)
  {
    const formData = new FormData();
    // optional you can pass a file name as third parameter
    formData.append('fileToUpload', form.fileToUpload);
    formData.append('service',JSON.stringify(form.service));
    //formData.append('Service',form.service);
    return this.http.post("https://localhost:44385/api/admin/service/update",formData,{headers:this.headersForPostImage});
  }
  deleteService(id:number)
  {
    return this.http.delete(environment.apiUrl+"/api/admin/service/delete?id="+id,{headers:this.headers});
  }
  lockUser(id:string)
  {
    return this.http.put(environment.apiUrl+"/api/user/lock?id="+id,{headers:this.headers});
  }
  unlockUser(id:string)
  {
    return this.http.put(environment.apiUrl+"/api/user/unlock?id="+id,{headers:this.headers});
  }
  

}
