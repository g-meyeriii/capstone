import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { HttpClient } from '@angular/common/http';

const url: string ="http://localhost:58145/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  list():Observable<User[]>{
    return this.http.get(`${url}`) as Observable<User[]>;
  }
  get(id:any): Observable<User>{
    return this.http.get(`${url}/${id}`) as Observable<User>;
  }
  create(user:User): Observable<User>{
    return this.http.post(`${url}`, user) as Observable<User>;  
  }
  change(user:User): Observable<User>{
    return this.http.put(`${url}/${user.id}`, user) as Observable<any>;
  }
  remove(user:User): Observable<any>{
    return this.http.delete(`${url}/${user.id}`) as Observable<any>;
    }

  constructor(
    private http: HttpClient //dependency injection example//
  ) { }
}
