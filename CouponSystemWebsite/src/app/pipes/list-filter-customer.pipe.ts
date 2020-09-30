import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer.model';

@Pipe({
  name: 'ListFilterCustomer'
})
export class ListFilterCustomerPipe implements PipeTransform {

  transform(list: Customer[], filterText: string): Customer[] {
    return list ? list.filter(item => {
      if (item.firstName.search(new RegExp(filterText, 'i')) > -1)
        return item;
      if (item.lastName.search(new RegExp(filterText, 'i')) > -1)
        return item;
      if (item.email.search(new RegExp(filterText, 'i')) > -1)
        return item;
      if (item.password.search(new RegExp(filterText, 'i')) > -1)
        return item;
    }
    ) : [];

  }
}
