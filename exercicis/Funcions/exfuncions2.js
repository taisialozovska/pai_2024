//19.1.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al quadrat.
function quadrat (num) {
    return num*num;
}

//19.2.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al cub. 
function cub(numero) {
    return numero*numero*numero;
}

//19.3.- Crea una funció que rebi dos nombres i retorni el primer nombre elevat al segon.
function elevat (num1,num2) {
    return Math.pow(num1,num2);
}

//19.4.- Crea una funció que donat un valor en milles retorni la seva equivalència en metros.  1 milla = 1852 metros. 
function metres (valor){
    return valor*1852;
}

//19.5.- Crea una funció que, donat un nombre del 0 al 10 retorni una cadena de caràcters amb el nom del nombre donat.  
function numeroText (nombre){
    const noms = [
        "zero", "un", "dos", "tres", "quatre",
        "cinc", "sis", "set", "vuit", "nou", "deu"
    ];

    if (numero >= 0 && numero <= 10) {
        return noms[numero]; 
    } else {
        return "El número no està entre 0 i 10.";
    }
}

//19.6.- Crea una funció que, rebut un nombre de segons retorni una cadena de caràcters on es digui quantes hores minuts i segons són.
function temps(segons){
    let hores = Math.floor(segons/3600);
    let minuts = Math.floor((segons%3600)/60);
    let seg = Math.floor(segons%60);

    return hores + " hores, " + minuts +  " minuts i " + seg + " segons.";
}
//let segons = parseInt(prompt("Introdueix un nombre de segons:"));
//let resultatTemps = temps(segons);
//console.log(resultatTemps);

//19.7.- Crea una funció que, donades les hores treballades en una setmana i el salari brut per hora, calculi el seu salari. 
// Si les hores treballades són més de 40, aquestes hores sobreres, es pagaran un 50% més cares que una hora normal.
function salari(hores,salariBrut){
    let salariFinal = 0;
    let horesExtra = 0;
    if (hores>0 && hores<=40){
        salariFinal = hores*salariBrut;
    }
    else{
       horesExtra = hores - 40;
       salariFinal = hores*salariBrut + horesExtra*(salariBrut + salariBrut*0,5);
    }
    return salariFinal; 
}
//let hores = parseInt(prompt("Introdueix el nombre d'hores treballades:"));
//let salariBrut = parseInt(prompt("Introdueix el salari brut per hora:"));
//let salariResultant = salari(hores,salariBrut);
//console.log (salariResultant);

//19.8.- Fer una funció que, donat un any, retorni si és de traspàs o no. Un any és de traspàs si és divisible per 4 i no per 100, però sí si és divisible per 400. 
// El valor retornat per la funció haurà de ser un valor booleà.
function anyTraspas(any){
    if ((any % 4 === 0 && any % 100 !== 0) || any % 400 === 0 ){
        return true;
    }else{
        return false;
    }
}
//let any = parseInt(prompt("Introdueix un any:"));
//let resultat = anyTraspas(any);
//console.log (resultat);

//19.9.- La funció Math.random() de JavaScript retorna un valor dins del rang [0,1) (0 inclòs, 1 no inclòs). 
// La funció Math.floor(valor) ens retorna valor eliminant els decimals. 
// Fent servir aquestes funcions, crear una funció que donats dos valors min i max ens calculi un nombre aleatori entre min i max, ambdòs inclosos. 
function numAleatori(valorMin, valorMax){
    let nombreAleatori = Math.random();
    let ajustat = valorMin + nombreAleatori * (valorMax - valorMin + 1); //inclou el valor màxim al càlcul
    return Math.floor (ajustat);
}
//const resultat = numAleatori(10, 30); 
//console.log(resultat);

//19.10.- Crea una funció en la que donat un text, indiqui si és o no un palíndrom.
function palindrom (text){
    let textMinusc = text.toLowerCase();
    let textNormalitzat = textMinusc.replace(/[^a-z0-9]/g, ''); //treu tot el que no siguin lletres o números
    let textInvertit = textNormalitzat.split('').reverse().join(''); //Divideix la cadena en un array de caràcters, reverteix l'ordre i torna a unir.
    return textInvertit === textNormalitzat;  
}
//let text = prompt("Introdueix una paraula o frase:");
//let resultat = palindrom(text);
//console.log(resultat);

//19.11.- Crea una funció que rebi una cadena de caràcters i retorni aquesta cadena codificada segons les següents regles:
//Es posaran les paraules en l’ordre invers  
//Els caràcters que conformen les paraules també s’han d’invertir. 
//Les vocals que apareguin s’han de canviar pel seu número equivalent (a=1, e=2, i=3, o=4 i u=5)
function cadenaCodificada(cadena){
    let invertirParaules = cadena.split(' ').reverse();

    let invertirCaracters = [];
    for(let i = 0; i< invertirParaules.length; i++){
        let invertir = invertirParaules[i].split('').reverse().join('');
        invertirCaracters.push(invertir);
    }
    invertirCaracters = invertirCaracters.join(' ');
    //Cada vegada que .replace() troba una vocal, crida la funció function(vocal)
    let resultat = invertirCaracters.replace(/[aeiou]/gi, function(vocal) { //gi vol dir que es global(g), que no nomes agafa la primera que troba; i que es insensitive(i)a majúscules/minúscules
        switch (vocal.toLowerCase()) {
            case 'a': return '1';
            case 'e': return '2';
            case 'i': return '3';
            case 'o': return '4';
            case 'u': return '5';
        }
    });
    return resultat;
}
//let cadena = prompt("Introdueix una frase:");
//let codificada = cadenaCodificada(cadena);
//console.log(codificada);

//19.12.- Crea una funció que rep els tres paràmetres següents: 2 nombres i un dels següents valors "+", "-", "*", "/", "%", "pot" 
// i retorni el resultat de l'operació realitzada. Fes servir la instrucció switch. 
function operacio(num1,num2,operador){
    switch(operador){
        case "+": return num1+num2;
        case "-": return num1-num2;
        case "*": return num1*num2;
        case "/": return num1/num2;
        case "%": return num1%num2;
        case "pot": return num1**num2;
        default: return "Operador no vàlid.";
    }
} 
//let num1 = prompt("Escriu un nombre:");
//let num2 = prompt("Escriu un altre nombre:");
//let operador = prompt("Escriu el tipus d'operador que vols fer servir");
//console.log(operacio(num1,num2,operador));

