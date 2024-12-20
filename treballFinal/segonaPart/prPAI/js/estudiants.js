// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:

document.getElementById("exer01").addEventListener("click", exercici01);
document.getElementById("exer02").addEventListener("click", exercici02);
document.getElementById("exer03").addEventListener("click", exercici03);
document.getElementById("exer04").addEventListener("click", exercici04);

// Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
// que ompliu el codi necessari.

function exercici01() {
    const resultats = document.getElementById("resultats");
    const totalAccidents = obj.length;      // Comptem el nombre total d'objectes a l'array 'obj', que representa els accidents
    resultats.innerHTML = "Nombre total d'accidents: " + totalAccidents;

}

function exercici02() {
    const resultats = document.getElementById("resultats");
    let accidentsPerDia = {         // Inicialitzem un objecte per comptar els accidents per dia de la setmana
        "Dilluns" : 0,
        "Dimarts" : 0,
        "Dimecres" : 0,
        "Dijous" : 0,
        "Divendres" : 0,
        "Dissabte" : 0,
        "Diumenge" : 0,
    };

    // Comptem els accidents per dia de la setmana
    for (let i = 0; i < obj.length; i++) {
        let diaSetmana = obj[i].diaSet;                     // Obtenim el dia de la setmana de cada accident
        if (accidentsPerDia.hasOwnProperty(diaSetmana)) {   // Si el dia està a l'objecte
            accidentsPerDia[diaSetmana]++;                  // Augmentem el comptador per aquest dia
        }
    }

    let diaAmbMesAccidents = "";
    let maxAccidents = 0;
    // Busquem el dia amb més accidents
    for (let dia in accidentsPerDia) {
        if (accidentsPerDia[dia] > maxAccidents) {
            maxAccidents = accidentsPerDia[dia];
            diaAmbMesAccidents = dia;
        }
    }
    resultats.innerHTML = "El dia de la setmana amb més accidents és: " 
    + diaAmbMesAccidents + " amb " + maxAccidents + " accidents.";
}


function exercici03() {
    const accidentsPerDistricte = {};
    // Inicialitzem el comptador per tots els districtes (de -1 a 10, excepte 0)
    for (let i = -1; i <= 10; i++) {
        if (i !== 0) {
            accidentsPerDistricte[i] = 0;
        }
    }

    // Comptem els accidents per districte
    for (let i = 0; i < obj.length; i++) {
        const districte = obj[i].nDist;     // Obtenim el districte de cada accident
        if (accidentsPerDistricte.hasOwnProperty(districte) && districte !== 0) {
            accidentsPerDistricte[districte]++;     // Incrementem el comptador d'accidents per aquest districte
        }
    }

    const resultats = document.getElementById("resultats");
    resultats.innerHTML = "";
    const ul = document.createElement("ul");    // Creem una llista per mostrar els resultats

    for (let i = -1; i <= 10; i++) {
        if (i !== 0) {      // Ignorem el districte 0
            const li = document.createElement("li");
            let districteNom;
            if (i === -1) {
                districteNom = "Altres";    // Per a districte -1, anomenem "Altres"
            } else {
                districteNom = "Districte " + i;    // Nom per als altres districtes
            }
            li.textContent = districteNom + ": " + accidentsPerDistricte[i] + " accidents.";
            ul.appendChild(li); // Afegim l'element a la llista
        }
    }
    resultats.appendChild(ul);  // Afegim la llista al DOM
}


function exercici04() {
    creaFormulari();

    let selectElement = document.getElementById("districtes");

    // Funció que compta els accidents en el districte seleccionat
    function comptaAccidents() {
        let districteSeleccionat = selectElement.value; // Obtenim el districte seleccionat
        let totalAccidents = 0; // Inicialitzem el comptador d'accidents per aquest districte

        // Comptem els accidents al districte seleccionat
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].districte == districteSeleccionat) { // Si l'accident és al districte seleccionat
                totalAccidents++;   // Augmentem el comptador
            }
        }
        let resultats = document.getElementById("resultats");
        resultats.innerHTML = "Al districte " + districteSeleccionat + " s'han registrat " + totalAccidents + " accidents aquest any.";
    }

    selectElement.addEventListener("change", comptaAccidents);  // Afegim un esdeveniment per canviar el districte i actualitzar el comptador
}