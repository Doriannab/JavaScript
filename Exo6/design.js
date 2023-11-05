//Abstraction

function Employe(noms, age, sexe, salaire){
  this.noms = noms;
  this.age = age;
  this.sexe = sexe;
  this.salaire = salaire;
  const allocation = 70000;
  const primeDeRisque = 100;
  const calculSalaire = function(){
    console.log( `Le salaire final: ${salaire + allocation + primeDeRisque}`);
  } 
  this.infoEmploye = function(){
    console.log(`Noms : ${this.noms}`);
    console.log(`Age : ${this.age}`);
    console.log(`Sexe : ${this.sexe}`);
    console.log(`Salaire : ${this.salaire}`);
    calculSalaire();
  }  
}

//L'instance de cette function
const comp1 = new Employe('Rose Diop', 32, 'F', 175000);
const comp2 = new Employe('Franc Dumont', 30, 'M', 750000);

comp1.infoEmploye();
comp2.infoEmploye();
