// Polymorphism

class User{
    constructor(noms){
        this.noms = noms;
    }


    login(){
        console.log(`${this.noms} connecté en tant qu'utilisateur`);
    }
}

class Admin extends User{
    login(){
        super.login();
        console.log(`${this.noms} connecté en tant qu'admin`);
    }
}
const user1 = new User('Jean');
const admin = new Admin('Jean');

user1.login();
admin.login();
console.log(user1);