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

  request: Request;
  requestId: number = 0;

  constructor(
    private systemsvc: SystemService,
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  approved(request: Request):void{
    this.requestsvc.setToApproved(request).subscribe(
      res => {
      
      console.debug("Set to approved:",res);
      this.router.navigateByUrl("/requests/requestreviewonly")
      },
      err => {
        console.error("Error approving Request:",err);
      }
    );
  }
  rejected(request: Request):void{
   
    this.requestsvc.setToRejected(request).subscribe(
      res => {
        this.request = res;
        this.router.navigateByUrl("/requests/requestreviewonly")
      },
      err => {
        console.error("Error rejecting Request:",err);
      }
    );
  }

  ngOnInit(): void {
    this.requestId= this.route.snapshot.params.id; 
    this.requestsvc.get(this.requestId).subscribe(
      res => {
        this.request = res;
        console.debug("Approve/Reject view",res);
      },
      err => {
        console.error("Error Approve/Reject view:", err);
      }
    );
  }
}
