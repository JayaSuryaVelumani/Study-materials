import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

//example-1
  // transform(value: string, cityName:string): unknown {
  //   return 'City Name: '+ cityName;
//example-2
//   transform(value: string, cityName:string,cityCode:string): unknown {
//     if(cityName ==='Coimbatore'){
// console.log("cityName",cityName);
//       return 'City Name: '+ cityName;
//   }
//     return 'City Code: '+ cityCode;
//   }

constructor(private sanitizer : DomSanitizer){}
transform(value: string, cityCode:string): unknown {
  if(cityCode==='KA'){
return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:gray;color:white">'+ cityCode + '</div>') 
  }
  return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:blue;color:white">'+ cityCode + '</div>')  
}

}
