//Exercici 3.1
//Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció. 
function parell(nombre) {
    let resultat = "";
    if (nombre % 2 === 0) {
        resultat = "El nombre és parell";
    } else {
        resultat = "El nombre és senar";
    }
    return resultat;
}
console.log(parell(4));
console.log(parell(7));

//Exercici 3.2
//Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és. 
function anyTraspas(any) {
    let esTraspas = false;
    if (any % 4 === 0) {
        if (any % 100 === 0 && any % 400 !== 0) {
        esTraspas = false;
        } else {
            esTraspas = true;
        }
    }
    return esTraspas;
}
console.log(anyTraspas(2014));
console.log(anyTraspas(2024));

//Exercici 3.3
//Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.
function sumatori(n) {
    let suma = 0;
    for (let i = 1; i<=n; i++){
        suma += 1/(i*i);
    }
    return suma;
}
console.log(sumatori(5));

//Exercici 3.4
//Feu una funció que calculi la nota final d'un alumne. L'script ha de rebre per teclat el següent:  Nota final d’avaluació continuada, Nota de pràctiques i Nota d’examen, i es mostrarà per pantalla la nota final en base a les formules donades.
let notaAc = parseInt(prompt("Escriu la teva nota de l'avaluació continuada:"));
let notaPrac = parseInt(prompt("Escriu la teva nota de pràctiques:"));
let notaExamen = parseInt(prompt("Escriu la teva nota de l'examen:"));
function notaFinal(notaAc,notaPrac,notaExamen){
    let nota = 0;
    let notaLLetra = "";
    if (notaAc>=5){
        nota = 0.2*notaAc + 0.4*notaPrac + 0.4*notaExamen;
    }else {
        nota = 0.4*notaPrac + 0.6*notaExamen;
    }
    if (nota<5){
        notaLLetra = "D";
    } else if (nota>=5 && nota<6.5){
        notaLLetra = "C";
    } else if (nota>=6.5 && nota<8){
        notaLLetra = "B";
    } else if (nota>= 8 && nota<10){
        notaLLetra = "A";
    } else {
        notaLLetra = "H";
    }
return nota;
}
console.log (notaFinal(notaAc,notaPrac,notaExamen));

//Exercici 3.5
//necessitem una funció que, donada una frase, ens retorni el número de paraules de 5 caràcters que té.
function paraules5Lletres (relat){
    let comptadorParaules = 0;
    let caracters = 0;
    let i = 0;
    while (relat[i] !== "."){
        if(relat[i] == " "){
            if (caracters === 5){
                comptadorParaules++;
            }
        caracters = 0;
        }else if (relat[i] !== ","){
            caracters++;
            }
        i++;
        }
    if (caracters === 5){
        comptadorParaules++;
    }
    return comptadorParaules;
}

//Exercici 3.6
// A partir de l’experiència del concurs anterior hem decidir fer un concurs semblant cada setmana. Però cada setmana volem comptar paraules amb 
// diferents números de lletres. Així aquesta setmana seran paraules de 7 lletres, la setmana vinent de 4 i l’altre de 3. 
// Què cal modificar a la funció per a que puguem fer servir la mateixa funció totes les setmanes?

//cal afegir un paràmetre a la funció que obtingui el número de lletres que volguem, per exemple numLletres, i el substituïm allà on posi 5.
function paraules5Lletres (relat, numLletres){
    let comptadorParaules = 0;
    let caracters = 0;
    let i = 0;
    while (relat[i] !== "."){
        if(relat[i] == " "){
            if (caracters === numLletres){
                comptadorParaules++;
            }
        caracters = 0;
        }else if (relat[i] !== ","){
            caracters++;
            }
        i++;
        }
    if (caracters === numLletres){
        comptadorParaules++;
    }
    return comptadorParaules;
}

//Exercici 3.7 
//fer una funció que, donada una frase, ens retorni a una taula quantes paraules hi ha amb 1, 2, 3, 4, 5, 6 o 7 lletres.
function numParaules (frase) {
    const recompteParaules = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0
    };
    let lletres = 0;
    let i = 0;

    while (i < frase.length && frase[i] !== ".") {
        if (frase[i] === " " || frase[i] === "," || frase[i] === "!" || frase[i] === "?") {
            if (lletres >= 1 && lletres <= 7) {
                recompteParaules[lletres]++;
            }
            lletres = 0;
        }else if (/[a-zA-ZÀ-ÿ]/.test(frase[i])) {
            lletres++;
        }
        i++;
    }
    return recompteParaules;
}