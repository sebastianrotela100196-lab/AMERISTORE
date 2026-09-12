/* =====================================
   CTA FINAL PRODUCTO
===================================== */


.product-final{


width:90%;


max-width:1200px;


margin:

120px auto;



padding:

80px 40px;



background:

linear-gradient(

145deg,

#151515,

#080808

);



border:

1px solid var(--border);



border-radius:35px;



text-align:center;



}





.product-final h2{


font-size:45px;



font-weight:1000;



margin-bottom:20px;



}





.product-final p{


color:#999;



font-size:18px;



margin-bottom:35px;



}









/* =====================================
   WHATSAPP FLOTANTE
===================================== */


.floating-whatsapp{


position:fixed;



right:25px;



bottom:25px;



width:65px;



height:65px;



background:#25D366;



border-radius:50%;



display:flex;



align-items:center;



justify-content:center;



font-size:32px;



z-index:999;



box-shadow:

0 0 30px rgba(37,211,102,.5);



transition:.3s;



}



.floating-whatsapp:hover{


transform:

scale(1.1);



}









/* =====================================
   FOOTER PRODUCTO
===================================== */


.product-footer{


margin-top:100px;



padding:

60px 20px;



background:

#080808;



border-top:

1px solid var(--border);



text-align:center;



}





.product-footer h2{


font-size:38px;



font-weight:1000;



}





.product-footer h2 span{


color:

var(--green);



}





.product-footer p{


color:#888;



margin:

20px 0;



}





.product-footer .footer-links{


display:flex;



justify-content:center;



gap:35px;



margin:

30px 0;



}





.product-footer a{


color:#ccc;



font-weight:800;



transition:.3s;



}



.product-footer a:hover{


color:

var(--green);



}









/* =====================================
   RESPONSIVE PRODUCTO
===================================== */



@media(max-width:1100px){



.product-detail{


grid-template-columns:

1fr;



gap:50px;



}



.main-product-image{


height:450px;



}



.product-information h1{


font-size:45px;



}



.plans-list{


grid-template-columns:

1fr;



}



.product-benefits{


grid-template-columns:

1fr;



}



.steps{


grid-template-columns:

1fr;



}



.devices{


grid-template-columns:

repeat(2,1fr);



}



.trust-section{


grid-template-columns:

1fr;



}



}









@media(max-width:600px){



.product-header{


width:92%;



height:auto;



padding:

25px 0;



flex-direction:column;



gap:20px;



}



.product-logo{


font-size:28px;



}



.product-actions{


width:100%;



justify-content:center;



}





.breadcrumb{


width:92%;



font-size:12px;



}



.product-detail{


width:92%;



margin-top:20px;



}



.main-product-image{


height:330px;



padding:30px;



border-radius:25px;



}



.product-information h1{


font-size:35px;



}



.product-information p{


font-size:15px;



}



.product-price-box strong{


font-size:28px;



}



.product-price-box del{


font-size:14px;



}





.product-plans h2{


font-size:24px;



}



.plan-card{


padding:20px;



}



.purchase-box{


padding:20px;



}



.product-final{


width:92%;



padding:

50px 20px;



}



.product-final h2{


font-size:30px;



}



.devices{


grid-template-columns:

1fr;



}



.floating-whatsapp{


width:55px;



height:55px;



font-size:25px;



}



}
/* =====================================
   OBTENER PRODUCTO DE LA URL
===================================== */


const params = new URLSearchParams(
window.location.search
);



const productoID = params.get("id");



let productoActual = productos[productoID];





// Producto por defecto

if(!productoActual){


productoActual = productos.netflix;


}









/* =====================================
   MOSTRAR INFORMACIÓN PRODUCTO
===================================== */



document.title =

"AMERISSTORE | " +

productoActual.nombre;







const imagen = document.getElementById(
"productImage"
);



const categoria = document.getElementById(
"productCategory"
);



const nombre = document.getElementById(
"productName"
);



const descripcion = document.getElementById(
"productDescription"
);



const precio = document.getElementById(
"productPrice"
);



const precioAnterior = document.getElementById(
"oldPrice"
);





const breadcrumbCategoria = document.getElementById(
"breadcrumbCategory"
);



const breadcrumbNombre = document.getElementById(
"breadcrumbName"
);








if(imagen){


imagen.src = productoActual.imagen;


imagen.alt = productoActual.nombre;


}







if(categoria){


categoria.innerHTML =

productoActual.categoria;


}







if(nombre){


nombre.innerHTML =

productoActual.nombre;


}







if(descripcion){


descripcion.innerHTML =

productoActual.descripcion;


}







if(precio){


precio.innerHTML =

productoActual.precio;


}







if(precioAnterior){


precioAnterior.innerHTML =

productoActual.precioAnterior;


}







if(breadcrumbCategoria){


breadcrumbCategoria.innerHTML =

productoActual.categoria;


}







if(breadcrumbNombre){


breadcrumbNombre.innerHTML =

productoActual.nombre;


}









/* =====================================
   CREAR PLANES
===================================== */


const plansContainer = document.getElementById(
"plansContainer"
);



let planSeleccionado =

productoActual.planes[0];







function cargarPlanes(){



if(!plansContainer)
return;





plansContainer.innerHTML = "";






productoActual.planes.forEach(
(plan,index)=>{





const card = document.createElement(
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





});



}









/* =====================================
   RESUMEN COMPRA
===================================== */


function actualizarResumen(){



const summaryProduct = document.getElementById(
"summaryProduct"
);



const summaryPlan = document.getElementById(
"summaryPlan"
);



const summaryPrice = document.getElementById(
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
   BOTONES WHATSAPP
===================================== */


const botonWhatsapp = document.getElementById(
"buyWhatsapp"
);



const botonWhatsappFinal = document.getElementById(
"buyWhatsappBottom"
);








function comprarWhatsapp(){





let mensaje =

`Hola AMERISSTORE 👋🚀


Quiero adquirir un servicio digital.


📦 Producto:
${productoActual.nombre}


📂 Categoría:
${productoActual.categoria}


📌 Plan seleccionado:
${planSeleccionado.nombre}


💰 Precio:
${planSeleccionado.precio}



Quiero realizar la activación.


Gracias 🙌`;







let url =

"https://wa.me/" +

whatsapp +

"?text=" +

encodeURIComponent(mensaje);







window.open(

url,

"_blank"

);



}









if(botonWhatsapp){



botonWhatsapp.addEventListener(

"click",

comprarWhatsapp

);



}








if(botonWhatsappFinal){



botonWhatsappFinal.addEventListener(

"click",

comprarWhatsapp

);



}









/* =====================================
   ERROR IMAGEN
===================================== */


const productImg = document.getElementById(
"productImage"
);





if(productImg){


productImg.onerror = function(){


this.src =
"assets/productos/default.png";


};


}









/* =====================================
   ANIMACIÓN CARGA PRODUCTO
===================================== */


const detalle = document.querySelector(
".product-detail"
);



if(detalle){


detalle.style.opacity="0";



setTimeout(()=>{


detalle.style.transition=".5s";



detalle.style.opacity="1";



},100);



}









console.log(

"Producto cargado correctamente:",

productoActual.nombre

);



});
