//21.1.- Fes un programa que faci el següent:
//Defineix una variable de tipus taula, buida. 
//Afegeixi el valor “Hola” a la posició 0. 
//Afegeixi el valor “Adeu” a la posició 1.
//Escrigui a la consola el contingut de la taula
let arr = [];
arr[0] = "Hola";
arr[1] = "Adeu";
console.log(arr);

//21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log()) per a fer el següent: 
//Afegeixi el valor “Nom” a la posició 2 de la taula.
//Escrigui a la consola el contingut de la taula.
//Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “ 
//Escrigui a la consola el contingut de la taula.
arr[2] = "Nom";
console.log(arr);
arr[1] = ",";
console.log(arr);

//21.3.- Fes un programa que faci el següent: 
//Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73]
//Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula. 
//Guardi a la posició 6 de la taula la suma dels elements 
//Escrigui a la consola el contingut de la taula. Què passa a la posició 5?
let taula = [23,45,98,73];
console.log(taula[0]+taula[2]);
taula[6] = taula[0] + taula[1] + taula[2] + taula[3];
console.log(taula);

//21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola.
let numero = parseInt(prompt("Escriu un número"));
let numeros = [numero*2,numero*3];
console.log(numeros);

//21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts. 
let num1 = parseInt(prompt("Escriu un número"));
let num2 = parseInt(prompt("Escriu un altre número"));
let operacions =[num1+num2, num1-num2, num1*num2, num1/num2];
console.log(operacions);

//21.6.- Donada aquesta taula:
let taulaExercici6 = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició de la taula.
console.log(taulaExercici6[0],taulaExercici6[taulaExercici6.length - 1]);

//Donada la definició d’aquesta taula: 
let altraTaula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la taula, un a un. 
for (let i=0; i<altraTaula.length; i++) {
    console.log(altraTaula[i]);
}
