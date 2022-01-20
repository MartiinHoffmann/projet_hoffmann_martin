import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from './produits/PanierAction/panier-state';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
{
  path: 'clients',
  loadChildren: () => import('src/app/clients/clients.module').then((m) => m.ClientsModule)
},
{
  path: 'produits',
  loadChildren: () => import('src/app/produits/produits.module').then((m) => m.ProduitsModule)
},
{
  path: '',
  component: AccueilComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([PanierState]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
