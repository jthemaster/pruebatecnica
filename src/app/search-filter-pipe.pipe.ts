import { Pipe, PipeTransform } from '@angular/core';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';
import { Cliente } from 'src/app/Modelo/Cliente';

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(items: Tarjeta[], filter: Cliente): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.cliente_id == filter.id);
  }
}
