import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { ConnexionClientComponent } from './connexion-client/connexion-client.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const clientRoutes: Routes = [
  {
    path: '',
    children : [
    {
      path: 'inscriptionClient',
      component: InscriptionClientComponent
    },
    {
      path: 'connexionClient',
      component: ConnexionClientComponent
    }
    ]
  }
];

@NgModule({
  declarations: [
    InscriptionClientComponent,
    ConnexionClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(clientRoutes)
  ]
})
export class ClientsModule { }
