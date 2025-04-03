import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class Capitalize implements PipeTransform { 
    transform(value: string, ...args: any[]) {
        if(!value) return value;
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}