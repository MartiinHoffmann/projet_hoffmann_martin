import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  API_GETCLIENT_URL: string = "https://projet-backend-mh.herokuapp.com/api/detailClient/" as const;
  API_AUTHCLIENT_URL: string = "https://projet-backend-mh.herokuapp.com/api/login" as const;
  API_CREATECLIENT_URL: string = "https://projet-backend-mh.herokuapp.com/api/inscription" as const;

  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  public GetClientById(idClient: string) : Observable<Client>
  {
    return this.httpClient.get<Client>(this.API_GETCLIENT_URL + idClient);
  }

  public Inscription(client: Client) : Observable<string>
  {
    let data = `nom=${client.nom}&prenom=${client.prenom}&ville=${client.ville}&codePostal=${client.codePostal}&tel=${client.tel}&email=${client.email}&civilite=${client.civilite}&login=${client.login}&password=${client.password}`;
    console.log(data);
    return this.httpClient.post<string>(this.API_CREATECLIENT_URL, data, this.httpOptions);
  }

  public Connexion(client: Client) : Observable<Client>
  {
    let data = `login=${client.login}&password=${client.password}`;
    console.log(data);
    return this.httpClient.post<Client>(this.API_AUTHCLIENT_URL, data, this.httpOptions);
  }


}
