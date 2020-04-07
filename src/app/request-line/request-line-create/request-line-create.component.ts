import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/product.class';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {
  requestLine: RequestLine = new RequestLine();
  products: Product[] = [];
  request: Request;
  requestId: number;

  save(): void {
    this.requestLine.requestId = +this.requestId;
    this.requestLine.productId = +this.requestLine.productId;
    console.log(this.requestLine);
    this.requestLinesvc.PostReqeustLine(this.requestLine).subscribe(
      res => {
        console.debug("RequestLine created:",res);
        this.router.navigateByUrl("/requestlines/list");
      },
      err => {
        console.error("Error creating RequestLine:",err);
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private systemsvc: SystemService,
    private requestLinesvc: RequestLineService,
    private router: Router,
    private prodsvc: ProductService
    
    
  ) { }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.params.id;
    this.prodsvc.list().subscribe(
      res => { this.products = res; console.debug("Products:", res); }
    );
  }

}
