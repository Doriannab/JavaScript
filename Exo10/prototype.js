
function Utilisateur(noms, email, ...amis){

        this.noms = noms;
        this.email = email;
        this.amis = amis;
    }

    Utilisateur.prototype.login = function(){
        console.log(`${email} est connecté(e)`);
    }

    Utilisateur.prototype.logout = function(){
        console.log(`${email} est déconnecté(e)`);
    }
    const util1 = new Utilisateur('Jean Tine', 'jean@gmail.com','Daro', 'Victor');
    console.log(util1); 
