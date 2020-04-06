import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {

  requestLine: RequestLine = new RequestLine();
  products: Product[] = [];


  save(): void{
    this.requestLinesvc.PutRequestLine(this.requestLine, this.requestLine).subscribe(
      res => {
        this.requestLine = res;
        console.debug("RequestLine edited", res);
        this.requestLinesvc.RecalcRequestTotal(this.requestLine.requestId)
        this.router.navigateByUrl("/requestlines/list/:id");
      },
      err => {
        console.error("Error editing request line", err);
      }
    );
  }

  constructor(
    private router: Router,
    private requestLinesvc: RequestLineService,
    private route: ActivatedRoute,
    private systemsvc: SystemService,
    private prodsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe(
      res => { this.products = res; console.debug("Products:", res); }
    );
    this.requestLinesvc.GetRequestLine(this.requestLine.id).subscribe(
      res => {
        this.requestLine =res;
        console.debug("Requestline:",res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
