import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { Router } from '@angular/router';
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

  save(): void {
    this.requestLinesvc.PostReqeustLine(this.requestLine).subscribe(
      res => {
        console.debug("RequestLine created:",res);
        this.router.navigateByUrl("/requestlines/list/:id");
      },
      err => {
        console.error("Error creating RequestLine:",err);
      }
    );
  }

  constructor(
    private systemsvc: SystemService,
    private requestLinesvc: RequestLineService,
    private router: Router,
    private prodsvc: ProductService
    
    
  ) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe(
      res => { this.products = res; console.debug("Products:", res); }
    );
  }

}
