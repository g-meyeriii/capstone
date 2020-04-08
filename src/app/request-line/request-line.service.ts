import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './request-line.class';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const url: string ="http://localhost:58145/api/requestlines";

@Injectable({
  providedIn: 'root'
}) 
export class RequestLineService {
  requestLine: RequestLine;

  requestsToReviewNotOwned(userId:number){
    return this.http.get(`${url}/getrequeststoreview/${userId}`)as Observable<Request[]>;
  }
  
  setToApproved(requestLine: RequestLine): Observable<Request>{
    return this.http.put(`${url}/settoapproved/${requestLine.id}`,requestLine) as Observable<any>;
  }

  RecalcRequestTotal(requestId): any {
    
  }
  list(): Observable<RequestLine[]>{
    return this.http.get(`${url}`) as Observable<RequestLine[]>;
  }
  change(requestLine: RequestLine): Observable<RequestLine>{
    console.debug("Requestline",requestLine);
    return this.http.put(`${url}/${requestLine.id}`, requestLine) as Observable <RequestLine>
  }
 
  GetRequestLine(id:any): Observable<RequestLine>{
    return this.http.get(`${url}/${id}`) as Observable<RequestLine>;
  }
  PostReqeustLine(requestLine: RequestLine): Observable<RequestLine>{
    return this.http.post(`${url}`,requestLine) as Observable<any>;
  }
  
  DeleteRequestLine(requestLine: RequestLine): Observable<any>{
    return this.http.delete(`${url}/${requestLine.id}`) as Observable<any>;
  }
  
  

    constructor(
    private http: HttpClient,
    private router: Router
    

  ) { }
}
