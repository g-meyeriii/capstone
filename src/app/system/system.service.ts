import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SystemService {

  userLogin(userName:string, password: string){
    return this.http.get(`${url}/userName/
            ${userName}` && `${url}/password/${password}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
