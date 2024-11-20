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
