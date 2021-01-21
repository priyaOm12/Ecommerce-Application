import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/core/interfaces/IProduct';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value:IProduct[],filterValue:string){
    console.log("productFilter");
    if(value && value.length>0){
      return value.filter(data=>data.productName === filterValue);
    }
    else 
    return [];
  }

}
