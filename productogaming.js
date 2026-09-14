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

"Compra UC para mejorar tu cuenta dentro de PUBG Mobile.",




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

Nunca solicitamos contraseña.

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




color:

"bloodstrike",



servidor:

false,





info:

`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br><br>

Nunca solicitamos contraseña.

`,





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





/* EXTRAS */


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
