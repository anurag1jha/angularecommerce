import { Injectable } from '@angular/core';
import { Api } from '../../core/service/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Admin {
  
user_url ='http://localhost:3000/users/';
product_url='http://localhost:3000/products';
all_user = 'http://localhost:3000/users'
  constructor(private apiService:Api){}

  userDashboardData(){
    return this.apiService.get(this.user_url);
  }
  productDasboardData(){
    return this.apiService.get(this.product_url);
  }
   allUser():Observable<any>{
    return this.apiService.get(this.all_user);
  }
  addUser(user_dto:any){
    return this.apiService.post(this.user_url,user_dto)
  }

  singleUser(user_id:any){
    return this.apiService.get(this.user_url, user_id)
  }

   editUser(user_id:any, user_dto:any):Observable<any>{
    return this.apiService.put(this.user_url+user_id, user_dto)
  }
  deleteUser(user_id:any):Observable<any>{
    return this.apiService.put(this.user_url+user_id)
  }
}
