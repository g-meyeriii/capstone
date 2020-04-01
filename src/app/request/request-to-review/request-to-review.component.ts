import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-to-review',
  templateUrl: './request-to-review.component.html',
  styleUrls: ['./request-to-review.component.css']
})
export class RequestToReviewComponent implements OnInit {

  constructor(
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
