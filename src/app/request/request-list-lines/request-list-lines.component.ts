import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-list-lines',
  templateUrl: './request-list-lines.component.html',
  styleUrls: ['./request-list-lines.component.css']
})
export class RequestListLinesComponent implements OnInit {

  constructor(
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
