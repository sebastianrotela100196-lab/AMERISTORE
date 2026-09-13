/* =========================================================
   AMERISSTORE
   PRODUCTO GAMING SYSTEM
   MOBILE LEGENDS / PUBG / BLOOD STRIKE
========================================================= */


"use strict";


document.addEventListener(
"DOMContentLoaded",
()=>{





/* =========================================================
   CONFIGURACIÓN
========================================================= */


const WHATSAPP = "595981841136";








/* =========================================================
   DATOS DE JUEGOS
========================================================= */


const juegos = {







/* =========================
   MOBILE LEGENDS
========================= */


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

Nunca solicitamos la contraseña de tu cuenta.

`,



productos:[


{
nombre:"55 Diamantes 💎",
precio:6000
},


{
nombre:"86 Diamantes 💎",
precio:9000
},


{
nombre:"172 Diamantes 💎",
precio:17500
},


{
nombre:"257 Diamantes 💎",
precio:26000
},


{
nombre:"344 Diamantes 💎",
precio:35000
},


{
nombre:"514 Diamantes 💎",
precio:50000
},


{
nombre:"706 Diamantes 💎",
precio:65000
},


{
nombre:"1.412 Diamantes 💎",
precio:130000
},


{
nombre:"2.195 Diamantes 💎",
precio:195000
},


{
nombre:"3.688 Diamantes 💎",
precio:330000
},


{
nombre:"Weekly Elite Pack 🎟️",
precio:6500
},


{
nombre:"Weekly Pass 🎟️",
precio:12000
},


{
nombre:"Monthly Elite Pack 🎟️",
precio:29000
},


{
nombre:"Twilight Pass 🎟️",
precio:58000
}


]



},







/* =========================
   PUBG MOBILE
========================= */


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

"Compra UC para mejorar tu cuenta y desbloquear contenido dentro del juego.",



servidor:

false,



info:

`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br><br>

Nunca solicitamos la contraseña de tu cuenta.

`,



productos:[


{
nombre:"60 UC",
precio:8000
},


{
nombre:"325 UC",
precio:39000
},


{
nombre:"660 UC",
precio:79000
},


{
nombre:"1800 UC",
precio:189000
},


{
nombre:"3850 UC",
precio:379000
},


{
nombre:"8100 UC",
precio:759000
},


{
nombre:"Prime 1 Mes",
precio:8000
}


]



},







/* =========================
   BLOOD STRIKE
========================= */


bloodstrike:{


nombre:

"Blood Strike",



categoria:

"BLOOD STRIKE",



badge:

"GOLD",



imagen:

"assets/productos/bloodstrike.png",



descripcion:

"Compra Gold y pases premium para mejorar tu cuenta.",



servidor:

false,



info:

`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br><br>

Nunca solicitamos la contraseña de tu cuenta.

`,



productos:[


{
nombre:"51 Gold 🪙",
precio:5000
},


{
nombre:"105 Gold 🪙",
precio:8000
},


{
nombre:"320 Gold 🪙",
precio:18000
},


{
nombre:"540 Gold 🪙",
precio:28000
},


{
nombre:"1100 Gold 🪙",
precio:55000
},


{
nombre:"2260 Gold 🪙",
precio:110000
},


{
nombre:"5800 Gold 🪙",
precio:275000
},


{
nombre:"Level Up Pass",
precio:15000
},


{
nombre:"Strike Pass Elite",
precio:27000
},


{
nombre:"Strike Pass Premium",
precio:58000
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



const packagesContainer =

document.getElementById(
"packagesContainer"
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









/* =========================================================
   DATOS INICIALES
========================================================= */


let productoSeleccionado = null;









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
   SERVER ID MOBILE LEGENDS
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
   CREAR PAQUETES
========================================================= */



function cargarPaquetes(){



if(!packagesContainer)

return;





packagesContainer.innerHTML = "";





juego.productos.forEach(

(producto,index)=>{



const card =

document.createElement(
"div"
);





card.className =

"diamond-card";





card.innerHTML = `


<h3>

${producto.nombre}

</h3>



<strong>

Gs.

${producto.precio.toLocaleString("es-PY")}

</strong>


`;






card.addEventListener(

"click",

()=>{





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


}





scrollPaso(
step2
);





}


);






packagesContainer.appendChild(
card
);





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
   INICIAR PAQUETES
========================================================= */


cargarPaquetes();

/* =========================================================
   VALIDAR DATOS
========================================================= */


function validarDatos(){


if(!productoSeleccionado){


alert(
"Selecciona un paquete primero."
);


return false;


}




if(!playerID.value.trim()){


alert(
"Ingresa tu ID de jugador."
);


playerID.focus();


return false;


}





if(
juego.servidor &&
!serverID.value.trim()
){


alert(
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



return JSON.parse(

localStorage.getItem(
"amerisstore_carrito"
)

)

||

[];

}







function guardarCarrito(carrito){


localStorage.setItem(

"amerisstore_carrito",

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






carrito.push(
producto
);





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





const div =

document.createElement(
"div"
);



div.className =

"store-notification";



div.textContent =

texto;




document.body.appendChild(
div
);





setTimeout(()=>{


div.classList.add(
"show"
);


},50);






setTimeout(()=>{


div.remove();


},2500);



}









/* =========================================================
   BOTÓN WHATSAPP
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
   BOTÓN AGREGAR CARRITO
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
