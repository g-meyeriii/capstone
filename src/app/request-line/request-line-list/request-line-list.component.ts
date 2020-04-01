import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestLine } from '../request-line.class';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {
  requestLines: RequestLine[] = [];
  searchCriteria: string="";

  constructor(
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
