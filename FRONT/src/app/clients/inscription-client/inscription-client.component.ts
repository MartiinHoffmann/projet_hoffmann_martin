import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/Client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.css']
})
export class InscriptionClientComponent implements OnInit {

  public client:Client = new Client();


  //METTRE LES VALIDATORS
  clientForm = new FormGroup({
    nom:  new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z]*")]),
    prenom:  new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z]*")]),
    adresse:  new FormControl("",[Validators.required]),
    ville:  new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z]*")]),
    cp:  new FormControl("",[Validators.required, Validators.pattern("[0-9]{5}")]),
    tel:  new FormControl("",[Validators.required, Validators.pattern("[0-9]{10}")]),
    email:  new FormControl("",[Validators.required, Validators.email]),
    civilite:  new FormControl(""),
    login:  new FormControl("",[Validators.required]),
    password:  new FormControl("",[Validators.required])
  });


  onFormSubmit(): void {
    if(this.clientForm.invalid)
    {
      alert("Le formulaire est invalide, attention aux valeurs !");
      return;
    }
    this.client.nom = this.clientForm.get('nom')!.value;
    this.client.prenom = this.clientForm.get('prenom')!.value;
    this.client.adresse = this.clientForm.get('adresse')!.value;
    this.client.ville = this.clientForm.get('ville')!.value;
    this.client.codePostal = this.clientForm.get('cp')!.value;
    this.client.tel = this.clientForm.get('tel')!.value;
    this.client.email = this.clientForm.get('email')!.value;
    this.client.civilite = this.clientForm.get('civilite')!.value;
    this.client.login = this.clientForm.get('login')!.value;
    this.client.password = this.clientForm.get('password')!.value;

    console.log('Creation du client : ' + this.client.nom);

    this.serviceClient.Inscription(this.client).subscribe(
      ()=>{
        this.router.navigateByUrl('/clients/connexionClient');
        console.log("Inscription REUSSIE");
      },
      (error)=>{
        alert("Erreur lors de l'inscription");
        console.log("erreur" + error);
      }
    );
  }

  constructor(private serviceClient: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

}
