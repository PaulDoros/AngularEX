import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cafenele'
})
export class CafenelePipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return value.filter((item) => item.idParinte > 0 && item.adancime === null);
  }

}

