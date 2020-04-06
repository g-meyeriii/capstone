import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestLine } from '../request-line.class';

@Component({
  selector: 'app-request-total-change',
  templateUrl: './request-total-change.component.html',
  styleUrls: ['./request-total-change.component.css']
})
export class RequestTotalChangeComponent implements OnInit {
  requestLinesvc: any;
  requestLine :RequestLine;

  constructor(
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    this.requestLinesvc.RecalcRequestTotal(this.requestLine.id).subscribe(
      res => {
        this.requestLine =res;
        console.debug("Requestline-total recalc:",res);
      },
      err => {
        console.error("Error in requestline recalc",err);
      }
    );
  }

}
