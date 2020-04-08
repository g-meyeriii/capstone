import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestLineService } from '../request-line.service';
import { RequestService } from 'src/app/request/request.service';
import { RequestLine } from '../request-line.class';

@Component({
  selector: 'app-request-line-delete',
  templateUrl: './request-line-delete.component.html',
  styleUrls: ['./request-line-delete.component.css']
})
export class RequestLineDeleteComponent implements OnInit {
  request: Request;
  requestLine:RequestLine;

  delete(): void{
    this.requestLine.requestId = this.requestLine.requestId;
    this.requestLinesvc.DeleteRequestLine(this.requestLine).subscribe(
      res=> {
        console.debug("Requestline delete successfull!", res);
        this.router.navigateByUrl(`/requestlines/list/${this.requestLine.requestId}`);
      },
      err => {
        console.error("Error requestline delete failed",err);
      }
    );
  }

  constructor(
    private systemsvc: SystemService,
    private router: Router,
    private requestLinesvc: RequestLineService,
    private requestsvc: RequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;

  }

}
