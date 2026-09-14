/* =========================================================
   AMERISSTORE
   PRODUCTO GAMING SYSTEM CLEAN
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


nombre:"Mobile Legends",


categoria:"MOBILE LEGENDS",


badge:"DIAMANTES",



imagen:

"assets/productos/mobilelegends.png",




descripcion:

"Recarga diamantes y pases para mejorar tu experiencia en Mobile Legends.",





color:

"mobilelegends",




servidor:true,





info:`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br>

• Server ID

<br><br>

Nunca solicitamos la contraseña de tu cuenta.

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





/* PASES */


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


nombre:"PUBG Mobile",


categoria:"PUBG MOBILE",


badge:"UC",



imagen:

"assets/productos/pubg.png",




descripcion:

"Compra UC para mejorar tu cuenta dentro de PUBG Mobile.",




color:

"pubg",




servidor:false,





info:`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br><br>

Nunca solicitamos la contraseña.

`,




productos:[



{
nombre:"60 UC",
precio:8000,
tipo:"recarga"
},


{
nombre:"325 UC",
precio:35000,
tipo:"recarga",
tag:"⭐ MÁS VENDIDO"
},


{
nombre:"660 UC",
precio:70000,
tipo:"recarga",
tag:"🔥 POPULAR"
},


{
nombre:"985 UC",
precio:105000,
tipo:"recarga"
},


{
nombre:"1320 UC",
precio:140000,
tipo:"recarga"
},


{
nombre:"1800 UC",
precio:170000,
tipo:"recarga"
},


{
nombre:"3850 UC",
precio:335000,
tipo:"recarga"
},


{
nombre:"8100 UC",
precio:660000,
tipo:"recarga",
tag:"👑 PREMIUM"
}



]



},







/* =========================================================
   BLOOD STRIKE
========================================================= */


bloodstrike:{


nombre:"Blood Strike",


categoria:"BLOOD STRIKE",


badge:"GOLD",



imagen:

"assets/productos/bloodstrike.png",




descripcion:

"Compra Gold y pases premium para mejorar tu cuenta.",




color:

"bloodstrike",




servidor:false,





productos:[


{
nombre:"105 Gold 🪙",
precio:7000,
tipo:"recarga"
},


{
nombre:"320 Gold 🪙",
precio:18000,
tipo:"recarga",
tag:"⭐ MÁS VENDIDO"
},


{
nombre:"540 Gold 🪙",
precio:30000,
tipo:"recarga"
},


{
nombre:"1100 Gold 🪙",
precio:62000,
tipo:"recarga",
tag:"🔥 POPULAR"
},


{
nombre:"2260 Gold 🪙",
precio:120000,
tipo:"recarga"
},


{
nombre:"5800 Gold 🪙",
precio:290000,
tipo:"recarga",
tag:"👑 PREMIUM"
},



{
nombre:"Ultra Skin Lucky Chest 🎁",
precio:4000,
tipo:"extra"
},


{
nombre:"Level Up Pass 🎟️",
precio:14000,
tipo:"extra"
},


{
nombre:"Pase Elite 🎟️",
precio:25000,
tipo:"extra"
},


{
nombre:"Pase Premium 🎟️",
precio:58000,
tipo:"extra"
}



]



},
/* =========================================================
   CALL OF DUTY MOBILE
========================================================= */


codmobile:{


nombre:"Call of Duty Mobile",


categoria:"CALL OF DUTY",


badge:"CP",



imagen:

"assets/productos/codmobile.png",




descripcion:

"Compra CP para desbloquear contenido premium dentro del juego.",




color:

"codmobile",




servidor:false,





info:`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br><br>

Nunca solicitamos la contraseña de tu cuenta.

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






if(!juego){

return;

}









/* =========================================================
   COLOR DINÁMICO
========================================================= */


document.body.classList.add(

juego.color

);









/* =========================================================
   ELEMENTOS HTML
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





const mainContainer =

document.getElementById(
"mainContainer"
);





const extraContainer =

document.getElementById(
"extraContainer"
);





const step2 =

document.getElementById(
"step2"
);





const step3 =

document.getElementById(
"step3"
);





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





const continueButton =

document.getElementById(
"continueButton"
);





const summaryProduct =

document.getElementById(
"summaryProduct"
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





const summaryPrice =

document.getElementById(
"summaryPrice"
);





const buyWhatsapp =

document.getElementById(
"buyWhatsapp"
);





const gameInfo =

document.getElementById(
"gameInfo"
);








let productoSeleccionado = null;









/* =========================================================
   CARGAR INFORMACIÓN
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






/* TIPO DE TARJETA */


if(producto.tipo === "extra"){


card.className =

"extra-card";



}

else{


card.className =

"diamond-card";


}









/* ETIQUETAS */


let etiqueta = "";





if(producto.tag){



let clase = "";




if(
producto.tag.includes("MÁS VENDIDO")
){


clase = "tag-best";


}





if(
producto.tag.includes("POPULAR")
){


clase = "tag-popular";


}





if(
producto.tag.includes("PREMIUM")
){


clase = "tag-premium";


}







etiqueta = `


<span class="package-tag ${clase}">

${producto.tag}

</span>


`;



}









/* RECARGAS */


if(producto.tipo === "recarga"){



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










/* EXTRAS */


else{


card.innerHTML = `


<div class="extra-icon">

🎟️

</div>



<span class="extra-label">

BENEFICIO

</span>




<h3>

${producto.nombre}

</h3>




<p>

Obtén beneficios especiales dentro del juego.

</p>




<div class="extra-bottom">



<strong>

Gs.

${producto.precio.toLocaleString("es-PY")}

</strong>




<button

class="extra-buy">

COMPRAR

</button>



</div>



`;



}









/* CLICK PRODUCTO */


card.addEventListener(

"click",

()=>{





document

.querySelectorAll(
".diamond-card, .extra-card"
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


}



scrollPaso(step2);





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
   SCROLL
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
   INICIAR PRODUCTOS
========================================================= */


cargarProductos();
/* =========================================================
   VALIDAR DATOS
========================================================= */


function validarDatos(){



if(!productoSeleccionado){


mostrarNotificacion(

"Selecciona un producto primero."

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
serverID &&
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
   CONTINUAR RESUMEN
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








if(summaryPrice){



summaryPrice.textContent =


"Gs. "

+

productoSeleccionado.precio.toLocaleString(
"es-PY"
);



}








if(step3){



step3.classList.remove(
"hidden"
);



scrollPaso(step3);



}



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







const producto = {


producto:

`${juego.nombre} - ${productoSeleccionado.nombre}`,


plan:

productoSeleccionado.nombre,


precio:

productoSeleccionado.precio,


imagen:

juego.imagen,


tipo:

"GAMING",


duracion:

"Recarga"



};







carrito.push(producto);







guardarCarrito(
carrito
);







mostrarNotificacion(

`${juego.nombre} agregado al carrito 🛒`

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







let mensaje =


`Hola AMERISSTORE 👋


Quiero realizar una recarga:


🎮 Juego:

${juego.nombre}



📦 Producto:

${productoSeleccionado.nombre}



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

💰 Precio:

Gs. ${productoSeleccionado.precio.toLocaleString("es-PY")}



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
   BOTÓN AGREGAR AL CARRITO
========================================================= */


const addCartButton =

document.createElement(
"button"
);





addCartButton.className =

"continue-btn";





addCartButton.textContent =


"🛒 AGREGAR AL CARRITO";







if(buyWhatsapp){



buyWhatsapp.parentNode.insertBefore(

addCartButton,

buyWhatsapp

);



}







addCartButton.addEventListener(

"click",

()=>{



if(!validarDatos())

return;







agregarAlCarrito();



}



);








});
