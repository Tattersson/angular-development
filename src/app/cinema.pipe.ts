import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cinema'
})
export class CinemaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
