import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(value: any, rechercheValeur: string): any {
    
    if (!rechercheValeur) return value;
    return value.filter((v: { idProduit: { toString: () => string; }; nomProduit: string; prixProduit: { toString: () => string; }; }) => v.idProduit.toString().toLowerCase().indexOf(rechercheValeur.toLowerCase()) > -1 || v.nomProduit.toLowerCase().indexOf(rechercheValeur.toLowerCase()) > -1 || v.prixProduit.toString().toLowerCase().indexOf(rechercheValeur.toLowerCase()) > -1);
  }

}
