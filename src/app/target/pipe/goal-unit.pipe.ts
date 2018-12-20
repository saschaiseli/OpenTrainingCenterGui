import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goalUnit'
})
export class GoalUnitPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'HOURS') {
      return ' h';
    } else {
      return ' km';
    }
  }

}
