import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request  = new Request();
  searchCriteria: string ='';

  

  delete(): void{
    this.requestsvc.remove(this.request).subscribe(
      res => {
        this.request = res;
        console.debug("Request updated",res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error("Error updating request", err);
      }
    );
  }
  save(): void{
    this.requestsvc.change(this.request).subscribe(
      res => {
        this.request = res;
        console.debug("Request edited", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error("Error editing request", err);
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
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => {
        this.request =res;
        console.debug("Request", res);
      },
      err => {
        console.error("Error on request", err);
      }
    );
  }

}
