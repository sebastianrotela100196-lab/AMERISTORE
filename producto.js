/* =====================================
   AMERISSTORE PRODUCT SYSTEM
   BASE DE DATOS
===================================== */


const whatsapp = "595981841136";



document.addEventListener(
"DOMContentLoaded",
()=>{





const productos = {






/* =========================
STREAMING
========================= */



netflix:{


categoria:"STREAMING",


nombre:"Netflix",


imagen:"assets/productos/netflix.png",


badge:"OFERTA",


descripcion:
"Series y películas ilimitadas en calidad Premium.",



precio:"Gs. 30.000",


precioAnterior:"Gs.45.000",



planes:[


{
nombre:"1 Mes",
precio:"Gs.30.000"
},


{
nombre:"3 Meses",
precio:"Gs.80.000"
},


{
nombre:"6 Meses",
precio:"Gs.150.000"
},


{
nombre:"1 Año",
precio:"Gs.280.000"
}


]

},







disney:{


categoria:"STREAMING",


nombre:"Disney+ Premium",


imagen:"assets/productos/disney.png",


badge:"OFERTA",


descripcion:
"Disney, Marvel, Star Wars y contenido exclusivo.",



precio:"Gs.25.000",


precioAnterior:"Gs.40.000",



planes:[


{
nombre:"1 Mes",
precio:"Gs.25.000"
}


]


},









HBOMAX:{


categoria:"STREAMING",


nombre:"HBO Max",


imagen:"assets/productos/HBOMAX.png",


badge:"PREMIUM",


descripcion:
"Películas, series y contenido exclusivo de HBO.",



precio:"Gs.15.000",


precioAnterior:"Gs.35.000",



planes:[


{
nombre:"1 Mes",
precio:"Gs.15.000"
}


]


},









paramount:{


categoria:"STREAMING",


nombre:"Paramount+",


imagen:"assets/productos/paramount.png",


badge:"OFERTA",


descripcion:
"Series, películas y contenido Premium.",



precio:"Gs.15.000",


precioAnterior:"Gs.30.000",



planes:[


{
nombre:"1 Mes",
precio:"Gs.15.000"
}


]


},







crunchyroll:{


categoria:"STREAMING",


nombre:"Crunchyroll Premium",


imagen:"assets/productos/crunchyroll.png",


badge:"POPULAR",


descripcion:
"El mejor catálogo de anime en streaming.",



precio:"Gs.12.000",


precioAnterior:"Gs.25.000",



planes:[


{
nombre:"1 Mes",
precio:"Gs.12.000"
}


]


},









flujotv:{


categoria:"STREAMING",


nombre:"Flujo TV",


imagen:"assets/productos/flujotv.png",


badge:"TOP VENTA",


descripcion:
"Canales en vivo, deportes y entretenimiento.",



precio:"Gs.30.000",


precioAnterior:"Gs.45.000",



planes:[


{
nombre:"1 Mes",
precio:"Gs.30.000"
},


{
nombre:"3 Meses",
precio:"Gs.80.000"
}


]


},










/* =========================
MÚSICA
========================= */



spotify:{


categoria:"MÚSICA",


nombre:"Spotify Premium",


imagen:"assets/productos/spotify.png",


badge:"POPULAR",


descripcion:
"Música sin anuncios y sin límites.",



precio:"Desde Gs.25.000",


precioAnterior:"Gs.45.000",



planes:[


{
nombre:"1 Mes",
precio:"Gs.25.000"
},


{
nombre:"3 Meses",
precio:"Gs.60.000"
},


{
nombre:"6 Meses",
precio:"Gs.100.000"
},


{
nombre:"1 Año",
precio:"Gs.200.000"
}


]


},
   /* =========================
YOUTUBE
========================= */


youtube:{


categoria:"MÚSICA",


nombre:"YouTube Premium",


imagen:"assets/productos/youtube.png",


badge:"OFERTA",


descripcion:
"YouTube sin anuncios, reproducción en segundo plano y YouTube Music.",



precio:"Desde Gs.25.000",


precioAnterior:"Gs.40.000",



planes:[


{
nombre:"1 Mes",
precio:"Gs.25.000"
},


{
nombre:"3 Meses",
precio:"Gs.60.000"
}


]


},









/* =========================
DISEÑO
========================= */



canva:{


categoria:"DISEÑO",


nombre:"Canva Pro",


imagen:"assets/productos/canva.png",


badge:"POPULAR",


descripcion:
"Diseños profesionales con todas las funciones Premium.",



precio:"Desde Gs.5.000",


precioAnterior:"Gs.15.000",



planes:[


{
nombre:"Cuenta Premium",
precio:"Gs.5.000"
}


]


},







capcut:{


categoria:"DISEÑO",


nombre:"CapCut Pro",


imagen:"assets/productos/capcut.png",


badge:"OFERTA",


descripcion:
"Edición de video profesional con herramientas Premium.",



precio:"Gs.30.000",


precioAnterior:"Gs.50.000",



planes:[


{
nombre:"1 Mes",
precio:"Gs.30.000"
}


]


},







autodesk:{


categoria:"DISEÑO",


nombre:"Autodesk",


imagen:"assets/productos/autodesk.png",


badge:"PRO",


descripcion:
"Herramientas profesionales para arquitectura y diseño.",



precio:"Consultar",


precioAnterior:"",



planes:[


{
nombre:"Licencia",
precio:"Consultar"
}


]


},










/* =========================
INTELIGENCIA ARTIFICIAL
========================= */



chatgpt:{


categoria:"INTELIGENCIA ARTIFICIAL",


nombre:"ChatGPT Plus",


imagen:"assets/productos/chatgpt.png",


badge:"POPULAR",


descripcion:
"IA avanzada para crear contenido, imágenes y trabajar.",



precio:"Gs.25.000",


precioAnterior:"Gs.50.000",



planes:[


{
nombre:"Cuenta Premium",
precio:"Gs.25.000"
}


]


},







gemini:{


categoria:"INTELIGENCIA ARTIFICIAL",


nombre:"Google Gemini Pro",


imagen:"assets/productos/gemini.png",


badge:"PREMIUM",


descripcion:
"IA avanzada de Google con funciones Premium.",



precio:"Desde Gs.89.000",


precioAnterior:"Gs.120.000",



planes:[


{
nombre:"Plan Premium",
precio:"Desde Gs.89.000"
}


]


},











/* =========================
GAMING
========================= */



freefire:{


categoria:"GAMING",


nombre:"Recargas Free Fire",


imagen:"assets/productos/freefire.png",


badge:"TOP VENTA",


descripcion:
"Diamantes Free Fire mediante ID de jugador.",



precio:"Desde Gs.5.000",


precioAnterior:"",



planes:[


{
nombre:"100 Diamantes",
precio:"Gs.5.000"
},


{
nombre:"310 Diamantes",
precio:"Gs.15.000"
},


{
nombre:"520 Diamantes",
precio:"Gs.25.000"
}


]


},







pubg:{


categoria:"GAMING",


nombre:"PUBG Mobile",


imagen:"assets/productos/pubg.png",


badge:"OFERTA",


descripcion:
"Recargas UC para PUBG Mobile.",



precio:"Desde Gs.10.000",


precioAnterior:"",



planes:[


{
nombre:"UC Premium",
precio:"Desde Gs.10.000"
}


]


},







bloodstrike:{


categoria:"GAMING",


nombre:"Blood Strike",


imagen:"assets/productos/bloodstrike.png",


badge:"NUEVO",


descripcion:
"Créditos y recargas para Blood Strike.",



precio:"Desde Gs.10.000",


precioAnterior:"",



planes:[


{
nombre:"Créditos",
precio:"Desde Gs.10.000"
}


]


},







mobilelegends:{


categoria:"GAMING",


nombre:"Mobile Legends",


imagen:"assets/productos/mobilelegends.png",


badge:"POPULAR",


descripcion:
"Diamantes para tus héroes favoritos.",



precio:"Desde Gs.10.000",


precioAnterior:"",



planes:[


{
nombre:"Diamantes",
precio:"Desde Gs.10.000"
}


]


},
   /* =====================================
   CARGAR PRODUCTO SEGÚN URL
===================================== */


const params = new URLSearchParams(
window.location.search
);



const productoID = params.get("id");



let productoActual = productos[productoID];





// Si no existe carga Netflix por defecto

if(!productoActual){


productoActual = productos.netflix;


}









/* =====================================
   CAMBIAR DATOS EN HTML
===================================== */



document.title =

"AMERISSTORE | " +

productoActual.nombre;








const productImage = document.getElementById(
"productImage"
);



const productName = document.getElementById(
"productName"
);



const productCategory = document.getElementById(
"productCategory"
);



const productDescription = document.getElementById(
"productDescription"
);



const productPrice = document.getElementById(
"productPrice"
);



const oldPrice = document.getElementById(
"oldPrice"
);



const productBadge = document.getElementById(
"productBadge"
);








if(productImage){


productImage.src = productoActual.imagen;


productImage.alt = productoActual.nombre;


}







if(productName){


productName.innerHTML =
productoActual.nombre;


}







if(productCategory){


productCategory.innerHTML =
productoActual.categoria;


}







if(productDescription){


productDescription.innerHTML =
productoActual.descripcion;


}







if(productPrice){


productPrice.innerHTML =
productoActual.precio;


}







if(oldPrice){


oldPrice.innerHTML =
productoActual.precioAnterior;


}







if(productBadge){


productBadge.innerHTML =
productoActual.badge;


}








/* =====================================
   BREADCRUMB
===================================== */


const breadcrumbCategory =
document.getElementById(
"breadcrumbCategory"
);



const breadcrumbName =
document.getElementById(
"breadcrumbName"
);






if(breadcrumbCategory){


breadcrumbCategory.innerHTML =
productoActual.categoria;


}






if(breadcrumbName){


breadcrumbName.innerHTML =
productoActual.nombre;


}
   /* =====================================
   PLANES DINÁMICOS
===================================== */


const plansContainer =
document.getElementById(
"plansContainer"
);



let planSeleccionado =
productoActual.planes[0];









function cargarPlanes(){



if(!plansContainer)
return;





plansContainer.innerHTML="";






productoActual.planes.forEach(

(plan,index)=>{





let card =
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








card.innerHTML = `


<h4>

${plan.nombre}

</h4>


<strong>

${plan.precio}

</strong>


`;








card.addEventListener(
"click",
()=>{



document
.querySelectorAll(".plan-card")
.forEach(
(item)=>{


item.classList.remove(
"active"
);


});







card.classList.add(
"active"
);







planSeleccionado = plan;







actualizarResumen();




});








plansContainer.appendChild(
card
);



}



);




}









/* =====================================
   RESUMEN
===================================== */



function actualizarResumen(){



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






if(summaryProduct){


summaryProduct.innerHTML =
productoActual.nombre;


}







if(summaryPlan){


summaryPlan.innerHTML =
planSeleccionado.nombre;


}







if(summaryPrice){


summaryPrice.innerHTML =
planSeleccionado.precio;


}



}









cargarPlanes();



actualizarResumen();









/* =====================================
   WHATSAPP
===================================== */



function enviarWhatsapp(){





let mensaje =

`Hola AMERISSTORE 👋


Quiero adquirir un servicio digital:


📦 Producto:
${productoActual.nombre}


📂 Categoría:
${productoActual.categoria}


📌 Plan:
${planSeleccionado.nombre}


💰 Precio:
${planSeleccionado.precio}


Quiero realizar la activación.
`;







let url =

"https://wa.me/" +

whatsapp +

"?text=" +

encodeURIComponent(
mensaje
);






window.open(
url,
"_blank"
);



}









const botonCompra =
document.getElementById(
"buyWhatsapp"
);




const botonCompra2 =
document.getElementById(
"buyWhatsappBottom"
);








if(botonCompra){


botonCompra.addEventListener(
"click",
enviarWhatsapp
);


}







if(botonCompra2){


botonCompra2.addEventListener(
"click",
enviarWhatsapp
);


}








});
