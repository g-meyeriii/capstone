import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestService } from 'src/app/request/request.service';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {

  requestLine: RequestLine = new RequestLine();
  products: Product[] = [];

  
  save(): void{
       
    this.requestLinesvc.change(this.requestLine).subscribe(
      res => {
       
        console.debug("RequestLine edited", res);
        
        this.router.navigateByUrl(`/requestlines/list/${this.requestLine.requestId}`);
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
    private prodsvc: ProductService,
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe(
      res => { this.products = res; console.debug("Products:", res);
     },
     err =>{
       console.error("RequestLine edit failed:",err);
     }
    );
    let id = this.route.snapshot.params.id;
    this.requestLinesvc.GetRequestLine(id).subscribe(
      res => {
        this.requestLine =res;
        console.debug("RequestLine:", res);
      },
      err => {
        console.error("Error editing RequestLine:", err);
      }
    );
  }
}
