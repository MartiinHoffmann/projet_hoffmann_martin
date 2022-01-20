import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../Models/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  API_GETPRODUIT_URL: string = "https://projet-backend-mh.herokuapp.com/api/produit/" as const;
  API_LISTEPRODUITS_URL: string = "https://projet-backend-mh.herokuapp.com/api/listeProduit" as const;

  constructor(private httpClient: HttpClient) { }

  public GetProduitById(idProduit: string) : Observable<Produit> 
  {
    return this.httpClient.get<Produit>(this.API_GETPRODUIT_URL + idProduit);
  }

  public GetAllProduit() : Observable<Array<Produit>>
  {
    return this.httpClient.get<Array<Produit>>(this.API_LISTEPRODUITS_URL);
  }

}
