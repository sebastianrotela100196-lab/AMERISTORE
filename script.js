/* =========================================================
   AMERISSTORE
   SCRIPT GENERAL LIMPIO
========================================================= */


"use strict";


document.addEventListener(
"DOMContentLoaded",
()=>{



/* =========================================================
   CONFIGURACIÓN
========================================================= */


const CART_KEY =

"amerisstore_carrito";



const WHATSAPP_STORE =

"595981841136";









/* =========================================================
   CARRITO - CONTADOR GLOBAL
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

catch(error){


return [];


}


}









function obtenerCantidadCarrito(){


const carrito =

obtenerCarrito();



return carrito.reduce(

(total,item)=>{


return total +

Number(
item.cantidad || 1
);


},

0

);


}









function obtenerTotalCarrito(){


const carrito =

obtenerCarrito();



return carrito.reduce(

(total,item)=>{


return total +

(
Number(
item.precio || 0
)

*

Number(
item.cantidad || 1
)

);



},

0

);


}









function formatearGs(numero){


return (

"Gs. "

+

Number(numero || 0)

.toLocaleString(
"es-PY"
)

);


}









function actualizarCarritoHeader(){



const contador =

document.getElementById(
"cart-count"
);




const total =

document.getElementById(
"cart-total"
);





if(contador){


contador.textContent =

obtenerCantidadCarrito();


}





if(total){


total.textContent =

formatearGs(
obtenerTotalCarrito()
);


}




}









/* =========================================================
   WHATSAPP GENERAL
========================================================= */


function abrirWhatsApp(mensaje){



const url =


"https://wa.me/"

+

WHATSAPP_STORE

+

"?text="

+

encodeURIComponent(
mensaje
);





window.open(

url,

"_blank"

);



}









function iniciarWhatsapp(){



const botones =

document.querySelectorAll(

".floating-whatsapp, .btn-whatsapp"

);





botones.forEach(

boton=>{



boton.addEventListener(

"click",

()=>{


const mensaje =

"Hola AMERISSTORE 👋 Quiero consultar sobre un servicio.";





abrirWhatsApp(
mensaje
);



}

);



}

);



}









/* =========================================================
   INICIO
========================================================= */


actualizarCarritoHeader();


iniciarWhatsapp();





});
/* =========================================================
   MENU MOVIL
========================================================= */


function iniciarMenuMovil(){



const boton =

document.getElementById(
"menu-toggle"
);



const menu =

document.getElementById(
"main-menu"
);





if(!boton || !menu)

return;







boton.addEventListener(

"click",

()=>{



const abierto =

menu.classList.toggle(
"open"
);





boton.setAttribute(

"aria-expanded",

String(
abierto
)

);



boton.textContent =

abierto

?

"✕"

:

"☰";



}



);







const enlaces =

menu.querySelectorAll(
"a"
);





enlaces.forEach(

enlace=>{



enlace.addEventListener(

"click",

()=>{



menu.classList.remove(
"open"
);



boton.setAttribute(

"aria-expanded",

"false"

);



boton.textContent =
"☰";



}

);



}

);



}









/* =========================================================
   FILTROS CATALOGO
========================================================= */


function iniciarFiltros(){



const botones =

document.querySelectorAll(

".filter-btn"

);





if(botones.length===0)

return;







botones.forEach(

boton=>{



boton.addEventListener(

"click",

()=>{



botones.forEach(

item=>{


item.classList.remove(
"active"
);


}

);






boton.classList.add(
"active"
);






const filtro =

boton.dataset.filter;





const evento =

new CustomEvent(

"amerisFiltro",

{


detail:filtro


}

);





document.dispatchEvent(
evento
);





}

);



}

);



}









/* =========================================================
   LINKS ACTUALES
========================================================= */


function marcarPaginaActual(){



const pagina =

window.location.pathname;



const enlaces =

document.querySelectorAll(
".menu a"
);






enlaces.forEach(

enlace=>{



const href =

enlace.getAttribute(
"href"
);




if(

href &&

pagina.includes(href)

){


enlace.classList.add(
"active"
);


}



}

);



}









/* =========================================================
   INICIALIZAR FUNCIONES GENERALES
========================================================= */


iniciarMenuMovil();


iniciarFiltros();


marcarPaginaActual();
