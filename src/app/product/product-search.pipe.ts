import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[],searchCriteria: string=""):Product[] {
    if(searchCriteria === '') return products;
    let criteria = searchCriteria.toLowerCase();
    let selProducts: Product[] = [];
    for(let product of products){
      if(
      product.id.toString().includes(criteria)
      || product.description.toLocaleLowerCase().includes(criteria)
      || product.justification.toLocaleLowerCase().includes(criteria)
      || product.rejectionReason.toLocaleLowerCase().includes(criteria)
      || product.deliveryMode.toLocaleLowerCase().includes(criteria)
      || product.status.toLocaleLowerCase().includes(criteria)
      || product.total.toString().includes(criteria)
      || product.userId.toString().includes(criteria)
       ) {
        selProducts.push(product);
      }
    }
    return selProducts;
  }

}
