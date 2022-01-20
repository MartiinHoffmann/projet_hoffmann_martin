import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/Client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-connexion-client',
  templateUrl: './connexion-client.component.html',
  styleUrls: ['./connexion-client.component.css']
})
export class ConnexionClientComponent implements OnInit {
  public client:Client = new Client();


  //METTRE LES VALIDATORS
  clientForm = new FormGroup({
    login:  new FormControl("",[Validators.required]),
    password:  new FormControl("",[Validators.required])
  });

  onFormSubmit(): void {
    if(this.clientForm.invalid)
    {
      alert("Le formulaire est invalide, attention aux valeurs !");
      return;
    }
    this.client.login = this.clientForm.get('login')!.value;
    this.client.password = this.clientForm.get('password')!.value;

    console.log('Connexion du client : ' + this.client.nom);

    this.serviceClient.Connexion(this.client).subscribe(
      ()=>{
        this.router.navigateByUrl('/produits/catalogue');
        console.log("Connexion REUSSIE");
      },
      (error)=>{
        alert("Erreur lors de la connexion, votre login ou mot de passe est incorrect");
        console.log("erreur" + error);
      }
    );
  }

  
  constructor(private serviceClient: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

}
