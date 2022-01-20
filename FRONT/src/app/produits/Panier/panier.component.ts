import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/Models/Produit';
import { AddPanier, ClearPanier, DelPanier } from '../PanierAction/panier-action';
import { PanierState } from '../PanierAction/panier-state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  @Select(PanierState.getListProduits) lstProduits?: Observable<Produit[]>;
  ngOnInit(): void {
  }

  addProduit(produit: Produit)
  {
    this.store.dispatch(new AddPanier(produit));
  }

  delProduit(produit:Produit)
  {
    this.store.dispatch(new DelPanier(produit));
  }

  clearProduit()
  {
    this.store.dispatch(new ClearPanier());
    alert("Votre paiement est effectué");
    this.router.navigateByUrl('/produits/catalogue');
  }

}
