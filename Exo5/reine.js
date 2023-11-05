function utilisateur(noms, email, ...amis){
    this.noms = noms;
    this.email = email;
    this.amis = amis;
    this.login = function(){
        console.log(`$(email) est connecté(e)`);
    }
    this.logout = function(){
        console.log(`$(email) est deconnecté(e)`);
    }
}

//instance
const util1 = new utilisateur('Louise Diompy', 'louise@gmail.com', 'Mamie', 'Mor');
const util2 = new utilisateur('Louis Dioh', 'louis@gmail.com', 'Maurice', 'Gass');
const util3 = new utilisateur('Dior Tine', 'dior@gmail.com', 'Luc', 'Lari');
const util4 = new utilisateur('Mor Ciss', 'mor@gmail.com', 'Sophie', 'Simone');

console.log(util1);
console.log(util2);
console.log(util3);
console.log(util4);

//Accés aux methodes;
util1.login();
util1.logout();

util2.login();
util2.logout();