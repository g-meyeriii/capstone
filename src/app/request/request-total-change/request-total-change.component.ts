import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-total-change',
  templateUrl: './request-total-change.component.html',
  styleUrls: ['./request-total-change.component.css']
})
export class RequestTotalChangeComponent implements OnInit {

  constructor(
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
