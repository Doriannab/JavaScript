//Creation utilisateur1
const nomsUtil1 = 'Coly, Albert';
const emailUtil1 = 'albert@gmail.com';
const amisUtil1 = 'Marie, Angie';
console.log('Nom : ${emailUtil1}');
console.log('Email : ${nomsUtil1}');
console.log('Amis : ${amisUtil1}');
console.log('');

//Creation utilisateur2
const nomsUtil2 = 'Faye, Anna';
const emailUtil2 = 'anna@gmail.com';
const amisUtil2 = 'Alex, Antoine';
console.log('Nom : ${emailUtil2}');
console.log('Email : ${nomsUtil2}');
console.log('Amis : ${amisUtil2}');
console.log('');

//Creation utilisateur3
const nomsUtil3 = 'Tine, Pierre';
const emailUtil3 = 'pierre@gmail.com';
const amisUtil13 = 'Marcel, Lari';
console.log('Nom : ${emailUtil3}');
console.log('Email : ${nomsUtil3}');
console.log('Amis : ${amisUtil3}');
console.log('');

//function
function login(email){
    console.log(`${email} est connecté(e)`);
}

function logout(email){
    console.log(`${email} est deconnecté(e)`)
}
login(emailUtil1);
logout(emailUtil1);
login(emailUtil2);
login(emailUtil3);