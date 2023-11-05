//Factory function
const utilisateur = (noms, email, ...amis) => {
    return{
        noms, email, amis,
        login(){
            console.log(`${email} est connecté(e)`);   
        },
        logout(){
            console.log(`${email} est déconnecté(e)`);
        }
       }
    }

    const util1 = utilisateur('Robert Ba', 'ba@gmail.com', 'Claire', 'Suzanne');
    const util2 = utilisateur('Marie Pores', 'marie@gmail.com', 'Lorinda', 'Louise');
    const util3 = utilisateur('Gilbert Lop', 'lop@gmail.com', 'Clarence', 'Audrey');
    console.log(util1);
    console.log(util2);
    console.log(util3);

    util1.login();
    util1.logout();

    util2.login();
    util2.logout();