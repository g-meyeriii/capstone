import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-to-review',
  templateUrl: './request-to-review.component.html',
  styleUrls: ['./request-to-review.component.css']
})
export class RequestToReviewComponent implements OnInit {

  request: Request = new Request();

  RequestsToReviewNotOwned(){
    this.requestsvc.requestsToReviewNotOwned(this.request.userId).subscribe(
      res => {
        this.request =res;
        console.debug("Requests not owned", res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Error getting request not owned",err);
        this.router.navigateByUrl("/request/list");
      }
    );
  }
  setToApproved(){
    this.requestsvc.setToApproved(this.request).subscribe(
      res => {
        this.request =res;
        console.debug("Request approved",res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Error request not approved")
        this.router.navigateByUrl("/request/list");
      }
    );
  }
  setToRejected(){
    this.requestsvc.setToRejected(this.request).subscribe(
      res => {
        this.request =res;
        console.debug("Request rejected",res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Error rejection failed")
        this.router.navigateByUrl("/request/list");
      }
    );
  }

  constructor(
    private systemsvc: SystemService,
    private requestsvc: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
