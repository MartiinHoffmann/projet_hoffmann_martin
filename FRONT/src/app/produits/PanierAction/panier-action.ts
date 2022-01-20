import { Produit } from '../../Models/Produit';

export class AddPanier {
    static readonly type = '[Produit] Add';

    constructor(public payload: Produit) {console.log(payload);}
}

export class DelPanier {
    static readonly type = '[Produit] Del';

    constructor(public payload: Produit) {}
}

export class ClearPanier {
    static readonly type = '[Produit] Clear';

    constructor() {}
}