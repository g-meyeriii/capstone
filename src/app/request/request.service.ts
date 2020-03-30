import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http/http';
import { Request } from './request.class';

const url ="http://localhost:58145/api/products";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  list(): Observable<Request[]> {
    return this.http.get(`${url}`) as Observable<Request[]>;
  }
  get(id:any): Observable<Request>{
    return this.http.get(`${url}/${id}`) as Observable<Request>;
  }
  create(request:Request): Observable<Request>{
    return this.http.post(`${url}`, request) as Observable<Request>
  }
  change(request:Request): Observable<any>{
    return this.http.put(`${url}/${request.id}`, request) as Observable<any>;  
  }
  remove(request:Request): Observable<any>{
    return this.http.delete(`${url}/${request.id}`) as Observable<any>;  
  }


  


  constructor(
    private http: HttpClient
  ) { }
}
