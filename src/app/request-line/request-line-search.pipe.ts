import { Pipe, PipeTransform } from '@angular/core';
import { RequestLine } from './request-line.class';

@Pipe({
  name: 'requestLineSearch'
})
export class RequestLineSearchPipe implements PipeTransform {

  transform(requestLines:RequestLine[],searchCriteria:string =""):RequestLine[] {
    if(searchCriteria === "") return requestLines;
    let criteria = searchCriteria.toLocaleLowerCase();
    let selRequestLines: RequestLine [] =[];
    for(let requestLine of requestLines){
      if(requestLine.id.toString().includes(criteria)
      ||(requestLine.requestId.toString().includes(criteria))
      ||(requestLine.productId.toString().includes(criteria))
      ||(requestLine.quantity.toString().includes(criteria))
    ){
      selRequestLines.push(requestLine);
    }
  }
    return selRequestLines;
  }

}
