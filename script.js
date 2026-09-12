/* =====================================
   AMERISSTORE FREE FIRE
   Gaming | Digital Store
===================================== */


const whatsapp = "595981841136";




document.addEventListener(
"DOMContentLoaded",
()=>{



console.log(
"AMERISSTORE cargado correctamente 🚀"
);






/* =====================================
   DATOS DE COMPRA
===================================== */


let compra = {


producto:"110 Diamantes 💎",


precio:"Gs. 6.000",


id:"",


cantidad:1



};









/* =====================================
   SELECCIONAR DIAMANTES
===================================== */


const tarjetas =

document.querySelectorAll(
".diamond-card"
);






tarjetas.forEach(card=>{



card.addEventListener(
"click",
()=>{





tarjetas.forEach(c=>{


c.classList.remove(
"active"
);



});





card.classList.add(
"active"
);







compra.producto =

card.dataset.producto;





compra.precio =

card.dataset.precio;








// Reiniciar cantidad


compra.cantidad = 1;





const cantidad =

document.getElementById(
"quantity"
);





if(cantidad){


cantidad.value = 1;


}







actualizarResumen();






});



});













/* =====================================
   PASO 1 → PASO 2
===================================== */



const continuar1 =

document.getElementById(
"continueStep1"
);






if(continuar1){



continuar1.addEventListener(
"click",
()=>{





const step2 =

document.getElementById(
"step2"
);






if(step2){



step2.classList.remove(
"hidden"
);





step2.scrollIntoView({

behavior:"smooth"

});



}




});



}














/* =====================================
   INPUT ID JUGADOR
===================================== */



const inputID =

document.getElementById(
"playerID"
);






if(inputID){



inputID.addEventListener(
"input",
()=>{





compra.id =

inputID.value.trim();






actualizarResumen();




});



}













/* =====================================
   GUIA USER ID
===================================== */


const guideButton =

document.getElementById(
"openGuide"
);




const guideContent =

document.getElementById(
"guideContent"
);






if(guideButton){



guideButton.addEventListener(
"click",
()=>{



guideContent.classList.toggle(
"show"
);



});



}












/* =====================================
   PASO 2 → PASO 3
===================================== */


const continuar2 =

document.getElementById(
"continueStep2"
);






if(continuar2){



continuar2.addEventListener(
"click",
()=>{





if(compra.id.length < 6){



alert(
"Ingresa correctamente tu ID Free Fire"
);



return;



}








const step3 =

document.getElementById(
"step3"
);







if(step3){



step3.classList.remove(
"hidden"
);





step3.scrollIntoView({

behavior:"smooth"

});



}





actualizarResumen();






});



}












/* =====================================
   CANTIDAD + -
===================================== */



const plus =

document.getElementById(
"plus"
);




const minus =

document.getElementById(
"minus"
);




const quantity =

document.getElementById(
"quantity"
);








if(plus){



plus.addEventListener(
"click",
()=>{





compra.cantidad++;





if(quantity){


quantity.value =

compra.cantidad;


}





actualizarResumen();





});



}







if(minus){



minus.addEventListener(
"click",
()=>{





if(compra.cantidad > 1){



compra.cantidad--;





if(quantity){


quantity.value =

compra.cantidad;


}




actualizarResumen();



}



});



}












/* =====================================
   ACTUALIZAR RESUMEN
===================================== */


function actualizarResumen(){





const producto =

document.getElementById(
"summaryProduct"
);





const precio =

document.getElementById(
"summaryPrice"
);





const id =

document.getElementById(
"summaryID"
);





const total =

document.getElementById(
"totalPrice"
);








if(producto){


producto.innerHTML =

compra.producto;



}







if(precio){


precio.innerHTML =

compra.precio;



}







if(id){


id.innerHTML =

compra.id || "-";



}








if(total){





let precioNumero =

parseInt(

compra.precio.replace(
/\D/g,
""
)

);





let totalFinal =

precioNumero *
compra.cantidad;







total.innerHTML =

"Gs. " +

totalFinal.toLocaleString();



}






}
/* =====================================
   COMPRAR POR WHATSAPP
===================================== */


const botonWhatsapp =

document.getElementById(
"buyWhatsapp"
);






if(botonWhatsapp){



botonWhatsapp.addEventListener(
"click",
()=>{





let precioNumero =

parseInt(

compra.precio.replace(
/\D/g,
""
)

);






let totalFinal =

precioNumero *
compra.cantidad;







let mensaje =



`Hola AMERISSTORE 👋🚀


Quiero realizar una compra:


🎮 Juego:
Free Fire


💎 Producto:
${compra.producto}


🔢 Cantidad:
${compra.cantidad}


💰 Precio unitario:
${compra.precio}


🧾 Total:
Gs. ${totalFinal.toLocaleString()}


🆔 ID Jugador:
${compra.id}


Espero confirmación de mi pedido.

Gracias.`;







let url =

`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;







window.open(

url,

"_blank"

);





});



}












/* =====================================
   EXTRAS WHATSAPP
===================================== */


const botonesExtras =

document.querySelectorAll(
".buy-button"
);






botonesExtras.forEach(
boton=>{





boton.addEventListener(
"click",
()=>{





let producto =

boton.dataset.producto;






let precio =

boton.dataset.precio;







let mensaje =



`Hola AMERISSTORE 👋


Estoy interesado en:


📦 Producto:
${producto}


💰 Precio:
${precio}


Quiero información para completar mi compra.


Gracias 🚀`;







let url =

`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;







window.open(

url,

"_blank"

);





});





});













/* =====================================
   CONTADOR DIAMANTES
===================================== */


const counter =

document.getElementById(
"diamondCounter"
);






if(counter){





let number = 0;



let target = 10000;







let animation =

setInterval(
()=>{





number += 200;








if(number >= target){





number = target;





clearInterval(animation);








let box =

document.querySelector(
".diamond-counter"
);






if(box){



box.classList.add(
"finished"
);



}









// LLUVIA UNA SOLA VEZ



if(

!sessionStorage.getItem(
"diamondExplosion"
)

){



crearDiamantes();





sessionStorage.setItem(
"diamondExplosion",
"true"

);



}





}








counter.innerHTML =

"+" +

number.toLocaleString();







},

50

);





}












});












/* =====================================
   LLUVIA DE DIAMANTES
===================================== */


function crearDiamantes(){





const container =

document.createElement(
"div"
);







container.className =

"diamond-effect";







document.body.appendChild(
container
);








for(
let i=0;

i<100;

i++

){






let diamond =

document.createElement(
"div"
);







diamond.className =

"falling-diamond";







diamond.innerHTML =

"💎";







diamond.style.left =

Math.random()*100+"%";







diamond.style.animationDelay =

Math.random()*2+"s";







diamond.style.fontSize =

(25 + Math.random()*45)+"px";







container.appendChild(
diamond
);







}









setTimeout(
()=>{



container.remove();



},

4500

);






}
/* =====================================
   CATALOGO AMERISSTORE
===================================== */

const whatsappStore = "595981841136";

const productos = [
  {
    categoria: "Streaming",
    nombre: "Netflix",
    descripcion: "Series y películas ilimitadas en calidad Premium.",
    precio: "Gs. 30.000",
    precioSecundario: "",
    imagen: "assets/logos/netflix.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Disney+ + ESPN",
    descripcion: "Disney, Marvel, Star Wars y deportes en vivo.",
    precio: "Gs. 25.000",
    precioSecundario: "",
    imagen: "assets/logos/disney-espn.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Prime Video",
    descripcion: "Películas, series exclusivas y contenido original.",
    precio: "Gs. 20.000",
    precioSecundario: "",
    imagen: "assets/logos/prime-video.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Max",
    descripcion: "HBO, Warner Bros., DC y mucho más.",
    precio: "Gs. 15.000",
    precioSecundario: "",
    imagen: "assets/logos/max.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Crunchyroll",
    descripcion: "El mejor catálogo de anime en streaming.",
    precio: "Gs. 12.000",
    precioSecundario: "",
    imagen: "assets/logos/crunchyroll.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Flujo TV",
    descripcion: "Canales en vivo, deportes y entretenimiento.",
    precio: "Gs. 30.000",
    precioSecundario: "",
    imagen: "assets/logos/flujo-tv.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Paramount+",
    descripcion: "Series, películas y eventos deportivos.",
    precio: "Gs. 15.000",
    precioSecundario: "",
    imagen: "assets/logos/paramount.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "ViX+",
    descripcion: "Contenido latino, novelas, películas y deportes.",
    precio: "Gs. 12.000",
    precioSecundario: "",
    imagen: "assets/logos/vix.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Spotify Premium",
    descripcion: "Escucha música sin anuncios y sin límites.",
    precio: "Desde Gs. 25.000",
    precioSecundario: "1 mes 25.000 · 3 meses 60.000 · 6 meses 100.000 · 1 año 200.000",
    imagen: "assets/logos/spotify.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "YouTube Premium",
    descripcion: "YouTube sin anuncios, en segundo plano y YouTube Music incluido.",
    precio: "Desde Gs. 25.000",
    precioSecundario: "1 mes 25.000 · 3 meses 60.000",
    imagen: "assets/logos/youtube-premium.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Apple TV+",
    descripcion: "Series y películas originales de Apple.",
    precio: "Gs. 20.000",
    precioSecundario: "",
    imagen: "assets/logos/apple-tv.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Universal+",
    descripcion: "Series exclusivas, películas y contenido Premium.",
    precio: "Gs. 20.000",
    precioSecundario: "",
    imagen: "assets/logos/universal-plus.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "MUBI",
    descripcion: "Cine independiente y películas premiadas.",
    precio: "Gs. 20.000",
    precioSecundario: "",
    imagen: "assets/logos/mubi.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Streaming",
    nombre: "Rakuten Viki",
    descripcion: "Dramas coreanos y series asiáticas con subtítulos.",
    precio: "Gs. 20.000",
    precioSecundario: "",
    imagen: "assets/logos/rakuten-viki.jpg",
    badge: "OFERTA"
  },
  {
    categoria: "Inteligencia Artificial",
    nombre: "ChatGPT Plus",
    descripcion: "Accede a GPT-5, crea imágenes y obtén respuestas más rápidas.",
    precio: "Gs. 25.000",
    precioSecundario: "",
    imagen: "assets/logos/chatgpt.jpg",
    badge: "IA"
  },
  {
    categoria: "Inteligencia Artificial",
    nombre: "Google Gemini Pro",
    descripcion: "IA avanzada de Google con almacenamiento en la nube y funciones Premium.",
    precio: "Desde Gs. 89.000",
    precioSecundario: "",
    imagen: "assets/logos/gemini.jpg",
    badge: "IA"
  },
  {
    categoria: "Diseño",
    nombre: "Canva Pro",
    descripcion: "Todas las funciones Premium para diseño profesional.",
    precio: "Desde Gs. 5.000",
    precioSecundario: "",
    imagen: "assets/logos/canva.jpg",
    badge: "PRO"
  },
  {
    categoria: "Diseño",
    nombre: "CapCut Pro",
    descripcion: "Edición de video profesional con herramientas Premium.",
    precio: "Gs. 30.000 /mes",
    precioSecundario: "",
    imagen: "assets/logos/capcut.jpg",
    badge: "PRO"
  },
  {
    categoria: "Educación",
    nombre: "Duolingo Super (30 días)",
    descripcion: "Aprende idiomas sin anuncios y con funciones avanzadas.",
    precio: "Gs. 25.000",
    precioSecundario: "",
    imagen: "assets/logos/duolingo-30.jpg",
    badge: "TOP"
  },
  {
    categoria: "Educación",
    nombre: "Duolingo Super (1 año)",
    descripcion: "Aprende idiomas sin anuncios y con funciones avanzadas.",
    precio: "Gs. 150.000",
    precioSecundario: "",
    imagen: "assets/logos/duolingo-1ano.jpg",
    badge: "TOP"
  },
  {
    categoria: "Seguridad",
    nombre: "NordVPN",
    descripcion: "Protege tu conexión y navega de forma segura.",
    precio: "Gs. 25.000",
    precioSecundario: "",
    imagen: "assets/logos/nordvpn.jpg",
    badge: "VPN"
  },
  {
    categoria: "Seguridad",
    nombre: "Surfshark VPN",
    descripcion: "Navegación privada y acceso a contenido internacional.",
    precio: "Gs. 20.000",
    precioSecundario: "",
    imagen: "assets/logos/surfshark.jpg",
    badge: "VPN"
  }
];

function renderCatalogo(filtro = "todos"){
  const grid = document.getElementById("catalogGrid");
  if(!grid) return;

  let lista = productos;

  if(filtro !== "todos"){
    lista = productos.filter(item => item.categoria === filtro);
  }

  grid.innerHTML = lista.map(producto => {
    return `
      <article class="catalog-card">
        <div class="catalog-image-wrap">
          <span class="catalog-badge">${producto.badge}</span>
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <div class="catalog-overlay"></div>
        </div>

        <div class="catalog-content">
          <span class="catalog-category">${producto.categoria}</span>
          <h3 class="catalog-title">${producto.nombre}</h3>
          <p class="catalog-description">${producto.descripcion}</p>

          <div class="catalog-price">
            <strong>${producto.precio}</strong>
          </div>

          ${
            producto.precioSecundario
              ? `<p style="color:#8f8f8f;font-size:13px;line-height:1.5;">${producto.precioSecundario}</p>`
              : ``
          }

          <button 
            class="catalog-btn"
            onclick="comprarCatalogo('${producto.nombre}', '${producto.precio}')"
          >
            Ver más
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function comprarCatalogo(nombre, precio){
  const mensaje = `Hola AMERISSTORE 👋

Estoy interesado en este servicio:

📦 Producto:
${nombre}

💰 Precio:
${precio}

Quiero más información para completar la compra.`;

  const url = `https://wa.me/${whatsappStore}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalogo();

  const filtros = document.querySelectorAll(".filter-btn");

  filtros.forEach(btn => {
    btn.addEventListener("click", () => {
      filtros.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCatalogo(btn.dataset.filter);
    });
  });
});
/* =====================================
   COMPRA PRODUCTOS WHATSAPP
===================================== */


const botonesProductos = document.querySelectorAll(
".buy-product"
);



botonesProductos.forEach(
boton=>{


boton.addEventListener(
"click",
(e)=>{


e.preventDefault();



let producto =
boton.dataset.producto;



let precio =
boton.dataset.precio;




let mensaje =

`Hola AMERISSTORE 👋🔥


Quiero adquirir este servicio:


📦 Servicio:
${producto}


💰 Costo:
${precio}


¿Me pueden ayudar con la activación?


Gracias.`;


let url =

`https://wa.me/595981841136?text=${encodeURIComponent(mensaje)}`;



window.open(
url,
"_blank"
);



});


});
