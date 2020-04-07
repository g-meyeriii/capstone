import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../request.class';

@Component({
  selector: 'app-disapproved',
  templateUrl: './disapproved.component.html',
  styleUrls: ['./disapproved.component.css']
})
export class DisapprovedComponent implements OnInit {

  requests: Request [] =[];
  currentUser = this.systemsvc.currentUser.id
  

  constructor(
    private systemsvc: SystemService,
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.requestsvc.requestsToReviewNotOwned(this.currentUser).subscribe(
      res => {
        this.requests = res;
        console.debug("Set to review",res);
      },
      err => {
        console.error("Error set to reivew:", err);
      }
    );

  }

}
