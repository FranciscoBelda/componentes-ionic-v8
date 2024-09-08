import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(lista: any[],
            texto: string,
            columna: string): any[] {

    if ( texto === '') {
      return lista;
    }
    texto = texto.toLowerCase();
    return lista.filter(
      item => item[columna].toLowerCase().includes( texto));
  }


}
