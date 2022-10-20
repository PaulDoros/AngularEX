
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localitati'
})
export class LocalitatiPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return value.filter((item) =>item.adancime > 0);
  }

}
