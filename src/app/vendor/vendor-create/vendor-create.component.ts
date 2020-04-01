import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit { 

  vendor: Vendor = new Vendor();

  save(): void {
    this.vendorsvc.create(this.vendor).subscribe(
      res => {
        this.vendor = res;
        console.debug("Vendor created!", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => {
        console.error("Error creating vendor", err);
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    
  }

}
