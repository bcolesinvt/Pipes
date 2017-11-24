import { Pipe, PipeTransform } from '@angular/core';

// created using ng generate pipe filter where filter is the name also use ng g p filter
// using false may cause performance problems - changed so that adding
// new server does not automatically update
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    const strLen = filterString.length;
    filterString = filterString.toUpperCase();
    for (const item of value ) {
      const oneItem = item[propName].toUpperCase();
      if (oneItem.slice(0, strLen) === filterString.slice(0, strLen)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
