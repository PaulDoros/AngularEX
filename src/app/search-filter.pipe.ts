import { Pipe, PipeTransform } from '@angular/core';
import { debug } from 'console';
import { ProdusDisponibil } from './pseudo-api.service';

@Pipe({ name: 'searchFilter' })
export class SearchFilter implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();
    debugger;
    return value.filter(function (item: any) {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(args);
    });
  }
}




    
