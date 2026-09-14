/* =========================================================
   AMERISSTORE
   PRODUCTO GAMING FINAL
========================================================= */


"use strict";


document.addEventListener(
"DOMContentLoaded",
()=>{





/* =========================================================
   CONFIG
========================================================= */


const WHATSAPP =

"595981841136";



const CART_KEY =

"amerisstore_carrito";









/* =========================================================
   BASE DE DATOS GAMING
========================================================= */


const juegos = {






/* =========================================================
   MOBILE LEGENDS
========================================================= */


mobilelegends:{


nombre:

"Mobile Legends",



categoria:

"MOBILE LEGENDS",



badge:

"DIAMANTES",



imagen:

"assets/productos/mobilelegends.png",




descripcion:

"Recarga diamantes y pases para mejorar tu experiencia en Mobile Legends.",




color:

"mobilelegends",



servidor:

true,





info:

`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br>

• Server ID

<br><br>

Nunca solicitamos la contraseña.

`,





productos:[



{
nombre:"28 Diamantes 💎",
precio:5000,
tipo:"recarga"
},


{
nombre:"44 Diamantes 💎",
precio:7000,
tipo:"recarga"
},


{
nombre:"86 Diamantes 💎",
precio:10000,
tipo:"recarga",
tag:"⭐ MÁS VENDIDO"
},


{
nombre:"176 Diamantes 💎",
precio:19500,
tipo:"recarga"
},


{
nombre:"257 Diamantes 💎",
precio:28500,
tipo:"recarga"
},


{
nombre:"343 Diamantes 💎",
precio:36500,
tipo:"recarga",
tag:"🔥 POPULAR"
},


{
nombre:"707 Diamantes 💎",
precio:71000,
tipo:"recarga"
},


{
nombre:"1498 Diamantes 💎",
precio:152000,
tipo:"recarga"
},


{
nombre:"2195 Diamantes 💎",
precio:216000,
tipo:"recarga"
},


{
nombre:"3688 Diamantes 💎",
precio:350000,
tipo:"recarga"
},


{
nombre:"5532 Diamantes 💎",
precio:520000,
tipo:"recarga",
tag:"👑 PREMIUM"
},





/* EXTRAS */


{
nombre:"Paquete Semanal Elite 🎟️",
precio:7000,
tipo:"extra"
},


{
nombre:"Pase Semanal 🎟️",
precio:13000,
tipo:"extra"
},


{
nombre:"Paquete Mensual Elite 🎟️",
precio:28000,
tipo:"extra"
},


{
nombre:"Pase Crepuscular 🎟️",
precio:58000,
tipo:"extra"
}



]



},







/* =========================================================
   PUBG MOBILE
========================================================= */


pubg:{


nombre:

"PUBG Mobile",



categoria:

"PUBG MOBILE",



badge:

"UC",



imagen:

"assets/productos/pubg.png",




descripcion:

"Compra UC, pases y beneficios premium para mejorar tu cuenta dentro de PUBG Mobile.",




color:

"pubg",



servidor:

false,





info:

`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br><br>

Nunca solicitamos contraseña de tu cuenta.

`,





productos:[



/* =========================
   MONEDAS WOW / UC
========================= */



{
nombre:"60 Monedas WOW 🪙",
precio:8000,
tipo:"recarga"
},



{
nombre:"325 Monedas WOW 🪙",
precio:35000,
tipo:"recarga",
tag:"⭐ MÁS VENDIDO"
},



{
nombre:"660 Monedas WOW 🪙",
precio:70000,
tipo:"recarga",
tag:"🔥 POPULAR"
},



{
nombre:"1.800 Monedas WOW 🪙",
precio:170000,
tipo:"recarga"
},



{
nombre:"3.850 Monedas WOW 🪙",
precio:330000,
tipo:"recarga"
},



{
nombre:"8.100 Monedas WOW 🪙",
precio:650000,
tipo:"recarga",
tag:"👑 PREMIUM"
},







/* =========================
   PASES PUBG
========================= */



{
nombre:"Pase Élite Nivel 1-50 🎟️",
precio:40000,
tipo:"extra"
},



{
nombre:"Pase Élite Nivel 1-100 🎟️",
precio:75000,
tipo:"extra",
tag:"⭐ MÁS VENDIDO"
},



{
nombre:"Pase Élite Plus Nivel 1-100 👑",
precio:180000,
tipo:"extra",
tag:"👑 PREMIUM"
},







/* =========================
   PRIME
========================= */



{
nombre:"PUBG Mobile PRIME 1 Mes ⭐",
precio:8000,
tipo:"extra"
},



{
nombre:"PUBG Mobile PRIME 3 Meses ⭐",
precio:22000,
tipo:"extra"
},



{
nombre:"PUBG Mobile PRIME 6 Meses ⭐",
precio:45000,
tipo:"extra"
},



{
nombre:"PUBG Mobile PRIME 12 Meses ⭐",
precio:85000,
tipo:"extra",
tag:"🔥 POPULAR"
},







/* =========================
   PRIME PLUS
========================= */



{
nombre:"PUBG Mobile PRIME PLUS 1 Mes 👑",
precio:65000,
tipo:"extra"
},



{
nombre:"PUBG Mobile PRIME PLUS 3 Meses 👑",
precio:180000,
tipo:"extra"
},



{
nombre:"PUBG Mobile PRIME PLUS 6 Meses 👑",
precio:350000,
tipo:"extra"
},



{
nombre:"PUBG Mobile PRIME PLUS 12 Meses 👑",
precio:700000,
tipo:"extra",
tag:"👑 PREMIUM"
},







/* =========================
   PAQUETES ESPECIALES
========================= */



{
nombre:"Paquete de Primera Compra 🎁",
precio:8000,
tipo:"extra"
},



{
nombre:"Paquete de Emblema Mítico 🏅",
precio:35000,
tipo:"extra"
},



{
nombre:"Materiales para Armas Evolutivas 🔫",
precio:22000,
tipo:"extra"
},



{
nombre:"Paquete Semanal 1 🎁",
precio:8000,
tipo:"extra"
},



{
nombre:"Paquete Semanal 2 🎁",
precio:22000,
tipo:"extra"
},



{
nombre:"Paquete Semanal de Valor - Emblema Mítico 🏅",
precio:22000,
tipo:"extra"
}



]


},
Producto	Precio venta
Blood Strike - 51 Oro	5.000 Gs
Blood Strike - 105 Oro	8.000 Gs
Blood Strike - 320 Oro	18.000 Gs
Blood Strike - 540 Oro	28.000 Gs
Blood Strike - 1.100 Oro	55.000 Gs
Blood Strike - 2.260 Oro	110.000 Gs
Blood Strike - 5.800 Oro	275.000 Gs
🎟️ Pases Blood Strike
Producto	Precio venta
Blood Strike - Pase de Temporada	8.000 Gs
Blood Strike - Pase Subida de Nivel	15.000 Gs
Blood Strike - Pase Strike Élite	27.000 Gs
Blood Strike - Pase Strike Premium	58.000 Gs
🎁 Cajas y Extras
Producto	Precio venta
Caja Ultra Skin Lucky	4.000 Gs
Oferta 049	4.000 Gs
Oferta 099	8.000 Gs
Oferta 199	18.000 Gs
Oferta 299	28.000 Gs
Oferta 399	38.000 Gs
Oferta 499	48.000 Gs
Oferta 599	58.000 Gs
Oferta 699	68.000 Gs
Oferta 799	78.000 Gs
Oferta 899	88.000 Gs
Oferta 999	98.000 Gs
🌟 Eventos especiales / Colaboraciones
Producto	Precio venta
One Punch Man - Bolsa de Suerte Exclusiva	5.000 Gs
One Punch Man - Cupón de Valor Especial	5.000 Gs
One Punch Man - Cofre de Puntos de Mejora	10.000 Gs
Dark Matter - Bolsa de Suerte Preventa	10.000 Gs
Cupón Caja Lucha Strike	5.000 Gs
Cofre Puntos de Mejora Lucha Strike	10.000 Gs
Ataque de los Titanes - Cupón Titán I	10.000 Gs
Ataque de los Titanes - Cupón Titán II	5.000 Gs
Ataque de los Titanes - Cofre Puntos de Mejora	10.000 Gs
Bolsa de Suerte Carnaval	5.000 Gs
Bolsa de Suerte Groove	5.000 Gs
Preventa Eternal Valor Unplugged	10.000 Gs
Preventa Golden Elegy Eternal Valor	10.000 Gs
Bolsa de Suerte Green Field	5.000 Gs
Activar Cornucopia	10.000 Gs
Enzo: The Next One - Cofre Puntos de Mejora	10.000 Gs
Bolsa de Suerte	5.000 Gs
Cupón Maestro Especial	10.000 Gs
Cofre Puntos de Mejora Seven Deadly Sins	10.000 Gs
Cupón Valor Seven Deadly Sins	5.000 Gs
Tokyo Revengers - Cupón Valor I	5.000 Gs
Tokyo Revengers - Cupón Valor II	5.000 Gs
Tokyo Revengers - Cofre Puntos de Mejora	10.000 Gs







/* =========================================================
   CALL OF DUTY MOBILE
========================================================= */


codmobile:{


nombre:

"Call of Duty Mobile",



categoria:

"CALL OF DUTY",



badge:

"CP",



imagen:

"assets/productos/codmobile.png",




descripcion:

"Compra CP para desbloquear contenido premium dentro del juego.",




color:

"codmobile",



servidor:

false,





info:

`

Para realizar la recarga necesitamos:

<br><br>

• UID del jugador

<br><br>

Nunca solicitamos contraseña.

`,





productos:[



{
nombre:"88 CP",
precio:10000,
tipo:"recarga"
},


{
nombre:"460 CP",
precio:45000,
tipo:"recarga",
tag:"⭐ MÁS VENDIDO"
},


{
nombre:"960 CP",
precio:98000,
tipo:"recarga",
tag:"🔥 POPULAR"
},


{
nombre:"11600 CP",
precio:785000,
tipo:"recarga",
tag:"👑 PREMIUM"
}



]



}



};
/* =========================================================
   OBTENER JUEGO ACTUAL
========================================================= */


const params =

new URLSearchParams(
window.location.search
);






const id =

params.get("id")

||

"mobilelegends";







const juego =

juegos[id];







console.log(
"Juego cargado:",
id,
juego
);






if(!juego){

console.error(
"Juego no encontrado:",
id
);

return;

}









/* =========================================================
   COLOR DINÁMICO
========================================================= */


document.body.classList.add(

juego.color

);









/* =========================================================
   ELEMENTOS PRINCIPALES
========================================================= */


const gameTitle =

document.getElementById(
"gameTitle"
);



const gameCategory =

document.getElementById(
"gameCategory"
);



const gameDescription =

document.getElementById(
"gameDescription"
);



const gameImage =

document.getElementById(
"gameImage"
);



const gameBadge =

document.getElementById(
"gameBadge"
);









/* =========================================================
   CONTENEDORES
========================================================= */


const mainContainer =

document.getElementById(
"mainContainer"
);



const extraContainer =

document.getElementById(
"extraContainer"
);









/* =========================================================
   PASOS
========================================================= */


const step2 =

document.getElementById(
"step2"
);



const step3 =

document.getElementById(
"step3"
);









/* =========================================================
   DATOS JUGADOR
========================================================= */


const playerID =

document.getElementById(
"playerID"
);



const serverID =

document.getElementById(
"serverID"
);



const serverContainer =

document.getElementById(
"serverContainer"
);









/* =========================================================
   RESUMEN
========================================================= */


const summaryProduct =

document.getElementById(
"summaryProduct"
);



const summaryPrice =

document.getElementById(
"summaryPrice"
);



const summaryID =

document.getElementById(
"summaryID"
);



const summaryServer =

document.getElementById(
"summaryServer"
);



const summaryServerRow =

document.getElementById(
"summaryServerRow"
);









/* =========================================================
   BOTONES
========================================================= */


const continueButton =

document.getElementById(
"continueButton"
);



const buyWhatsapp =

document.getElementById(
"buyWhatsapp"
);



const addCartButton =

document.getElementById(
"addCartButton"
);









/* =========================================================
   CANTIDAD
========================================================= */


const quantity =

document.getElementById(
"quantity"
);



const plusButton =

document.getElementById(
"plusButton"
);



const minusButton =

document.getElementById(
"minusButton"
);



const totalPrice =

document.getElementById(
"totalPrice"
);









/* =========================================================
   GUIA ID
========================================================= */


const guideButton =

document.getElementById(
"guideButton"
);



const guideContent =

document.getElementById(
"guideContent"
);



const guideText =

document.getElementById(
"guideText"
);









/* =========================================================
   INFO
========================================================= */


const gameInfo =

document.getElementById(
"gameInfo"
);







let productoSeleccionado = null;


let cantidad = 1;









/* =========================================================
   CARGAR INFORMACIÓN DEL JUEGO
========================================================= */


document.title =

"AMERISSTORE | "

+

juego.nombre;







if(gameTitle){

gameTitle.textContent =

juego.nombre;

}







if(gameCategory){

gameCategory.textContent =

juego.categoria;

}







if(gameDescription){

gameDescription.textContent =

juego.descripcion;

}







if(gameImage){

gameImage.src =

juego.imagen;


gameImage.alt =

juego.nombre;

}







if(gameBadge){

gameBadge.textContent =

juego.badge;

}







if(gameInfo){

gameInfo.innerHTML =

juego.info;

}









/* =========================================================
   SERVER ID
========================================================= */


if(juego.servidor){



if(serverContainer){

serverContainer.style.display =

"block";

}




if(summaryServerRow){

summaryServerRow.style.display =

"flex";

}



}
/* =========================================================
   CREAR TARJETAS
========================================================= */


function crearTarjeta(producto){



const card =

document.createElement(
"div"
);









/* =========================================================
   RECARGAS
========================================================= */


if(producto.tipo === "recarga"){



card.className =

"diamond-card";







let etiqueta = "";





if(producto.tag){



let claseTag = "";





if(producto.tag.includes("MÁS VENDIDO")){


claseTag = "tag-best";


}






if(producto.tag.includes("POPULAR")){


claseTag = "tag-popular";


}






if(producto.tag.includes("PREMIUM")){


claseTag = "tag-premium";


}









etiqueta = `


<span class="package-tag ${claseTag}">

${producto.tag}

</span>


`;



}








card.innerHTML = `


${etiqueta}



<h3>

${producto.nombre}

</h3>





<strong>

Gs.

${producto.precio.toLocaleString("es-PY")}

</strong>



`;







}









/* =========================================================
   EXTRAS
========================================================= */


else{



card.className =

"ff-extra-card";







card.innerHTML = `



<div class="ff-extra-icon">

🎟️

</div>






<span class="ff-extra-label">

BENEFICIO

</span>






<h3>

${producto.nombre}

</h3>







<p>

Obtén beneficios adicionales dentro del juego.

</p>







<div class="ff-extra-bottom">





<strong>

Gs.

${producto.precio.toLocaleString("es-PY")}

</strong>






<button

class="buy-button">


COMPRAR


</button>







</div>



`;



}












/* =========================================================
   SELECCIONAR PRODUCTO
========================================================= */


card.addEventListener(

"click",

()=>{






/* SOLO LAS RECARGAS ABREN CHECKOUT */


if(producto.tipo === "recarga"){






document

.querySelectorAll(

".diamond-card"

)

.forEach(

(item)=>{


item.classList.remove(
"active"
);



}

);








card.classList.add(
"active"
);








productoSeleccionado =

producto;









if(step2){



step2.classList.remove(
"hidden"
);





scrollPaso(step2);



}






}





}

);







return card;



}









/* =========================================================
   CARGAR PRODUCTOS
========================================================= */


function cargarProductos(){





if(mainContainer){


mainContainer.innerHTML = "";

}



if(extraContainer){


extraContainer.innerHTML = "";

}









juego.productos.forEach(

(producto)=>{





const tarjeta =

crearTarjeta(
producto
);







if(producto.tipo === "extra"){



if(extraContainer){


extraContainer.appendChild(
tarjeta
);


}



}

else{



if(mainContainer){


mainContainer.appendChild(
tarjeta
);


}



}





}



);



}









/* =========================================================
   SCROLL SUAVE
========================================================= */


function scrollPaso(elemento){



if(!elemento)

return;






setTimeout(()=>{



elemento.scrollIntoView({



behavior:

"smooth",



block:

"center"



});



},150);



}









/* =========================================================
   INICIAR CARGA
========================================================= */


cargarProductos();
/* =========================================================
   GUIA DE ID
========================================================= */


if(guideButton){



guideButton.addEventListener(

"click",

()=>{



if(guideContent){


guideContent.classList.toggle(
"show"
);



}



}



);



}









/* =========================================================
   TEXTO GUIA DINÁMICO
========================================================= */


if(guideText){





if(id === "mobilelegends"){



guideText.innerHTML = `


1. Abrí Mobile Legends.


<br><br>


2. Tocá tu foto de perfil.


<br><br>


3. Copiá tu ID y Server ID.


<br><br>


4. Envíanos los datos junto al paquete elegido.



`;



}







if(id === "pubg"){



guideText.innerHTML = `


1. Abrí PUBG Mobile.


<br><br>


2. Entrá a tu perfil.


<br><br>


3. Copiá tu ID de jugador.


<br><br>


4. Envíanos el ID para realizar la recarga.



`;



}







if(id === "bloodstrike"){



guideText.innerHTML = `


1. Abrí Blood Strike.


<br><br>


2. Entrá a tu perfil.


<br><br>


3. Copiá tu ID.


<br><br>


4. Envíanos tu ID junto al paquete.



`;



}







if(id === "codmobile"){



guideText.innerHTML = `


1. Abrí Call of Duty Mobile.


<br><br>


2. Entrá a tu perfil.


<br><br>


3. Copiá tu UID.


<br><br>


4. Envíanos el dato para realizar la recarga.



`;



}



}









/* =========================================================
   ACTUALIZAR TOTAL
========================================================= */


function actualizarTotal(){



if(!productoSeleccionado)

return;






let cantidadActual =

parseInt(quantity.value)

|| 1;







let total =


productoSeleccionado.precio *

cantidadActual;








if(totalPrice){



totalPrice.textContent =


"Gs. "

+

total.toLocaleString(
"es-PY"
);



}







}









/* =========================================================
   AUMENTAR CANTIDAD
========================================================= */


if(plusButton){



plusButton.addEventListener(

"click",

()=>{



cantidad++;




quantity.value =

cantidad;




actualizarTotal();



}



);



}









/* =========================================================
   REDUCIR CANTIDAD
========================================================= */


if(minusButton){



minusButton.addEventListener(

"click",

()=>{





if(cantidad > 1){


cantidad--;


}






quantity.value =

cantidad;





actualizarTotal();



}



);



}









/* =========================================================
   VALIDAR DATOS
========================================================= */


function validarDatos(){



if(!productoSeleccionado){



mostrarNotificacion(

"Selecciona un paquete primero."

);



return false;



}







if(
!playerID ||
!playerID.value.trim()
){



mostrarNotificacion(

"Ingresa tu ID de jugador."

);



if(playerID){

playerID.focus();

}



return false;



}







if(
juego.servidor &&
!serverID.value.trim()
){



mostrarNotificacion(

"Ingresa tu Server ID."

);



serverID.focus();



return false;



}







return true;



}









/* =========================================================
   CONTINUAR AL RESUMEN
========================================================= */


if(continueButton){



continueButton.addEventListener(

"click",

()=>{





if(!validarDatos())

return;








if(summaryProduct){



summaryProduct.textContent =

productoSeleccionado.nombre;



}







if(summaryID){



summaryID.textContent =

playerID.value.trim();



}








if(
juego.servidor &&
summaryServer
){



summaryServer.textContent =

serverID.value.trim();



}








step3.classList.remove(

"hidden"

);







cantidad = 1;


quantity.value = 1;





actualizarTotal();






scrollPaso(step3);





}



);



}
/* =========================================================
   CARRITO
========================================================= */


function obtenerCarrito(){


try{


return JSON.parse(

localStorage.getItem(
CART_KEY
)

)

|| [];



}

catch{


return [];

}


}









function guardarCarrito(carrito){


localStorage.setItem(

CART_KEY,

JSON.stringify(
carrito
)

);



}









function agregarAlCarrito(){



const carrito =

obtenerCarrito();







const cantidadActual =

parseInt(quantity.value)

|| 1;







const producto = {



producto:

`${juego.nombre} - ${productoSeleccionado.nombre}`,




plan:

productoSeleccionado.nombre,




precio:

productoSeleccionado.precio * cantidadActual,




imagen:

juego.imagen,




tipo:

"GAMING",




duracion:

"Recarga",




cantidad:

cantidadActual,




idJugador:

playerID.value.trim(),




servidor:

juego.servidor

?

serverID.value.trim()

:

""



};







carrito.push(producto);






guardarCarrito(
carrito
);






mostrarNotificacion(

"Producto agregado al carrito 🛒"

);



}









/* =========================================================
   BOTÓN CARRITO
========================================================= */


if(addCartButton){



addCartButton.addEventListener(

"click",

()=>{





if(!validarDatos())

return;







agregarAlCarrito();





}



);



}









/* =========================================================
   NOTIFICACIÓN
========================================================= */


function mostrarNotificacion(texto){



const anterior =

document.querySelector(
".store-notification"
);






if(anterior){

anterior.remove();

}







const aviso =

document.createElement(
"div"
);





aviso.className =

"store-notification";





aviso.textContent =

texto;






document.body.appendChild(
aviso
);







setTimeout(()=>{


aviso.classList.add(
"show"
);



},50);







setTimeout(()=>{


aviso.remove();



},2500);



}









/* =========================================================
   WHATSAPP
========================================================= */


if(buyWhatsapp){



buyWhatsapp.addEventListener(

"click",

()=>{





if(!validarDatos())

return;








const cantidadActual =

parseInt(quantity.value)

|| 1;








let mensaje =



`Hola AMERISSTORE 👋


Quiero realizar una recarga:


🎮 Juego:

${juego.nombre}



📦 Producto:

${productoSeleccionado.nombre}



🔢 Cantidad:

${cantidadActual}



🆔 ID Jugador:

${playerID.value.trim()}

`;








if(juego.servidor){



mensaje +=


`

🌐 Server ID:

${serverID.value.trim()}

`;



}








mensaje +=


`

💰 Total:

Gs. ${(productoSeleccionado.precio * cantidadActual).toLocaleString("es-PY")}



Quiero completar mi compra.`;







window.open(

"https://wa.me/"

+

WHATSAPP

+

"?text="

+

encodeURIComponent(
mensaje
),


"_blank"



);



}



);



}









/* =========================================================
   FINALIZAR
========================================================= */


});
