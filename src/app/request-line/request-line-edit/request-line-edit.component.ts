import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {

  requestLine: RequestLine = new RequestLine();


  save():void{
    this.requestLinesvc.change(this.requestLine).subscribe(
      res => {
        console.debug("RequesLine change sucessfull",res);
        this.router.navigateByUrl("/requestlines/list");
      },
      err => {
        console.error("Error editing requestline",err);
      }
    )
  }

  constructor(
    private router: Router,
    private requestLinesvc: RequestLineService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestLinesvc.get(id).subscribe(
      res => {
        this.requestLine =res;
        console.debug("Requestline", res);
      },
      err => {
        console.error("Error", err);
      }
    );
  }

}
