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

const Util1 = new Utilisateur('Anna', 'anna@gmail.com', 'Marie', 'Jeanne' );
const Util2 = new Utilisateur('Clarence', 'clarence@gmail.com', 'Alex', 'Roger' );

console.log(Util1);
console.log(Util2);
Util1.login();
Util1.logout();

Util2.login();
Util2.logout();