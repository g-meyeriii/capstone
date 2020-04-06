import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {
  
  searchCriteria: string="";
  request: Request;
  
  

  
  constructor(
    private systemsvc: SystemService,
    private route: ActivatedRoute,
    private requestLinesvc: RequestLineService,
    private requestsvc: RequestService,
    
    
  ) { }

  ngOnInit(): any {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
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


