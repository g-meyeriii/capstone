import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();

  save(): void {
    this.productsvc.change(this.product).subscribe(
      res => {
        this.product = res;
        console.debug("Product changes saved", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error("Error product changes failed", err);
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        this.product = res;
        console.debug("Product:", res);
       
      },
      err => {
        console.error("Error editing product:",err);
      }
    );
  }

}
