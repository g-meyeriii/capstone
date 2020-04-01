import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestLine } from '../request-line.class';
import { Router } from '@angular/router';
import { RequestLineService } from '../request-line.service';

@Component({
  selector: 'app-request-line-detail',
  templateUrl: './request-line-detail.component.html',
  styleUrls: ['./request-line-detail.component.css']
})
export class RequestLineDetailComponent implements OnInit {
  requestLine: RequestLine = new RequestLine();
  searchCriteria: string="";

  delete(): void{
    this.requestLinesvc.remove(this.requestLine).subscribe(
      res=> {
        console.debug("Requestline delete successfull!", res);
        this.router.navigateByUrl("/requestlines/list");
      },
      err => {
        console.error("Error requestline delete failed",err);
      }
    );
  }

  constructor(
    private systemsvc: SystemService,
    private router: Router,
    private requestLinesvc: RequestLineService
  ) { }

  ngOnInit(): void {
  }

}
