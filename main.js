const seccionActividades = document.getElementById("divActividades");
const compras = document.getElementById("compras");
const iconoCarrito = document.getElementById("carrito");
const btnTest = document.getElementsByClassName('botonTurnos');
const btnEnviarConstancia = document.querySelector("#btnDeTurnos")
const cantidadDeactividades = 4;

const definirActividad = (mensaje, precio) => {
  console.log(mensaje);
  let mensajeCompra = document.createElement("p");
  mensajeCompra.innerHTML = mensaje;
  let totalPrecio = document.createElement("p");
  totalPrecio.innerHTML = `El total es de $${precio} por mes`;
  compras.append(mensajeCompra);
  compras.append(totalPrecio);
};

function evaluarActividad(actividad, cantidad) {
  let mensaje = "";
  let precio = 0;
  switch (actividad) {
    case 1:
      precio = 2000;
      mensaje = "Seleccionaste Crossfit";
      break;
    case 2:
      precio = 2000;
      mensaje = "Seleccionaste Functional";
      break;
    case 3:
      precio = 1800;
      mensaje = "Seleccionaste Spinning";
      break;
    case 4:
      precio = 2300;
      mensaje = "Seleccionaste Gimnasio";
      break;
    default:
      mensaje = "No seleccionaste una actividad";
  }
  definirActividad(mensaje, precio);
}

const mostrarTotalActividades = (cantidad) => {
  let totalActividades = document.createElement("div");
  totalActividades.innerHTML = cantidad;
  iconoCarrito.append(totalActividades);
};

const contratarActividad = () => {
    const actividad = Number(
        prompt(`Bienvenido a SportClub. Que actividad te gustaria realizar?

    1-Crossfit - $2000
    2-Functional - $2000
    3-Spinning - $1800
    4-Gimnasio - $2300
       `)
  );

const cantidad = Number(prompt(`Ingresa cuantos dias queres venir`));

  mostrarTotalActividades(cantidad);
  evaluarActividad(actividad, cantidad);
};

//ACTIVIDADES CON IMAGENES

/* const mostrarActividad = () => {
  
  let contador = 0;
  while (contador < cantidadDeactividades) {
        
    seccionActividades.innerHTML += (`
        <div class="card" style="width: 18rem;">
            <img src="./img/imagen${contador}.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Actividad${contador}</h5>
            <a href="" class="btn btn-primary">Reserva</a>
            </div>
        </div>    
        `);
    contador++;
  }
};  */



//ARRAY ACTIVIDADES 

let actividadesGimnasio = [
  { id:0, nombre:"Crossfit", img:"./img/imagen0.jpeg", precio: "2000"},
  { id:1, nombre:"Spinning", img:"./img/imagen1.jpeg" , precio: "2000"},
  { id:2, nombre:"Functional", img:"./img/imagen2.jpeg", precio: "1800"},
  { id:3, nombre:"Gimnasio", img:"./img/imagen3.jpeg", precio: "2300"}
];

console.log(JSON.stringify(actividadesGimnasio));



const mostrarActividad = (activity) => {
  activity.forEach(actividad => {
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${actividad.img}" class="card-img-top" alt=".">
      <div class="card-body">
      <h3 class="card-title">${actividad.nombre}</h3>
      <p class="card-text">Precio:$ ${actividad.precio}</p>
      <button class="btn btn-primary" id=boton${actividad.id}> Reservar actividad</button>
      </div>
    </div>`
  })
};


let nombreActividades = ["Crossfit", "Spinning", "Functional", "Gimnasio"];
let activity = {};
let activityArray = [];

for (let i = 0; i < 2; i++) {
  activity.id = i + 1;
  activity.nombre = nombreActividades[i];
  activityArray.push({ ...activity });
}
console.log(JSON.stringify(activityArray));

// STORAGE Y JSON

btnEnviarConstancia.addEventListener("click", ()=> {
  let nombreSolicitante = document.getElementById("defaultContactFormName").value;
  let emailSolicitante = document.getElementById("defaultContactFormEmail").value;
  let dniSolicitante = document.getElementById("defaultContactFormDni").value;
  const datosSolicitante = {
    "Nombre": nombreSolicitante,
    "Email": emailSolicitante,
    "DNI": dniSolicitante
  }
  sessionStorage.setItem("datosSolicitante", JSON.stringify(datosSolicitante));
  Swal.fire({
    icon: 'success',
    title: 'Tus datos se registraron correctamente',
    text: 'En los siguientes minutos te llegara un mail',
    showConfirmButton: false,
    timer: 3000
    
})
})

//RESERVA TURNOS
/* const reservaTurno = () => {
  for(let i = 0; i < btnTest.length; i++){
    btnTest[i].addEventListener('click', function(e){
      alert('Reservado. Gracias por elegirnos!')
    })
  }
}
 */

mostrarActividad();
contratarActividad();
//reservaTurno();


// ADD EVENTOS
function saludar (){
  alert('Seguinos en nuestras redes sociales!!!!')
}

const btnSaludar = document.getElementById('enviarSaludo');
btnSaludar.addEventListener("click", saludar);
