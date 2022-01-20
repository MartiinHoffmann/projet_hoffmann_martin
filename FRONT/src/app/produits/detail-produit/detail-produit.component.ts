import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/Models/Produit';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  public produit!: Produit;

  constructor(private route: ActivatedRoute, private serviceProduit: ProduitService) { }

  ngOnInit(): void {
    let idProduit = this.route.snapshot.paramMap.get('idProduit');
    if(idProduit)
    {
      this.serviceProduit.GetProduitById(idProduit).subscribe(x => {
        this.produit = x;
        console.log(x);
      });
    }
  }

}
