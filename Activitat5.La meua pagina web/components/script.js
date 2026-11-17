/* Fitxer extern components/script.js - Activitat 5 */

/* Exercici 1: Carregar la imatge seleccionada en mida gran i actualitzar la fitxa */
function mostrarPersonatge(rutaImatge, nomPersonatge, descripcioPersonatge) {
    var visorImg = document.getElementById("imatge-ampliada");
    var visorTitol = document.getElementById("nom-personatge");
    var visorDesc = document.getElementById("desc-personatge");

    if (visorImg) {
        visorImg.src = rutaImatge;
        visorImg.alt = nomPersonatge;
    }
    if (visorTitol) {
        visorTitol.textContent = nomPersonatge;
    }
    if (visorDesc) {
        visorDesc.textContent = descripcioPersonatge;
    }
}

/* Exercici 2: Esdeveniments onmouseover i onmouseout */
function ressaltarSeccio(element) {
    element.style.backgroundColor = "#1e3a8a";
    element.style.color = "#ffffff";
    var paragrafOcult = document.getElementById("text-ocult");
    if (paragrafOcult) {
        paragrafOcult.style.display = "block";
    }
}

function restaurarSeccio(element) {
    element.style.backgroundColor = "#e0f2fe";
    element.style.color = "#0f172a";
    var paragrafOcult = document.getElementById("text-ocult");
    if (paragrafOcult) {
        paragrafOcult.style.display = "none";
    }
}