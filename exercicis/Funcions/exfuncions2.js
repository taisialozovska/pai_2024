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

