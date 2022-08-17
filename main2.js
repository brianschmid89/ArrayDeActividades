


//OPERADOR TERNARIO, AND y OR 

const actividadesGym = {
    nombre: "Crossfit",
    edad: 18
}

const aniosMinimo = (actividadesGym.edad >= 18) ? true : false;

aniosMinimo ? alert("Podes entrenar") : alert("No podes entrenar")

//AND

const actividadesGimnasio = []
if (actividadesGimnasio.length === 0) {
    console.log("No hay actividades!")
}

actividadesGimnasio.length === 0 && console.log("No hay actividades!")

//OR

const actividadGim = {
    nombre: "Spinning",
    precio: 1500
}

const actividadGim2 = null

console.log (actividadGim || "No te alcanza!!")

console.log (actividadGim2 || "No te alcanza!!!")