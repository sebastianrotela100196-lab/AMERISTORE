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
   OBTENER JUEGO
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
   ELEMENTOS
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






const totalPrice =

document.getElementById(
"totalPrice"
);






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







const buyWhatsapp =

document.getElementById(
"buyWhatsapp"
);



const addCartButton =

document.getElementById(
"addCartButton"
);






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







const gameInfo =

document.getElementById(
"gameInfo"
);









let productoSeleccionado = null;



let cantidad = 1;









/* =========================================================
   CARGAR INFORMACIÓN
========================================================= */


document.title =

"AMERISSTORE | "

+

juego.nombre;







if(gameTitle)

gameTitle.textContent =

juego.nombre;








if(gameCategory)

gameCategory.textContent =

juego.categoria;








if(gameDescription)

gameDescription.textContent =

juego.descripcion;








if(gameImage){


gameImage.src =

juego.imagen;



gameImage.alt =

juego.nombre;


}








if(gameBadge)

gameBadge.textContent =

juego.badge;








if(gameInfo)

gameInfo.innerHTML =

juego.info;









/* =========================================================
   SERVER ID
========================================================= */


if(juego.servidor){


if(serverContainer)

serverContainer.style.display =

"block";




if(summaryServerRow)

summaryServerRow.style.display =

"flex";


}
/* =========================================================
   CREAR TARJETAS
========================================================= */


function crearTarjeta(producto){



const card =

document.createElement(
"div"
);







/* =========================
   RECARGAS
========================= */


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









/* =========================
   EXTRAS
========================= */


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











/* =========================
   CLICK
========================= */


card.addEventListener(

"click",

()=>{






/* SOLO RECARGAS SELECCIONABLES */


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



if(mainContainer)

mainContainer.innerHTML = "";





if(extraContainer)

extraContainer.innerHTML = "";








juego.productos.forEach(

(producto)=>{






const tarjeta =

crearTarjeta(
producto
);







if(producto.tipo === "extra"){





if(extraContainer)

extraContainer.appendChild(
tarjeta
);






}

else{





if(mainContainer)

mainContainer.appendChild(
tarjeta
);





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
   GUIA ID
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
   TEXTO GUIA DINAMICO
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

4. Envíanos tu ID para realizar la recarga.


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

4. Envíanos el ID junto al paquete.


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
   INICIAR PRODUCTOS
========================================================= */


cargarProductos();
/* =========================================================
   CANTIDAD Y TOTAL
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








if(summaryPrice){


summaryPrice.textContent =

"Gs. "

+

productoSeleccionado.precio.toLocaleString(
"es-PY"
);



}



}









/* =========================
   SUMAR
========================= */


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





/* =========================
   RESTAR
========================= */


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

"Selecciona una recarga primero."

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



playerID.focus();



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








summaryProduct.textContent =

productoSeleccionado.nombre;








summaryID.textContent =

playerID.value.trim();








if(juego.servidor){



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
   NOTIFICACIONES
========================================================= */


function mostrarNotificacion(texto){



const vieja =

document.querySelector(

".store-notification"

);






if(vieja)

vieja.remove();







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
   FAQ DINÁMICO
========================================================= */


const faqText = {


mobilelegends:[

"¿Cómo compro diamantes?",

"Selecciona tus diamantes, ingresa tu ID y confirma por WhatsApp.",

"¿Necesito contraseña?",

"No. Solo necesitamos ID y Server ID."

],



pubg:[

"¿Cómo compro UC?",

"Selecciona el paquete, coloca tu ID y realiza el pedido.",

"¿Necesito contraseña?",

"No. Solo necesitamos tu ID."

],



bloodstrike:[

"¿Cómo compro Gold?",

"Elige tu paquete, ingresa tu ID y confirma la compra.",

"¿Necesito contraseña?",

"No. Nunca solicitamos contraseña."

],



codmobile:[

"¿Cómo compro CP?",

"Selecciona tus CP, coloca tu UID y realiza el pedido.",

"¿Necesito contraseña?",

"No. Solo necesitamos tu UID."

]

};








/* =========================================================
   FINAL
========================================================= */


});
