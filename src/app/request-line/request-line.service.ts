import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './request-line.class';
import { HttpClient } from '@angular/common/http';

const url: string ="http://localhost:58145/api/requestlines";

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {
  
  get(id:any): Observable<RequestLine>{
    return this.http.get(`${url}/${id}`) as Observable<RequestLine>;
  }
  create(requestLine: RequestLine): Observable<RequestLine>{
    return this.http.post(`${url}`,requestLine) as Observable<any>;
  }
  change(requestLine:RequestLine): Observable<any>{
    return this.http.put(`${url}/${requestLine.id}`, requestLine) as Observable<any>;
  }
  remove(requestLine: RequestLine): Observable<any>{
    return this.http.delete(`${url}/${requestLine.id}`) as Observable<any>;
  }

    constructor(
    private http: HttpClient

  ) { }
}
