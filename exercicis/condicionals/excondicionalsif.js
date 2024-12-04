// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero. 

let numeroNegatiu = parseInt(prompt("Introdueix un número negatiu:"));

if (numeroNegatiu<0) {
    document.write("El número llegit és negatiu");
}

document.getElementById('resposta'). innerHTML = "Això és un altre output"; // això és més convenient que document.write perquè pots escollir on s'escriurà a la pàgina
