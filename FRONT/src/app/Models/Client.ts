export class Utilisateur {
    nom: string;
    prenom: string;
    pays: string;
    ville: string;
    codePostal: string;
    adresse: string;
    tel: string;
    email: string;
    civilite: string;

    constructor() {
        this.nom = "";
        this.prenom = "";
        this.pays = "";
        this.ville = "";
        this.codePostal = "";
        this.adresse = "";
        this.tel = "";
        this.email = "";
        this.civilite = "";
    }
}