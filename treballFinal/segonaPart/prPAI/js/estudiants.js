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
    const totalAccidents = obj.length;
    resultats.innerHTML = "Nombre total d'accidents: " + totalAccidents;

}

function exercici02() {
    const resultats = document.getElementById("resultats");
    let accidentsPerDia = {
        "Dilluns" : 0,
        "Dimarts" : 0,
        "Dimecres" : 0,
        "Dijous" : 0,
        "Divendres" : 0,
        "Dissabte" : 0,
        "Diumenge" : 0,
    };
    
    for (let i = 0; i < obj.length; i++) {
        let diaSetmana = obj[i].diaSet;
        if (accidentsPerDia.hasOwnProperty(diaSetmana)) {
            accidentsPerDia[diaSetmana]++;
        }
    }

    let diaAmbMesAccidents = "";
    let maxAccidents = 0;
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
    for (let i = -1; i <= 10; i++) {
        if (i !== 0) {
            accidentsPerDistricte[i] = 0;
        }
    }

    for (let i = 0; i < obj.length; i++) {
        const districte = obj[i].nDist;
        if (accidentsPerDistricte.hasOwnProperty(districte) && districte !== 0) {
            accidentsPerDistricte[districte]++;
        }
    }

    const resultats = document.getElementById("resultats");
    resultats.innerHTML = "";
    const ul = document.createElement("ul");

    for (let i = -1; i <= 10; i++) {
        if (i !== 0) { 
            const li = document.createElement("li");
            let districteNom;
            if (i === -1) {
                districteNom = "Altres";
            } else {
                districteNom = "Districte " + i;
            }
            li.textContent = districteNom + ": " + accidentsPerDistricte[i] + " accidents";
            ul.appendChild(li);
        }
    }
    resultats.appendChild(ul);
}


function exercici04() {
    creaFormulari();

    let selectElement = document.getElementById("districtes");

    function comptaAccidents() {
        let districteSeleccionat = selectElement.value;
        let totalAccidents = 0;

        for (let i = 0; i < obj.length; i++) {
            if (obj[i].districte == districteSeleccionat) {
                totalAccidents++;
            }
        }
        let resultatsDiv = document.getElementById("resultats");
        resultatsDiv.innerHTML = "Al districte " + districteSeleccionat + " s'han registrat " + totalAccidents + " accidents aquest any.";
    }

    selectElement.addEventListener("change", comptaAccidents);
}