import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user.class';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  
 
  currentUser: User;


  constructor(
    private http: HttpClient 
    
    ) { }
}
