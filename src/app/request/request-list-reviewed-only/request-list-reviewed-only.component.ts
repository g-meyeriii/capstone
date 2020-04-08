import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list-reviewed-only',
  templateUrl: './request-list-reviewed-only.component.html',
  styleUrls: ['./request-list-reviewed-only.component.css']
})
export class RequestListReviewedOnlyComponent implements OnInit {
  requests: Request[];
  searchCriteria: string ="";
  currentUser = this.systemsvc.currentUser.id;
  request: Request;

  approved():void{
    this.systemsvc.currentUser.isReviewer=true;
    this.requestsvc.setToApproved(this.request).subscribe(
      res => {
        this.request = res;
      },
      err => {
        console.error("Error approving Request:",err);
      }
    );

  }
  rejected():void{
    this.systemsvc.currentUser.isReviewer=true;
    this.requestsvc.setToRejected(this.request).subscribe(
      res => {
        this.request = res;
      },
      err => {
        console.error("Error rejecting Request:",err);
      }
    );

  }
  constructor(
    private systemsvc: SystemService,
    private router: Router,
    private requestsvc: RequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.requestsvc.requestsToReviewNotOwned(this.currentUser).subscribe(
      res => {
        this.requests =res;
      console.debug("Requests-to-review-list", res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
