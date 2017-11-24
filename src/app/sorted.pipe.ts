import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorted',
  pure: false
})
export class SortedPipe implements PipeTransform {

  transform(value: any): any {
    let sorted = [];
    const resultArray = [];
    for (const item of value ) {
      resultArray.push(item);
      // console.log(item.name)
    }
    sorted = resultArray.slice(0);
    sorted.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) {
        return -1;
      }
      if (leftSide.name > rightSide.name) {
        return 1;
      }
      return 0;
    });
    return sorted;
  }
}
