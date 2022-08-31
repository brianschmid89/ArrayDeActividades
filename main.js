const seccionActividades = document.getElementById("divActividades");
const compras = document.getElementById("compras");
const iconoCarrito = document.getElementById("carrito");
const btnTest = document.getElementsByClassName('botonTurnos');
const btnEnviarConstancia = document.getElementById("btnDeTurnos");
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

/* const contratarActividad = () => {
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
 */


//ARRAY ACTIVIDADES 

let actividadesGimnasio = [
  { id:0, nombre:"Crossfit", img:"./img/imagen0.jpeg", precio: "2000"},
  { id:1, nombre:"Spinning", img:"./img/imagen1.jpeg" , precio: "2000"},
  { id:2, nombre:"Functional", img:"./img/imagen2.jpeg", precio: "1800"},
  { id:3, nombre:"Gimnasio", img:"./img/imagen3.jpeg", precio: "2300"}
];

console.log(JSON.stringify(actividadesGimnasio));



const mostrarActividad = (activity) => {
  actividadesGimnasio.forEach(actividad => {
    seccionActividades.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${actividad.img}" class="card-img-top" alt=".">
      <div class="card-body">
      <h3 class="card-title">${actividad.nombre}</h3>
      <p class="card-text">Precio:$ ${actividad.precio}</p>
      </div>
      <button class="btn btn-primary botonReserva" onclick="mostrarAlerta()" >Reserva ${actividad.nombre}</button>
    </div>`
  })
};

function mostrarAlerta(){ 
  Swal.fire({
    imageUrl: "./img/grilla.jpeg",
    imageHeight: 700,
    imageAlt: 'A tall image',
    confirmButtonColor: '#0d6efd',
  })
}


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


let nombreSolicitante = document.getElementById(defaultContactFormName.value);
let emailSolicitante = document.getElementById(defaultContactFormEmail.value);
let dniSolicitante = document.getElementById(defaultContactFormDni.value);

const datosSolicitante = {
  "Nombre": nombreSolicitante,
  "Email": emailSolicitante,
  "DNI": dniSolicitante,
}

const validarCampos = () => {

  let nombreSolicitante = document.getElementById("defaultContactFormName").value;
  let emailSolicitante = document.getElementById("defaultContactFormEmail").value;
  let dniSolicitante = document.getElementById("defaultContactFormDni").value;

  if ((nombreSolicitante.length != '') && (emailSolicitante.length != '') && (dniSolicitante.length != '')) {
    Swal.fire({
      icon: 'success',
      title: 'Tus datos se registraron correctamente',
      text: 'Revisa tu correo electrónico',
      showConfirmButton: false,
      confirmButtonColor: '#FFc107',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, reservar',
      timer: 3000
    }
    )
  }  
  else {
    Swal.fire({
      icon: 'error',
      title: 'Tus datos son inválidos',
      text: 'por favor revisa y volve a intentar',
      showConfirmButton: false,
      confirmButtonColor: '#FFc107',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, reservar',
      timer: 3000
    }
    )
  }
}

btnEnviarConstancia.addEventListener("submit", (e) => {
  e.preventDefault();
  validarCampos();
})

mostrarActividad();
// contratarActividad();

//FETCH 

const jsonButton = document.querySelector('#jsonBtn');

jsonBtn.addEventListener('click', cargarJSON)

function cargarJSON() {
    fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    }

//verificacion de email
async function verificarEmail(emailSolicitante) {
  let API = `https://www.disify.com/api/email/${emailSolicitante}`;
  const response = await fetch(API);
  const data = await response.json();
  console.log(data);
}

const btnRegistrarse = document.querySelector('#button2')

btnRegistrarse.addEventListener("click", () => {
  verificarEmail('test@gmail.com');
})

/* const btnRegistrarse = document.querySelector('#button2')
  
btnRegistrarse.addEventListener("click", ()=> {
    verificarEmail()
})

async function verificarEmail(emailSolicitante){
  let API = `https://www.disify.com/api/email/${emailSolicitante}`;
  const response = await fetch(API);
  const dataJSON = await response.json();
  console.log(dataJSON);
}; */

// ADD EVENTOS
function saludar() {
  alert('Seguinos en nuestras redes sociales!!!!')
}

const btnSaludar = document.getElementById('enviarSaludo');
btnSaludar.addEventListener("click", saludar);
