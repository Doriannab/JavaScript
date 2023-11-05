//object literal(incapsulation)
const utilisateur = {
    noms : 'Coly Louis',
    email : 'coly@gmail.com',
    amis : ['Steven', 'Jonathan'],
    login(){
        console.log(`${this.email} est connecté(e)`)
    },
    logout(){
      console.log(`${this.email} est déconnecté(e)`)  
    }
}
console.log(utilisateur);

//Accés aux propriété d'un object
console.log(utilisateur.noms);
console.log(utilisateur.email);
console.log(utilisateur['noms']);
console.log(utilisateur['email']);

utilisateur.noms = 'Blaise Diompy';
utilisateur['email'] = 'blaise@gmail.com';
console.log(utilisateur);