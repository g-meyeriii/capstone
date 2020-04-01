import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  constructor(
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
