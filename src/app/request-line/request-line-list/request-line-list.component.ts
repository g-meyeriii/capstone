import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { tokenName } from '@angular/compiler';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {
  
  searchCriteria: string="";
  request: Request; 
  requestLine: RequestLine;

  delete(requestLine:RequestLine): void{
    
    this.requestLinesvc.DeleteRequestLine(requestLine).subscribe(
      res=> {
        console.debug("Requestline delete successfull!", res);
        this.refresh();
      },
      err => {
        console.error("Error requestline delete failed",err);
      }
    );
  }
 

  review(): void{
    this.requestsvc.setToReview(this.request).subscribe(
      res => {
        this.request =res;
        console.debug("Request set to review:",res);
      },
      err => {
        console.error("Error setting to review:",err);
      }
    );
  }
  constructor(
    private systemsvc: SystemService,
    private route: ActivatedRoute,
    private requestLinesvc: RequestLineService,
    private requestsvc: RequestService,
    private router: Router
  ) { }
    requestId: number =0;
    refresh():void{
      this.requestsvc.get(this.requestId).subscribe(
        res => {
          this.request =res;
        console.debug("Request-lines-this request", res);
        
        },
        err => {
          console.error(err);
        }
      );
    }
  ngOnInit(): any {
    this.requestId = this.route.snapshot.params.id;
    this.requestsvc.get(this.requestId).subscribe(
      res => {
        this.request =res;
      console.debug("Request-lines-this request", res);
      
      },
      err => {
        console.error(err);
      }
    );
  }
}


