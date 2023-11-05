
function Utilisateur(noms, email, ...amis){

    this.noms = noms;
    this.email = email;
    this.amis = amis;
}

function Admin(...params){
    //heritage de proprieté
    Utilisateur.apply(this, params)
}

Utilisateur.prototype.login = function(){
    console.log(`${email} est connecté(e)`);
}

Utilisateur.prototype.logout = function(){
    console.log(`${email} est déconnecté(e)`);
}
// const util1 = new Utilisateur('Jean Tine', 'jean@gmail.com','Daro', 'Victor');
// console.log(util1);
Admin.prototype = Object.create(Utilisateur.prototype);
//function accessible à l'admin
Admin.prototype.supprimerUtilisateur = function(util){
    utilisateurs = utilisateurs.forEach(utilisateur => {
        return utilisateur.email != util.email;
    });
} 

const util1 = new Utilisateur('Anna', 'anna@gmail.com', 'Marie', 'Jeanne' );
const util2 = new Utilisateur('Clarence', 'clarence@gmail.com', 'Alex', 'Roger' );
const util3 = new Utilisateur('Clara', 'clara@gmail.com', 'Alex', 'Claire' );
const admin = new Admin ('Roger', 'roger@gmail.com', 'Albert','Jean');

let utilisateurs = [util1, util2, util2, admin];
console.log(utilisateurs);

let utilisateur = [util2, util2, admin];
admin.supprimerUtilisateur(util2);
console.log(utilisateur);
