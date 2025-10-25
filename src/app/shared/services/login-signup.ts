import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Api } from '../../core/service/api';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignup {
  public login_url = "http://localhost:3000";
  public reg_url = "http://localhost:3000";

  private http = inject(HttpClient);
  private apiService = inject(Api)

  authLogin(User_name:any, password:any):Observable<any>{
    return this.apiService.get(this.login_url+'/users?email='+User_name+'&password='+password);
  }

  userRegister(user:any):Observable<any>{
    return this.apiService.post(this.reg_url+'/users',user)
  }

 adminLogin(User_name: string, password: string): Observable<any> {
  return this.apiService.get(
    `${this.login_url}/users?email=${User_name}&password=${password}&role=admin`
  );
}

}
