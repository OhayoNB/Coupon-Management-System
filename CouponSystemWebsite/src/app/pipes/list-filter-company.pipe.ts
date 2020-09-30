import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../models/company.model';

@Pipe({
  name: 'ListFilterCompany'
})
export class ListFilterCompanyPipe implements PipeTransform {

  transform(list: Company[], filterText: string): Company[] {
    return list ? list.filter(item => {
      if (item.name.search(new RegExp(filterText, 'i')) > -1)
        return item;
      if (item.email.search(new RegExp(filterText, 'i')) > -1)
        return item;
      if (item.password.search(new RegExp(filterText, 'i')) > -1)
        return item;
    }
    ) : [];
  }

}
