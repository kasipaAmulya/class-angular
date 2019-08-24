import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    var result:string="";
if(value.length==0||value==undefined) return "field required";
return value.split("").reverse().join("");
// for(let i=value.length;i>=0;i--){
//   result+=value[i];
// }
return null
  }
}
