import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Produit } from 'src/app/Models/Produit';
import { ProduitService } from 'src/app/Services/produit.service';
import { AddPanier } from '../PanierAction/panier-action';
import { PanierState } from '../PanierAction/panier-state';

@Component({
  selector: 'app-catalogue-produit',
  templateUrl: './catalogue-produit.component.html',
  styleUrls: ['./catalogue-produit.component.css']
})
export class CatalogueProduitComponent implements OnInit {

  recherche='';

  public listProduits?: Array<Produit>;

  constructor(private serviceProduit: ProduitService, private store: Store) { }

  @Select(PanierState.getNbProduits) nbProduits?: number;
  ngOnInit(): void {
    this.serviceProduit.GetAllProduit().subscribe(x => {
      this.listProduits = x;
      console.log(x);
    });
  }

  addProduit(produit: Produit)
  {
    this.store.dispatch(new AddPanier(produit));
  }
}
