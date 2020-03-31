import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  
  request: Request = new Request();

  save(): void{
    this.requestsvc.change(this.request).subscribe(
      res => {
        this.request = res;
        console.debug("Request edited", res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Error editing request", err);
      }
    );
  }

  constructor(
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => {
        this.request = res;
        console.debug("Request", res);
      },
      err => {
        console.error("Error editing request", err);
      }
    );
  }

}
