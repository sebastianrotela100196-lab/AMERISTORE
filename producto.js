/* =========================================================
   AMERISSTORE
   PRODUCTO DINÁMICO + CARRITO
========================================================= */


"use strict";


document.addEventListener(
"DOMContentLoaded",
()=>{


/* =========================================================
   CONFIG
========================================================= */


const CART_KEY =
"amerisstore_carrito";



/* =========================================================
   BASE DE DATOS PRODUCTOS
========================================================= */


const productos = {


netflix:{

categoria:"STREAMING",

nombre:"Netflix Premium",

imagen:
"assets/productos/netflix.png",

badge:"OFERTA",

descripcion:
"Series y películas ilimitadas en calidad Premium.",


planes:[

{
nombre:"1 Mes",
precio:30000
},

{
nombre:"3 Meses",
precio:70000
},

{
nombre:"6 Meses",
precio:140000
},

{
nombre:"12 Meses",
precio:280000
}

]

},



disney:{

categoria:"STREAMING",

nombre:"Disney+ Premium",

imagen:
"assets/productos/disney.png",

badge:"OFERTA",

descripcion:
"Disney, Marvel, Star Wars y contenido exclusivo.",


planes:[

{
nombre:"1 Mes",
precio:25000
}

]

},



HBOMAX:{

categoria:"STREAMING",

nombre:"HBO Max",

imagen:
"assets/productos/HBOMAX.png",

badge:"PREMIUM",

descripcion:
"Películas, series y contenido exclusivo de HBO.",


planes:[

{
nombre:"1 Mes",
precio:15000
}

]

},



paramount:{

categoria:"STREAMING",

nombre:"Paramount+",

imagen:
"assets/productos/paramount.png",

badge:"OFERTA",

descripcion:
"Series, películas y contenido Premium.",


planes:[

{
nombre:"1 Mes",
precio:15000
}

]

},



crunchyroll:{

categoria:"STREAMING",

nombre:"Crunchyroll Premium",

imagen:
"assets/productos/crunchyroll.png",

badge:"POPULAR",

descripcion:
"Anime sin límites y contenido exclusivo.",


planes:[

{
nombre:"1 Mes",
precio:12000
}

]

},



flujotv:{

categoria:"STREAMING",

nombre:"Flujo TV",

imagen:
"assets/productos/flujotv.png",

badge:"TOP VENTA",

descripcion:
"Canales en vivo, deportes y entretenimiento.",


planes:[

{
nombre:"1 Mes",
precio:30000
},

{
nombre:"3 Meses",
precio:80000
}

]

},



spotify:{

categoria:"MÚSICA",

nombre:"Spotify Premium",

imagen:
"assets/productos/spotify.png",

badge:"POPULAR",

descripcion:
"Música sin anuncios y sin límites.",


planes:[

{
nombre:"1 Mes",
precio:25000
},

{
nombre:"3 Meses",
precio:60000
},

{
nombre:"6 Meses",
precio:100000
},

{
nombre:"1 Año",
precio:200000
}

]

},



canva:{

categoria:"DISEÑO",

nombre:"Canva Pro",

imagen:
"assets/productos/canva.png",

badge:"PRO",

descripcion:
"Diseños profesionales con herramientas Premium.",


planes:[

{
nombre:"Cuenta Premium",
precio:5000
}

]

},



chatgpt:{

categoria:"IA",

nombre:"ChatGPT Plus",

imagen:
"assets/productos/chatgpt.png",

badge:"POPULAR",

descripcion:
"Inteligencia artificial avanzada para crear contenido.",


planes:[

{
nombre:"Cuenta Premium",
precio:25000
}

]

}



};





/* =========================================================
   OBTENER PRODUCTO URL
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
   ELEMENTOS
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


const plans =
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


const summaryPrice =
document.getElementById(
"summaryPrice"
);


const addButton =
document.getElementById(
"buyWhatsapp"
);


const addButtonBottom =
document.getElementById(
"buyWhatsappBottom"
);





/* =========================================================
   CARGAR DATOS
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
   PLAN SELECCIONADO
========================================================= */


let planActual =
producto.planes[0];





/* =========================================================
   CARGAR PLANES
========================================================= */


function cargarPlanes(){


if(!plans)
return;



plans.innerHTML="";



producto.planes.forEach(

(plan,index)=>{


const card =
document.createElement(
"div"
);



card.className =
"plan-card";



if(index===0){

card.classList.add(
"active"
);

}



card.innerHTML=`

<h4>
${plan.nombre}
</h4>

<strong>
Gs. ${plan.precio.toLocaleString("es-PY")}
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



plans.appendChild(
card
);


}


);


}






/* =========================================================
   RESUMEN
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



if(summaryPrice){

summaryPrice.textContent =

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

nombre:
producto.nombre,

plan:
planActual.nombre,

precio:
planActual.precio,

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
   BOTONES
========================================================= */


if(addButton){


addButton.textContent =
"🛒 Agregar al carrito";


addButton.onclick =
agregarCarrito;


}



if(addButtonBottom){


addButtonBottom.textContent =
"🛒 Agregar al carrito";


addButtonBottom.onclick =
agregarCarrito;


}





/* =========================================================
   MENSAJE
========================================================= */


function mostrarMensaje(texto){


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

div.remove();

},2500);



}





/* =========================================================
   INICIAR
========================================================= */


cargarPlanes();

actualizarResumen();



});
