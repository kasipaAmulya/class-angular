import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validator'
})
export class ValidatorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value.length==0||value==undefined) return "field required";
return null;
  }

}
