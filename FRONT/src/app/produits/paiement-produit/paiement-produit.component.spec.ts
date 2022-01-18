import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementProduitComponent } from './paiement-produit.component';

describe('PaiementProduitComponent', () => {
  let component: PaiementProduitComponent;
  let fixture: ComponentFixture<PaiementProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
