import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeString',
  standalone: true  ,
  pure: true
})
export class CapitalizeString implements PipeTransform { 
    transform(items: Array<{name:string}>, ...args: any[]) {
        console.log("Capital     ")
        return items.map(item => {
            return {name: item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        })
        
    }
}