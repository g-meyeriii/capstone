import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[] = [];
  searchCriteria: string="";

  constructor(
    private vendor: VendorService,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    this.vendor.list().subscribe(
      res => {
        this.vendors = res;
        console.debug("Vendors-list", res);
      },
      err => {
        console.error("Error vendor list", err);
      }
    );
  }

}
