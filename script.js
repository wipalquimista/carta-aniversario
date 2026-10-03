const inicio = document.getElementById("inicio");
const pantallaNo = document.getElementById("pantalla-no");

const botonNo = document.getElementById("me-odias");
const botonVolver = document.getElementById("preguntar-otra-vez");

const gifsInicio = document.getElementById("gifs-inicio");
const gifsCalendario = document.getElementById("gifs-calendario");
const gifsNo = document.getElementById("gifs-no");
const gifsGaleria = document.getElementById("gifs-galeria");
const gifsCarta = document.getElementById("gifs-carta");
const gifsDespedida = document.getElementById("gifs-despedida");

function cambiarGifs(pantalla) {
  gifsInicio.hidden = pantalla !== "inicio";
  gifsCalendario.hidden = pantalla !== "calendario";
  gifsNo.hidden = pantalla !== "no";
  gifsGaleria.hidden = pantalla !== "recuerdos";
  gifsCarta.hidden = pantalla !=="carta";
  gifsDespedida.hidden = pantalla !=="despedida";
}

botonNo.addEventListener("click", function () {
  inicio.hidden = true;
  pantallaNo.hidden = false;
  document.body.classList.add("pantalla-no");
  cambiarGifs("no");
});

botonVolver.addEventListener("click", function () {
  pantallaNo.hidden = true;
  inicio.hidden = false;
  document.body.classList.remove("pantalla-no");
  cambiarGifs("inicio");
});


const calendario = document.getElementById("calendario");
const botonSi = document.getElementById("abrir-carta");

botonSi.addEventListener("click", function () {
  inicio.hidden = true;
  pantallaNo.hidden = true;
  calendario.hidden = false;
  document.body.classList.remove("pantalla-no");
  cambiarGifs("calendario");
});

const contador = document.getElementById("contador");
const fechaInicio = new Date(2025, 8, 29); // 29 de septiembre de 2025

function actualizarContador() {
  const ahora = new Date();

  let anios = ahora.getFullYear() - fechaInicio.getFullYear();
  let ultimoAniversario = new Date(fechaInicio);
  ultimoAniversario.setFullYear(fechaInicio.getFullYear() + anios);

  if (ultimoAniversario > ahora) {
    anios--;
    ultimoAniversario = new Date(fechaInicio);
    ultimoAniversario.setFullYear(fechaInicio.getFullYear() + anios);
  }

  let tiempoRestante = ahora - ultimoAniversario;
  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  tiempoRestante %= 1000 * 60 * 60 * 24;

  const horas = Math.floor(tiempoRestante / (1000 * 60 * 60));
  tiempoRestante %= 1000 * 60 * 60;

  const minutos = Math.floor(tiempoRestante / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  contador.textContent =
    `Llevamos ${anios} año(s), ${dias} día(s), ` +
    `${horas} h, ${minutos} min y ${segundos} s juntos 💗`;
}

actualizarContador();
setInterval(actualizarContador, 1000);

const recuerdos = document.getElementById("recuerdos");
const carta = document.getElementById("carta");
const botonFotos = document.getElementById("ir-a-fotos");
const botonIrCarta = document.getElementById("ir-a-cartita");

botonFotos.addEventListener("click", function () {
  calendario.hidden = true;
  recuerdos.hidden = false;
  cambiarGifs("recuerdos");
});

const textoCarta = document.getElementById("texto-carta");

const mensajeCarta = `Feliz aniversario, mi vida♡. 
Ya pasó un año (y más) desde que entraste a mi vida y que soy más feliz cada día. Sabé que siempre te tengo presente y que sos la persona que más amo en todo el mundo, aunque ni eso sea suficiente para poder describir mi amor por vos, porque no es algo que pueda simplemente poner en palabras. Te amo con locura, con mucha locura.

Definitivamente no soy una persona decisiva, pero si de algo estoy segura es que quiero formar mi vida con vos. Quiero que nuestros hijos tengan esos ojos hermosos en los que me pierdo tanto, esa mirada que solo sabe mirarme con amor. Quiero seguir creciendo con vos, creciendo juntos. Por favor, por favor, por favor, te pido y te ruego que te quedes a mi lado y que seas la persona con la que voy a hacer toda mi vida.

Te amo, amo tu intensidad, amo tu sensibilidad, amo tu terquedad, amo tu llanto, tu risa, amo cada parte de vos y nunca dejo de hacerlo. Ni cuando nos enojamos y nos vamos a dormir molestos, ni cuando estamos tristes y queremos acurrucarnos en el otro para llorar, ni cuando estamos muertos de risa por las boludeces que decimos. Mi amor por vos lo único que hace es crecer cada día. De verdad, jamás vas a entender qué tanto te amo y admiro.

Perdón si la carta es algo dispersa, estoy escribiendo al mismo tiempo que pienso y lloro.`;

let intervaloEscritura;

function escribirCarta() {
  clearInterval(intervaloEscritura);
  textoCarta.textContent = "";

  const caracteres = Array.from(mensajeCarta);
  let indice = 0;

  intervaloEscritura = setInterval(function () {
    textoCarta.textContent += caracteres[indice];
    indice++;

    if (indice >= caracteres.length) {
      clearInterval(intervaloEscritura);
    }
  }, 45);
}

botonIrCarta.addEventListener("click", function () {
  recuerdos.hidden = true;
  carta.hidden = false;
  cambiarGifs("carta");
  escribirCarta();
});

const despedida = document.getElementById("despedida");
const botonFin = document.getElementById("boton-fin");
const botonVolverInicioFinal =
  document.getElementById("volver-inicio-final");

botonFin.addEventListener("click", function () {
  carta.hidden = true;
  despedida.hidden = false;
  cambiarGifs("despedida");
});

botonVolverInicioFinal.addEventListener("click", function () {
  despedida.hidden = true;
  inicio.hidden = false;
  cambiarGifs("inicio");
  document.body.classList.remove("pantalla-no");
});

const gifCalendario = document.getElementById("sonic-impaciente");
let mostrarSonicImpaciente = true;

gifCalendario.addEventListener("click", function () {
  if (mostrarSonicImpaciente) {
    gifCalendario.src = "img/Social Media Love Sticker by Sonic the Hedgehog.gif";
  } else {
    gifCalendario.src = "img/sonicgif.gif";
  }

  mostrarSonicImpaciente = !mostrarSonicImpaciente;
});