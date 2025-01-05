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

//21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de 
//la suma, la resta, la multiplicació i la divisió dels dos valors introduïts. 
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

//21.8.- Fes un programa que escrigui a la consola la suma tots els valors emmagatzemats a la taula.
let suma = 0; 
for (let i=0; i<altraTaula.length; i++){
    suma+=altraTaula[i];
}
console.log(suma);

//21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els valors de la taula, tot sumant-los 25 
//(així les tres primeres posicions de la nova taula emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.
let novaTaula =[];
for (let i=0; i<altraTaula.length; i++){
    novaTaula[i] = altraTaula[i]+25;
}
console.log(novaTaula);

//21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula i l’escrigui a la consola 
//(la mitjana es calcula sumant tots els valors i dividint pel nombre de valors).
let sumaTotal = 0; 
for (let i=0; i<altraTaula.length; i++){
    sumaTotal+=altraTaula[i];
}
mitjana = suma/altraTaula.length;
console.log(mitjana);

//21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més petit de la taula.
let max = altraTaula[0];
let min = altraTaula[0];
for (let i = 0; i < altraTaula.length; i++) {
    if (altraTaula[i] > max) {
        max = altraTaula[i];
    }
    if (altraTaula[i] < min) {
        min = altraTaula[i];
    }
}
console.log("El valor més gran de la taula és: " + max);
console.log("El valor més petit de la taula és: " + min);

//21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola.
let taulaNova = [];
n = 0;
for (let i = 0; i < altraTaula.length; i++){
    if (altraTaula[i]%2==0){
        taulaNova[n] = altraTaula[i];
        n++;
    }
}
console.log(taulaNova);

//21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i escrigui a la consola quants cops apareix aquest valor a la taula.
valor = prompt("Escriu un número per calcular quants cops apareix:" );
numVegades = 0;
for (let i = 0; i < altraTaula.length; i++){
    if (altraTaula[i] == valor){
        numVegades += 1;
    }
}
console.log("El número " + valor + " apareix " + numVegades + " cops.");

//21.14.- Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el mateix número d’elements i, si és així, 
//crei una nova taula que contingui la suma de cada element que es trobi a la mateixa posició als dos arrys.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let nouArr = [];
if (arr1.length == arr2.length){
    for (let i = 0; i < arr1.length; i++){
        nouArr[i] = arr1[i] + arr2[i];
    } 
}
console.log(nouArr);

//21.15.- Fes un programa que, donats una taula amb números, guardi a una nova taula els valors de la primera però donant-li la volta.
let taula15 = [1,2,3,4,5];
let taulaInvertida = taula15.reverse();
console.log (taulaInvertida);