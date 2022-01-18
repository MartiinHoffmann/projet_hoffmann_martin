import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PanierComponent } from './panier/panier.component';
import { PaiementComponent } from './paiement/paiement.component';
import { CatalogueProduitComponent } from './catalogue-produit/catalogue-produit.component';
import { PanierProduitComponent } from './panier-produit/panier-produit.component';
import { PaiementProduitComponent } from './paiement-produit/paiement-produit.component';



@NgModule({
  declarations: [
    CatalogueComponent,
    PanierComponent,
    PaiementComponent,
    CatalogueProduitComponent,
    PanierProduitComponent,
    PaiementProduitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProduitsModule { }
