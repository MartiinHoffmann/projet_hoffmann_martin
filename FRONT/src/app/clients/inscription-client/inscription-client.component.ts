import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.css']
})
export class InscriptionClientComponent implements OnInit {

  clientForm = new FormGroup({
    nom:  new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z]*")]),
    prenom:  new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z]*")]),
    adresse:  new FormControl("",[Validators.required, Validators.pattern("")]),
    ville:  new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z]*")]),
    cp:  new FormControl("",[Validators.required, Validators.pattern("[0-9]{5}")]),
    tel:  new FormControl("",[Validators.required, Validators.pattern("[0-9]{10}")]),
    email:  new FormControl("",[Validators.required, Validators.email]),
    civilite:  new FormControl(""),
    login:  new FormControl("",[Validators.required, Validators.pattern("[0-9a-zA-Z]*")]),
    password:  new FormControl("",[Validators.required, Validators.pattern(".{10,}")])
  });


  onFormSubmit(): void {
    if(this.clientForm.status === 'INVALID')
    {
      alert("Le formulaire est invalide, attention aux valeurs !");
      return;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
