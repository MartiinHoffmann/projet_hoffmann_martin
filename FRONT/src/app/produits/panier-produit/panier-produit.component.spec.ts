import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierProduitComponent } from './panier-produit.component';

describe('PanierProduitComponent', () => {
  let component: PanierProduitComponent;
  let fixture: ComponentFixture<PanierProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
