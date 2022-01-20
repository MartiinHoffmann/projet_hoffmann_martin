import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueProduitComponent } from './catalogue-produit/catalogue-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { FiltrePipe } from '../Pipes/filtre.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './Panier/panier.component';

const produitRoutes: Routes = [
  {
    path: '',
    children : [
    {
      path: 'catalogue',
      component: CatalogueProduitComponent
    },
    {
      path: 'panier',
      component: PanierComponent
    },
    {
      path: 'detail/:idProduit',
      component: DetailProduitComponent
    }
    ]
  }
];

@NgModule({
  declarations: [
    CatalogueProduitComponent,
    DetailProduitComponent,
    FiltrePipe,
    PanierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(produitRoutes)
  ]
})
export class ProduitsModule { }
