import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, searchText: string): any[] {
    if (!items) {

        return[];
      
    }
    if(!searchText){
      return items;
    }

      searchText = searchText.toLocaleLowerCase();

      return items.filter( (it: string) => {
        return it.toLocaleLowerCase().includes(searchText);
      });


  }

}
