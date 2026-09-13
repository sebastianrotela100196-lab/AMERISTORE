/* =========================================================
   AMERISSTORE
   PRODUCTO DINÁMICO
   CATALOGO MAESTRO V2
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





/* =========================================================
   BASE DE DATOS PRODUCTOS
========================================================= */


const productos = {





/* =========================================================
   NETFLIX
========================================================= */


netflix:{


categoria:"STREAMING",


nombre:"Netflix Premium",


imagen:
"assets/productos/netflix.png",


badge:
"⭐ MÁS VENDIDO",


descripcion:

"Disfruta Netflix Premium con diferentes opciones de acceso.",



planes:[



{

nombre:"Perfil Premium 4K",

tipo:
"Perfil compartido 4K",

duracion:
"1 mes",

precio:
32000,

etiqueta:
"⭐ Más vendido"

},




{

nombre:"Perfil TV",

tipo:
"Perfil exclusivo TV",

duracion:
"1 mes",

precio:
22000,

etiqueta:
"🔥 Mejor valor"

},




{

nombre:"Cuenta Completa",

tipo:
"Cuenta privada completa",

duracion:
"1 mes",

precio:
110000,

etiqueta:
"👑 Premium"

},




{

nombre:"Perfil Premium 4K",

tipo:
"Perfil compartido 4K",

duracion:
"3 meses",

precio:
90000,

etiqueta:
"💰 Ahorro"

},




{

nombre:"Perfil Premium 4K",

tipo:
"Perfil compartido 4K",

duracion:
"6 meses",

precio:
170000,

etiqueta:
"🔥 Mejor valor"

},




{

nombre:"Perfil Premium 4K",

tipo:
"Perfil compartido 4K",

duracion:
"12 meses",

precio:
320000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   DISNEY+
========================================================= */


disney:{


categoria:"STREAMING",


nombre:"Disney+ Premium",


imagen:
"assets/productos/disney.png",


badge:
"⭐ MÁS VENDIDO",


descripcion:

"Disney, Marvel, Pixar, Star Wars y contenido exclusivo.",



planes:[



{

nombre:"Disney Premium + ESPN",

tipo:
"Perfil Premium con deportes ESPN",

duracion:
"1 mes",

precio:
25000,

etiqueta:
"⭐ Más vendido"

},




{

nombre:"Disney Premium",

tipo:
"Perfil sin ESPN",

duracion:
"1 mes",

precio:
18000,

etiqueta:
"🔥 Mejor valor"

},




{

nombre:"Cuenta Completa",

tipo:
"Cuenta privada completa",

duracion:
"1 mes",

precio:
90000,

etiqueta:
"👑 Premium"

},




{

nombre:"Disney Premium + ESPN",

tipo:
"Perfil Premium con ESPN",

duracion:
"3 meses",

precio:
70000,

etiqueta:
"💰 Ahorro"

}


]

},







/* =========================================================
   MAX / HBO MAX
========================================================= */


HBOMAX:{


categoria:"STREAMING",


nombre:"Max / HBO Max",


imagen:
"assets/productos/HBOMAX.png",


badge:
"PREMIUM",


descripcion:

"Películas, series y contenido exclusivo de HBO.",



planes:[



{

nombre:"Perfil Estándar",

tipo:
"Perfil compartido",

duracion:
"1 mes",

precio:
18000,

etiqueta:
"🔥 Mejor valor"

},




{

nombre:"Perfil Platino",

tipo:
"Perfil Premium",

duracion:
"1 mes",

precio:
20000,

etiqueta:
"⭐ Popular"

},




{

nombre:"Cuenta Completa",

tipo:
"Cuenta privada",

duracion:
"1 mes",

precio:
55000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   PRIME VIDEO
========================================================= */


prime:{


categoria:"STREAMING",


nombre:"Prime Video",


imagen:
"assets/productos/prime.png",


badge:
"NUEVO",


descripcion:

"Películas, series y producciones originales de Amazon.",



planes:[



{

nombre:"Perfil Prime Video",

tipo:
"Perfil compartido",

duracion:
"1 mes",

precio:
25000,

etiqueta:
"⭐ Popular"

},



{

nombre:"Cuenta Completa",

tipo:
"Cuenta privada completa",

duracion:
"1 mes",

precio:
50000,

etiqueta:
"👑 Premium"

}


]

},


/* =========================================================
   CRUNCHYROLL
========================================================= */


crunchyroll:{


categoria:"STREAMING",


nombre:"Crunchyroll Premium",


imagen:
"assets/productos/crunchyroll.png",


badge:
"ANIME",


descripcion:

"Anime sin límites y contenido exclusivo.",



planes:[


{

nombre:"Perfil Premium",

tipo:
"Perfil compartido Premium",

duracion:
"1 mes",

precio:
15000,

etiqueta:
"⭐ Popular"

},



{

nombre:"Cuenta Completa",

tipo:
"Cuenta privada completa",

duracion:
"1 mes",

precio:
45000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   PARAMOUNT+
========================================================= */


paramount:{


categoria:"STREAMING",


nombre:"Paramount+",


imagen:
"assets/productos/paramount.png",


badge:
"PREMIUM",


descripcion:

"Series, películas y contenido exclusivo.",



planes:[



{

nombre:"Perfil Exclusivo",

tipo:
"Perfil privado",

duracion:
"1 mes",

precio:
20000,

etiqueta:
"⭐ Popular"

},



{

nombre:"Perfil No Exclusivo",

tipo:
"Perfil compartido",

duracion:
"1 mes",

precio:
15000,

etiqueta:
"🔥 Mejor valor"

},



{

nombre:"Cuenta Completa",

tipo:
"Cuenta privada",

duracion:
"1 mes",

precio:
50000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   SPOTIFY
========================================================= */


spotify:{


categoria:"MÚSICA",


nombre:"Spotify Premium",


imagen:
"assets/productos/spotify.png",


badge:
"⭐ MÁS VENDIDO",


descripcion:

"Música sin anuncios y sin límites.",



planes:[



{

nombre:"Spotify Premium",

tipo:
"Cuenta Premium",

duracion:
"1 mes",

precio:
25000,

etiqueta:
"⭐ Popular"

},



{

nombre:"Spotify Premium",

tipo:
"Cuenta Premium",

duracion:
"3 meses",

precio:
60000,

etiqueta:
"🔥 Mejor valor"

},



{

nombre:"Spotify Premium",

tipo:
"Cuenta Premium",

duracion:
"6 meses",

precio:
100000,

etiqueta:
"💰 Ahorro"

},



{

nombre:"Spotify Premium",

tipo:
"Cuenta Premium",

duracion:
"12 meses",

precio:
200000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   YOUTUBE PREMIUM
========================================================= */


youtube:{


categoria:"MÚSICA",


nombre:"YouTube Premium",


imagen:
"assets/productos/youtube.png",


badge:
"POPULAR",


descripcion:

"YouTube sin anuncios y YouTube Music incluido.",



planes:[



{

nombre:"YouTube Premium",

tipo:
"Cuenta Premium",

duracion:
"1 mes",

precio:
25000,

etiqueta:
"⭐ Popular"

},



{

nombre:"YouTube Premium",

tipo:
"Cuenta Premium",

duracion:
"3 meses",

precio:
60000,

etiqueta:
"🔥 Mejor valor"

},



{

nombre:"YouTube Premium",

tipo:
"Cuenta Premium",

duracion:
"6 meses",

precio:
110000,

etiqueta:
"💰 Ahorro"

},



{

nombre:"YouTube Premium",

tipo:
"Cuenta Premium",

duracion:
"12 meses",

precio:
200000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   DEEZER
========================================================= */


deezer:{


categoria:"MÚSICA",


nombre:"Deezer Premium",


imagen:
"assets/productos/deezer.png",


badge:
"NUEVO",


descripcion:

"Millones de canciones sin anuncios.",



planes:[


{

nombre:"Deezer Premium",

tipo:
"Cuenta Premium",

duracion:
"1 mes",

precio:
20000,

etiqueta:
"⭐ Nuevo"

}


]

},







/* =========================================================
   CHATGPT
========================================================= */


chatgpt:{


categoria:"IA TOOLS",


nombre:"ChatGPT",


imagen:
"assets/productos/chatgpt.png",


badge:
"POPULAR",


descripcion:

"Inteligencia artificial avanzada para crear, estudiar y trabajar.",



planes:[



{

nombre:"ChatGPT Plus",

tipo:
"Cuenta Premium",

duracion:
"1 mes",

precio:
35000,

etiqueta:
"⭐ Más vendido"

}


]

},







/* =========================================================
   GEMINI
========================================================= */


gemini:{


categoria:"IA TOOLS",


nombre:"Google One + Gemini Pro",


imagen:
"assets/productos/gemini.png",


badge:
"👑 PREMIUM",


descripcion:

"IA avanzada de Google con almacenamiento y funciones Premium.",



planes:[



{

nombre:"Gemini Pro",

tipo:
"Cuenta Premium",

duracion:
"12 meses",

precio:
89000,

etiqueta:
"⭐ Popular"

},



{

nombre:"Gemini Pro",

tipo:
"Cuenta Premium",

duracion:
"18 meses",

precio:
109000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   GOOGLE ONE FAMILIAR
========================================================= */


googleonefamiliar:{


categoria:"EXTRAS",


nombre:"Google One Familiar",


imagen:
"assets/productos/googleone.png",


badge:
"NUBE",


descripcion:

"Almacenamiento familiar en la nube.",



planes:[



{

nombre:"Google One Familiar",

tipo:
"Cuenta familiar",

duracion:
"18 meses",

precio:
180000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   CANVA PRO
========================================================= */


canva:{


categoria:"DISEÑO",


nombre:"Canva Pro",


imagen:
"assets/productos/canva.png",


badge:
"DISEÑO",


descripcion:

"Diseños profesionales con herramientas Premium.",



planes:[



{

nombre:"Canva Pro",

tipo:
"Cuenta Premium",

duracion:
"1 mes",

precio:
15000,

etiqueta:
"⭐ Popular"

},



{

nombre:"Canva Pro",

tipo:
"Cuenta Premium",

duracion:
"3 meses",

precio:
30000,

etiqueta:
"🔥 Mejor valor"

},



{

nombre:"Canva Pro",

tipo:
"Cuenta Premium",

duracion:
"6 meses",

precio:
45000,

etiqueta:
"💰 Ahorro"

},



{

nombre:"Canva Pro",

tipo:
"Cuenta Premium",

duracion:
"12 meses",

precio:
70000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   CAPCUT PRO
========================================================= */


capcut:{


categoria:"DISEÑO",


nombre:"CapCut Pro",


imagen:
"assets/productos/capcut.png",


badge:
"EDITOR",


descripcion:

"Edición profesional de videos con herramientas Premium.",



planes:[



{

nombre:"CapCut Pro",

tipo:
"Cuenta Premium",

duracion:
"30 días",

precio:
50000,

etiqueta:
"⭐ Popular"

}


]

},







/* =========================================================
   AUTODESK
========================================================= */


autodesk:{


categoria:"DISEÑO",


nombre:"Autodesk",


imagen:
"assets/productos/autodesk.png",


badge:
"PRO",


descripcion:

"Herramientas profesionales para arquitectura y diseño.",



planes:[



{

nombre:"Autodesk",

tipo:
"Licencia Premium",

duracion:
"12 meses",

precio:
60000,

etiqueta:
"👑 Premium"

}


]

},
/* =========================================================
   IPTV
========================================================= */


iptv:{


categoria:"STREAMING",


nombre:"IPTV",


imagen:
"assets/productos/iptv.png",


badge:
"🔥 MEJOR VALOR",


descripcion:

"Canales en vivo, deportes y entretenimiento digital.",



planes:[



{

nombre:"IPTV 1 Dispositivo",

tipo:
"Activación en 1 dispositivo",

duracion:
"1 mes",

precio:
19900,

etiqueta:
"⭐ Popular"

},



{

nombre:"IPTV 4 Dispositivos",

tipo:
"Multidispositivo",

duracion:
"1 mes",

precio:
34900,

etiqueta:
"🔥 Mejor valor"

},



{

nombre:"IPTV 4 Dispositivos",

tipo:
"Multidispositivo",

duracion:
"3 meses",

precio:
69900,

etiqueta:
"💰 Ahorro"

},



{

nombre:"IPTV 4 Dispositivos",

tipo:
"Multidispositivo",

duracion:
"6 meses",

precio:
149900,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   FLUJO TV
========================================================= */


flujotv:{


categoria:"STREAMING",


nombre:"Flujo TV",


imagen:
"assets/productos/flujotv.png",


badge:
"TOP VENTA",


descripcion:

"Canales en vivo, deportes y entretenimiento.",



planes:[



{

nombre:"Perfil 1 Dispositivo",

tipo:
"Perfil exclusivo",

duracion:
"1 mes",

precio:
40000,

etiqueta:
"⭐ Popular"

},



{

nombre:"Cuenta Completa",

tipo:
"Cuenta privada",

duracion:
"1 mes",

precio:
70000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   OLEADA TV
========================================================= */


oleadatv:{


categoria:"STREAMING",


nombre:"Oleada TV",


imagen:
"assets/productos/oleadatv.png",


badge:
"NUEVO",


descripcion:

"Televisión digital, películas y entretenimiento.",



planes:[



{

nombre:"Oleada TV",

tipo:
"Servicio digital",

duracion:
"1 mes",

precio:
30000,

etiqueta:
"⭐ Popular"

}


]

},







/* =========================================================
   DGO + LIGA 1 MAX
========================================================= */


dgo:{


categoria:"STREAMING",


nombre:"DGO + Liga 1 Max",


imagen:
"assets/productos/dgo.png",


badge:
"⚽ DEPORTES",


descripcion:

"Televisión deportiva y contenido premium.",



planes:[



{

nombre:"Perfil No Exclusivo",

tipo:
"Perfil compartido",

duracion:
"1 mes",

precio:
40000,

etiqueta:
"🔥 Mejor valor"

},



{

nombre:"Perfil Exclusivo + Liga 1 Max",

tipo:
"Perfil privado",

duracion:
"1 mes",

precio:
60000,

etiqueta:
"⭐ Premium"

},



{

nombre:"Cuenta Completa",

tipo:
"Cuenta privada",

duracion:
"1 mes",

precio:
100000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   APPLE TV + MLS
========================================================= */


appletv:{


categoria:"STREAMING",


nombre:"Apple TV + MLS",


imagen:
"assets/productos/appletv.png",


badge:
"PREMIUM",


descripcion:

"Apple TV+ y contenido deportivo MLS.",



planes:[



{

nombre:"Apple TV + MLS",

tipo:
"Perfil Premium",

duracion:
"1 mes",

precio:
25000,

etiqueta:
"⭐ Popular"

}


]

},







/* =========================================================
   VIKI RAKUTEN
========================================================= */


viki:{


categoria:"STREAMING",


nombre:"Viki Rakuten Pass",


imagen:
"assets/productos/viki.png",


badge:
"SERIES",


descripcion:

"Dramas, películas y contenido asiático.",



planes:[



{

nombre:"Viki Premium",

tipo:
"Perfil Premium",

duracion:
"1 mes",

precio:
25000,

etiqueta:
"⭐ Popular"

}


]

},







/* =========================================================
   VIX
========================================================= */


vix:{


categoria:"STREAMING",


nombre:"ViX Premium",


imagen:
"assets/productos/vix.png",


badge:
"PREMIUM",


descripcion:

"Series, películas y novelas.",



planes:[



{

nombre:"Perfil ViX",

tipo:
"Perfil Premium",

duracion:
"1 mes",

precio:
15000,

etiqueta:
"🔥 Mejor valor"

},



{

nombre:"Cuenta Completa",

tipo:
"Cuenta privada",

duracion:
"1 mes",

precio:
35000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   TELE LATINO
========================================================= */


telelatino:{


categoria:"STREAMING",


nombre:"Tele Latino",


imagen:
"assets/productos/telelatino.png",


badge:
"TV",


descripcion:

"Películas, canales y entretenimiento.",



planes:[



{

nombre:"Perfil Tele Latino",

tipo:
"Perfil individual",

duracion:
"1 mes",

precio:
30000,

etiqueta:
"⭐ Popular"

},



{

nombre:"Cuenta Completa",

tipo:
"3 dispositivos",

duracion:
"3 meses",

precio:
60000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   UNIVERSAL+
========================================================= */


universal:{


categoria:"STREAMING",


nombre:"Universal+",


imagen:
"assets/productos/universal.png",


badge:
"PREMIUM",


descripcion:

"Series, películas y contenido exclusivo.",



planes:[



{

nombre:"Universal+",

tipo:
"Perfil Premium",

duracion:
"1 mes",

precio:
25000,

etiqueta:
"⭐ Popular"

}


]

},







/* =========================================================
   WINDOWS 10 / 11 PRO
========================================================= */


windows:{


categoria:"EXTRAS",


nombre:"Windows 10 / 11 Pro",


imagen:
"assets/productos/windows.png",


badge:
"SOFTWARE",


descripcion:

"Licencia y activación profesional para PC.",



planes:[



{

nombre:"Windows Pro",

tipo:
"Licencia digital",

duracion:
"De por vida",

precio:
80000,

etiqueta:
"👑 Premium"

}


]

},







/* =========================================================
   NUMERO VIRTUAL
========================================================= */


numero:{


categoria:"EXTRAS",


nombre:"Número Virtual",


imagen:
"assets/productos/numero.png",


badge:
"DIGITAL",


descripcion:

"Números virtuales para servicios compatibles.",



planes:[



{

nombre:"Número Virtual",

tipo:
"Servicio digital",

duracion:
"Según disponibilidad",

precio:
70000,

etiqueta:
"⭐ Popular"

}


]

},







/* =========================================================
   SEGUIDORES
========================================================= */


seguidores:{


categoria:"EXTRAS",


nombre:"Seguidores Facebook / Instagram",


imagen:
"assets/productos/seguidores.png",


badge:
"SOCIAL",


descripcion:

"Servicios para redes sociales.",



planes:[



{

nombre:"1000 Seguidores",

tipo:
"Red social",

duracion:
"Entrega según servicio",

precio:
20000,

etiqueta:
"🔥 Popular"

}


]

},







/* =========================================================
   PORNHUB PREMIUM
========================================================= */


pornhub:{


categoria:"EXTRAS",


nombre:"Pornhub Premium",


imagen:
"assets/productos/pornhub.png",


badge:
"PREMIUM",


descripcion:

"Servicio digital adicional.",



planes:[



{

nombre:"Cuenta Premium",

tipo:
"Cuenta digital",

duracion:
"1 mes",

precio:
25000,

etiqueta:
"👑 Premium"

}


]

},
/* =========================================================
   OBTENER PRODUCTO ACTUAL
========================================================= */


const params =

new URLSearchParams(
window.location.search
);



const id =

params.get("id");



let producto =

productos[id];




if(!producto){


producto =

productos.netflix;


}









/* =========================================================
   ELEMENTOS HTML
========================================================= */


const image =

document.getElementById(
"productImage"
);



const name =

document.getElementById(
"productName"
);



const category =

document.getElementById(
"productCategory"
);



const description =

document.getElementById(
"productDescription"
);



const badge =

document.getElementById(
"productBadge"
);



const productPrice =

document.getElementById(
"productPrice"
);



const plansContainer =

document.getElementById(
"plansContainer"
);



const summaryProduct =

document.getElementById(
"summaryProduct"
);



const summaryPlan =

document.getElementById(
"summaryPlan"
);



const summaryType =

document.getElementById(
"summaryType"
);



const summaryDuration =

document.getElementById(
"summaryDuration"
);



const summaryPrice =

document.getElementById(
"summaryPrice"
);



const addButton =

document.getElementById(
"buyWhatsapp"
);









/* =========================================================
   CARGAR INFORMACION PRODUCTO
========================================================= */


document.title =

"AMERISSTORE | "

+

producto.nombre;





if(image){

image.src =

producto.imagen;


image.alt =

producto.nombre;

}




if(name){

name.textContent =

producto.nombre;

}




if(category){

category.textContent =

producto.categoria;

}




if(description){

description.textContent =

producto.descripcion;

}




if(badge){

badge.textContent =

producto.badge;

}









/* =========================================================
   PLAN ACTUAL
========================================================= */


let planActual =

producto.planes[0];









/* =========================================================
   CREAR CATALOGO INTERNO
========================================================= */


function cargarPlanes(){



if(!plansContainer)

return;




plansContainer.innerHTML = "";





producto.planes.forEach(

(plan,index)=>{



const card =

document.createElement(
"div"
);




card.className =

"plan-card";





if(index === 0){

card.classList.add(
"active"
);

}





card.innerHTML = `


<div class="plan-tag">

${plan.etiqueta}

</div>



<h4>

${plan.nombre}

</h4>



<p>

📌 ${plan.tipo}

</p>



<small>

📅 ${plan.duracion}

</small>



<strong>

Gs.
${plan.precio.toLocaleString("es-PY")}

</strong>


`;







card.addEventListener(

"click",

()=>{



document

.querySelectorAll(
".plan-card"
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





planActual =

plan;





actualizarResumen();





}


);






plansContainer.appendChild(
card
);



}


);



}









/* =========================================================
   ACTUALIZAR RESUMEN
========================================================= */


function actualizarResumen(){



if(summaryProduct){

summaryProduct.textContent =

producto.nombre;

}




if(summaryPlan){

summaryPlan.textContent =

planActual.nombre;

}




if(summaryType){

summaryType.textContent =

planActual.tipo;

}




if(summaryDuration){

summaryDuration.textContent =

planActual.duracion;

}




if(summaryPrice){

summaryPrice.textContent =

"Gs. "

+

planActual.precio.toLocaleString(
"es-PY"
);

}





if(productPrice){


productPrice.textContent =

"Gs. "

+

planActual.precio.toLocaleString(
"es-PY"
);



}



}









/* =========================================================
   CARRITO
========================================================= */


function obtenerCarrito(){


return JSON.parse(

localStorage.getItem(
CART_KEY
)

)

||

[];

}








function guardarCarrito(carrito){


localStorage.setItem(

CART_KEY,

JSON.stringify(
carrito
)

);


}









function agregarCarrito(){



let carrito =

obtenerCarrito();





carrito.push({



producto:

producto.nombre,



plan:

planActual.nombre,



tipo:

planActual.tipo,



duracion:

planActual.duracion,



etiqueta:

planActual.etiqueta,



precio:

planActual.precio,



imagen:

producto.imagen,



cantidad:

1



});







guardarCarrito(
carrito
);





mostrarMensaje(

"Producto agregado al carrito 🛒"

);





}









/* =========================================================
   BOTON CARRITO
========================================================= */


if(addButton){


addButton.textContent =

"🛒 Agregar al carrito";



addButton.onclick =

agregarCarrito;


}









/* =========================================================
   MENSAJE
========================================================= */


function mostrarMensaje(texto){



const box =

document.createElement(
"div"
);




box.className =

"store-notification";




box.textContent =

texto;




document.body.appendChild(
box
);






setTimeout(()=>{


box.remove();


},2500);



}









/* =========================================================
   INICIAR
========================================================= */


cargarPlanes();


actualizarResumen();





});
