import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddPanier, ClearPanier, DelPanier } from "./panier-action";
import { PanierStateModel } from "./panier-state-model";

@State<PanierStateModel>({
    name: 'produits',
    defaults: {
        produits: []
    }
})

@Injectable()
export class PanierState{
    @Selector()
    static getNbProduits(state: PanierStateModel)
    {
        return state.produits.length;
    }
    @Selector()
    static getListProduits(state: PanierStateModel)
    {
        return state.produits;
    }

    @Action(AddPanier)
    add(
        { getState, patchState }: StateContext<PanierStateModel>,
        { payload }: AddPanier
        ){
            console.log(payload);
            const state = getState();
            let tmpProducts = state.produits;
            tmpProducts.push(payload);
            patchState({
                produits: tmpProducts
            });
            console.log(state.produits);
        }

        @Action(DelPanier)
    del(
        { getState, patchState }: StateContext<PanierStateModel>,
        { payload }: DelPanier
        ) {
            const state = getState();
            let tmpProducts = state.produits;
            tmpProducts.splice(tmpProducts.indexOf(payload), 1);
            patchState({
                produits: tmpProducts
            });
    }

        @Action(ClearPanier)
    clear(
        { getState, patchState }: StateContext<PanierStateModel>
        ) {
            const state = getState();
            let tmpProducts = state.produits;
            tmpProducts = [];
            patchState({
                produits: tmpProducts
            });
            console.log(state.produits);
        }
}