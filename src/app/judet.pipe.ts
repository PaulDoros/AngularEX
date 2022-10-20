import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'judet'
})
export class JudetPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return value.filter((item) => item.idParinte === null);
  }

}

