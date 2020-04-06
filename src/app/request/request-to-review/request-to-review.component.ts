import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { Request } from '../request.class';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-to-review',
  templateUrl: './request-to-review.component.html',
  styleUrls: ['./request-to-review.component.css']
})
export class RequestToReviewComponent implements OnInit {
  requests: Request[]= [];
  currentUser: User = this.systemsvc.currentUser
 

  RequestsToReviewNotOwned(){
    this.requestsvc.requestsToReviewNotOwned(this.currentUser.id).subscribe(
      res => {
        this.requests =res;
        console.debug("Requests not owned", res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Error getting request not owned",err);
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
