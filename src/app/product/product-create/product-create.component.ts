import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();

  save(): void {
    this.productsvc.create(this.product).subscribe(
      res => {
        this.product =res;
        console.debug("Created new product", res);
      },
      err => {
        console.error("Error creating product", err);
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService
  ) { }

  ngOnInit(): void {
    
  }

}
