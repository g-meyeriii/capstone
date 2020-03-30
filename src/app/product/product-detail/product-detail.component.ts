import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product =  new Product();
  searchCriteria: string ='';

  delete(): void{
    this.productsvc.remove(this.product).subscribe(
      res => {
        this.product = res;
        console.debug("Product deleted", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error("Error deleting product", err);
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc : ProductService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        this.product =res;
        console.debug("Product:", res);
      },
      err => {
        console.error("Error on product",err);
      }
    );
  }

}
