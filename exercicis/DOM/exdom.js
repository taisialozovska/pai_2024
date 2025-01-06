/****** Exercici 5.1 ******/
// a.    Número d'enllaços que hi ha a la pàgina
function e51a() {
    alert("Número d'enllaços:" + document.links.length);
  }

  // b.    Adreça (URL) del penúltim enllaç
  function e51b() {
    alert("Adreça del penúltim enllaç:" + document.links[document.links.length-2].href);
  }
  
  //c.    Numero d'enllaços que ho fan a http://www.uab.cat
  function e51c() {
    let comptador = 0;
    for(let i = 0; i<document.links.length; i++){
        if (document.links[i].href == "http://www.uab.cat/" || document.links[i].href == "http://uab.cat/"){
            comptador++;
        }
    }
    alert("Hi ha " + comptador + " enllaços que apunten a http://www.uab.cat");
  }
  
  //d.    Número d'enllaços al tercer paràgraf.
  function e51d() {
    let paragraf = document.getElementsByTagName("p");
    let enllaços = paragraf[2].getElementsByTagName("a");
    alert("Número d'enllaços al terecer paràgraf: " + enllaços.length);
  }

  /****** Exercici 5.2 ******/
  // a. Al final dels paràgrafs existents.
  function e52a() {
    let nouParagraf = document.createElement("p");
    let contingut = document.createTextNode("Hola món!");
    nouParagraf.appendChild(contingut);
    document.body.appendChild(nouParagraf);
  }
  // b. Entre el segon i el tercer paràgraf.
  function e52b() {
    let nouParagraf = document.createElement("p");
    let contingut = document.createTextNode("Hola món!");
    nouParagraf.appendChild(contingut);
    const tercerParagraf = document.querySelectorAll("p")[2];
    tercerParagraf.parentNode.insertBefore(nouParagraf,tercerParagraf);
  }
  
  /****** Exercici 5.3 ******/
  // Afegir "Salve Mundi!" a la llista en penúltima posició.
  function e53a() {
    //Creació de l'element
    let nouItem = document.createElement("li");
    let contingut = document.createTextNode("Salve Mundi!");
    nouItem.appendChild(contingut);
    //Afegir-lo a la llista que tinc
    let llista = document.getElementById("llista");
    let elements = llista.getElementsByTagName("li");     // Obtenir tots els elements "li"
    let penultimaPosicio = elements[elements.length - 1]; // Trobar la penúltima posició
    llista.insertBefore(nouItem, penultimaPosicio);
  }
  // Canviar l'estil de la llista
  function e53b() {
    let llista = document.getElementById("llista");
    llista.style.listStyleType = "none";
  }
  
  /****** Exercici 5.4 ******/
  // Amagar el 2on paràgraf
  function e54() {
    const segonParagraf = document.querySelectorAll("p")[1];
    let boto = document.getElementById("mostraAmaga");
    if (segonParagraf.style.display === "none"){
      segonParagraf.style.display = "block";
      boto.textContent = "Amagar paràgraf";
    }else{
      segonParagraf.style.display = "none";
      boto.textContent = "Mostrar paràgraf";
    }
  }