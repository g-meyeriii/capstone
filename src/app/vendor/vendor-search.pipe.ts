import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { UserService } from '../user/user.service';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string=""): Vendor [] {
    if(searchCriteria === "") return vendors;
    let criteria = searchCriteria.toLowerCase();
    let selVendors: Vendor [] = [];
    for(let vendor of vendors){
      if(
        vendor.id.toString().includes(criteria)
       || (vendor.code.toLowerCase().includes(criteria))
       || (vendor.name.toLowerCase().includes(criteria))
       || (vendor.address.toLowerCase().includes(criteria))
       || (vendor.city.toLowerCase().includes(criteria))
       || (vendor.state.toLowerCase().includes(criteria))
       || (vendor.phone.toLowerCase().includes(criteria))
       || (vendor.email.toLowerCase().includes(criteria))
      ) {
        selVendors.push(vendor);
        }
      }
    return selVendors;
  }

}
