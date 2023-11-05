//Les concepts de Class
class Utilisateur{
    constructor(noms, email, ...amis){
        this.noms = noms;
        this.email = email;
        this.amis = amis;
    }
    login(){
        console.log(`${this.email} est connecté(e)`);
    }
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

//Heritages des proprietés et des fonctions
class Admin extends Utilisateur {
    supprimerUtilisateur(Util){
        utilisateurs = utilisateurs.filter(utilisateur => {
            return utilisateur.email != Util.email;
        });
    }

}
const Util1 = new Utilisateur('Anna', 'anna@gmail.com', 'Marie', 'Jeanne' );
const Util2 = new Utilisateur('Clarence', 'clarence@gmail.com', 'Alex', 'Roger' );
const admin = new Admin ('Roger', 'roger@gmail.com', 'Albert','Jean');

let utilisateurs = [Util1, Util2, admin];
console.log(utilisateurs);

admin.supprimerUtilisateur(Util1);
console.log(utilisateurs);