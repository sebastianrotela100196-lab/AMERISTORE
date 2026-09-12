/* =====================================
   AMERISSTORE PRODUCT SYSTEM
   Producto dinámico + WhatsApp
===================================== */



const whatsapp = "595981841136";





document.addEventListener(
"DOMContentLoaded",
()=>{





console.log(
"Producto AMERISSTORE cargado 🚀"
);








/* =====================================
   BASE DE DATOS PRODUCTOS
===================================== */


const productos = {





spotify:{


categoria:
"MÚSICA",


nombre:
"Spotify Premium",


imagen:
"assets/productos/spotify.png",


descripcion:
"Escucha música sin anuncios, descarga canciones y disfruta contenido Premium.",


planes:[

{
nombre:"1 Mes",
precio:"Gs. 25.000"
},

{
nombre:"3 Meses",
precio:"Gs. 60.000"
},

{
nombre:"6 Meses",
precio:"Gs. 100.000"
},

{
nombre:"1 Año",
precio:"Gs. 200.000"
}


]


},







netflix:{


categoria:
"STREAMING",


nombre:
"Netflix Premium",


imagen:
"assets/productos/netflix.png",


descripcion:
"Series y películas ilimitadas en calidad Premium.",


planes:[

{
nombre:"1 Mes",
precio:"Gs. 30.000"
}

]


},







disney:{


categoria:
"STREAMING",


nombre:
"Disney+ + ESPN",


imagen:
"assets/productos/disney.png",


descripcion:
"Disney, Marvel, Star Wars y deportes en vivo.",


planes:[

{
nombre:"1 Mes",
precio:"Gs. 25.000"
}

]


},








max:{


categoria:
"STREAMING",


nombre:
"Max",


imagen:
"assets/productos/max.png",


descripcion:
"HBO, Warner Bros, DC y contenido Premium.",


planes:[

{
nombre:"1 Mes",
precio:"Gs. 15.000"
}

]


},







chatgpt:{


categoria:
"INTELIGENCIA ARTIFICIAL",


nombre:
"ChatGPT Plus",


imagen:
"assets/productos/chatgpt.png",


descripcion:
"Accede a inteligencia artificial avanzada para crear y trabajar.",


planes:[

{
nombre:"Cuenta Premium",
precio:"Gs. 25.000"
}

]


},








canva:{


categoria:
"DISEÑO",


nombre:
"Canva Pro",


imagen:
"assets/productos/canva.png",


descripcion:
"Diseña contenido profesional con todas las herramientas Premium.",


planes:[

{
nombre:"Plan Premium",
precio:"Desde Gs. 5.000"
}

]


}





};






/* =====================================
   OBTENER PRODUCTO URL
===================================== */


const urlParams =

new URLSearchParams(
window.location.search
);



const productoID =

urlParams.get(
"id"
);



let productoActual =

productos[productoID];



if(!productoActual){


productoActual = productos.spotify;


}







/* =====================================
   MOSTRAR INFORMACIÓN
===================================== */


document.getElementById(
"productImage"
).src = productoActual.imagen;



document.getElementById(
"productImage"
).alt = productoActual.nombre;





document.getElementById(
"productCategory"
).innerHTML =
productoActual.categoria;




document.getElementById(
"breadcrumbCategory"
).innerHTML =
productoActual.categoria;





document.getElementById(
"productName"
).innerHTML =
productoActual.nombre;





document.getElementById(
"productDescription"
).innerHTML =
productoActual.descripcion;

/* =====================================
   GENERAR PLANES
===================================== */


const plansContainer =

document.querySelector(
".plans-list"
);



let planSeleccionado =

productoActual.planes[0];





function cargarPlanes(){



plansContainer.innerHTML = "";




productoActual.planes.forEach(
(plan,index)=>{





const div =

document.createElement(
"div"
);



div.className =

"plan-card";





if(index === 0){

div.classList.add(
"active"
);

}






div.innerHTML = `


<h4>

${plan.nombre}

</h4>


<strong>

${plan.precio}

</strong>


`;







div.addEventListener(
"click",
()=>{





document
.querySelectorAll(
".plan-card"
)
.forEach(card=>{


card.classList.remove(
"active"
);


});





div.classList.add(
"active"
);





planSeleccionado = plan;





actualizarPrecio();




});








plansContainer.appendChild(
div
);





}


);



}









/* =====================================
   ACTUALIZAR PRECIO
===================================== */


function actualizarPrecio(){



const price =

document.getElementById(
"productPrice"
);



if(price){


price.innerHTML =

planSeleccionado.precio;



}



}













/* =====================================
   CARGAR PRODUCTO
===================================== */


cargarPlanes();


actualizarPrecio();









/* =====================================
   BOTON WHATSAPP
===================================== */


const botonCompra =

document.getElementById(
"buyWhatsapp"
);





const botonCompraFinal =

document.getElementById(
"buyWhatsappBottom"
);






function abrirWhatsapp(){



let mensaje =



`Hola AMERISSTORE 👋🚀


Estoy interesado en comprar:


📦 Producto:
${productoActual.nombre}


📌 Plan:
${planSeleccionado.nombre}


💰 Precio:
${planSeleccionado.precio}


¿Me pueden ayudar con la activación?


Gracias.`;


window.open(

`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`,

"_blank"

);



}







if(botonCompra){


botonCompra.addEventListener(
"click",
abrirWhatsapp
);


}






if(botonCompraFinal){


botonCompraFinal.addEventListener(
"click",
abrirWhatsapp
);


}
/* =====================================
   PRODUCTOS ADICIONALES
===================================== */



Object.assign(productos,{






prime:{


categoria:
"STREAMING",


nombre:
"Prime Video",


imagen:
"assets/productos/prime.png",


descripcion:
"Películas, series exclusivas y contenido original.",


planes:[

{
nombre:"Plan Premium",
precio:"Gs. 20.000"
}

]


},






crunchyroll:{


categoria:
"STREAMING",


nombre:
"Crunchyroll",


imagen:
"assets/productos/crunchyroll.png",


descripcion:
"El mejor catálogo de anime en streaming.",


planes:[

{
nombre:"Plan Premium",
precio:"Gs. 12.000"
}

]


},






flujo:{


categoria:
"STREAMING",


nombre:
"Flujo TV",


imagen:
"assets/productos/flujo.png",


descripcion:
"Canales en vivo, deportes y entretenimiento.",


planes:[

{
nombre:"Servicio Premium",
precio:"Gs. 30.000"
}

]


},






paramount:{


categoria:
"STREAMING",


nombre:
"Paramount+",


imagen:
"assets/productos/paramount.png",


descripcion:
"Series, películas y eventos deportivos.",


planes:[

{
nombre:"Plan Premium",
precio:"Gs. 15.000"
}

]


},






vix:{


categoria:
"STREAMING",


nombre:
"Vix+",


imagen:
"assets/productos/vix.png",


descripcion:
"Contenido latino, novelas, películas y deportes.",


planes:[

{
nombre:"Plan Premium",
precio:"Gs. 12.000"
}

]


},






youtube:{


categoria:
"MÚSICA",


nombre:
"YouTube Premium",


imagen:
"assets/productos/youtube.png",


descripcion:
"YouTube sin anuncios y YouTube Music incluido.",


planes:[

{
nombre:"1 Mes",
precio:"Gs. 25.000"
},


{
nombre:"3 Meses",
precio:"Gs. 60.000"
}

]


},






gemini:{


categoria:
"INTELIGENCIA ARTIFICIAL",


nombre:
"Google Gemini Pro",


imagen:
"assets/productos/gemini.png",


descripcion:
"IA avanzada de Google con funciones Premium.",


planes:[

{
nombre:"Premium",
precio:"Desde Gs. 89.000"
}

]


},






capcut:{


categoria:
"DISEÑO",


nombre:
"CapCut Pro",


imagen:
"assets/productos/capcut.png",


descripcion:
"Edición de video profesional con herramientas Premium.",


planes:[

{
nombre:"1 Mes",
precio:"Gs. 30.000"
}

]


},






nordvpn:{


categoria:
"SEGURIDAD",


nombre:
"NordVPN",


imagen:
"assets/productos/nordvpn.png",


descripcion:
"Protege tu conexión y navega de forma segura.",


planes:[

{
nombre:"Premium",
precio:"Gs. 25.000"
}

]


},






duolingo:{


categoria:
"EDUCACIÓN",


nombre:
"Duolingo Super",


imagen:
"assets/productos/duolingo.png",


descripcion:
"Aprende idiomas sin anuncios y con funciones avanzadas.",


planes:[

{
nombre:"30 días",
precio:"Gs. 25.000"
},


{
nombre:"1 Año",
precio:"Gs. 150.000"
}

]


}





});









/* =====================================
   TITULO DINAMICO
===================================== */


document.title =


"AMERISSTORE | " +

productoActual.nombre;









/* =====================================
   MEJORAR MENSAJE WHATSAPP
===================================== */


function abrirWhatsapp(){



let mensaje =



`Hola AMERISSTORE 👋🚀


Quiero adquirir un servicio digital.


📦 Producto:
${productoActual.nombre}


🏷 Categoría:
${productoActual.categoria}


📌 Plan seleccionado:
${planSeleccionado.nombre}


💰 Precio:
${planSeleccionado.precio}



Quisiera realizar la activación.


Gracias por la atención 🙌`;






let url =

`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;



window.open(

url,

"_blank"

);



}









/* =====================================
   SI NO EXISTE IMAGEN
===================================== */


const imagenProducto =

document.getElementById(
"productImage"
);



imagenProducto.onerror = ()=>{


imagenProducto.src =

"assets/productos/default.png";


};







console.log(

"Producto cargado:",

productoActual.nombre

);



});
