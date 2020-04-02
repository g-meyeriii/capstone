import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  save(): void {
    this.requestsvc.create(this.request).subscribe(
      res => {
        this.request =res;
        console.debug("Request created",res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error("Error creating request", err);
      }
    );
  }
  setToReview(): void{
    this.requestsvc.setToReview(this.request).subscribe(
      res => {
        this.request =res;
        console.debug("Request:",res);
        this.router.navigateByUrl("/requests/detail");
      },
      err => {
        console.debug("Error sending to review",err);
      }
    );
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
