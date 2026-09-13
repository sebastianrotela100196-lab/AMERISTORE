/* =========================================================
   AMERISSTORE
   CARRITO PROFESIONAL
========================================================= */


"use strict";


document.addEventListener(
"DOMContentLoaded",
()=>{



/* =========================
CONFIG
========================= */


const CART_KEY =
"amerisstore_carrito";





/* =========================
ELEMENTOS
========================= */


const cartItems =
document.getElementById(
"cartItems"
);



const cartCount =
document.getElementById(
"cartCount"
);



const cartTotal =
document.getElementById(
"cartTotal"
);



const checkoutButton =
document.getElementById(
"checkoutWhatsapp"
);









/* =========================
OBTENER CARRITO
========================= */


function obtenerCarrito(){


return JSON.parse(

localStorage.getItem(
CART_KEY
)

)

||

[];


}









/* =========================
GUARDAR CARRITO
========================= */


function guardarCarrito(carrito){


localStorage.setItem(

CART_KEY,

JSON.stringify(
carrito
)

);


}









/* =========================
MOSTRAR CARRITO
========================= */


function mostrarCarrito(){



let carrito =
obtenerCarrito();





if(!cartItems)
return;





cartItems.innerHTML="";







if(carrito.length===0){



cartItems.innerHTML = `


<div class="empty-cart">


<h2>

Tu carrito está vacío

</h2>


<p>

Agrega productos para verlos aquí.

</p>


</div>


`;



actualizarResumen([]);


return;


}








carrito.forEach(

(producto,index)=>{





const card =
document.createElement(
"div"
);





card.className =
"cart-product";





card.innerHTML = `


<div class="cart-image">


<img

src="${producto.imagen}"

alt="${producto.producto}"

>


</div>





<div class="cart-info">



<h3>

${producto.producto}

</h3>




<p class="cart-plan">

${producto.plan}

</p>




<span>

${producto.tipo}

</span>




<small>

${producto.duracion}

</small>



</div>







<div class="cart-actions">



<strong>

Gs.
${producto.precio.toLocaleString("es-PY")}

</strong>




<div class="quantity-box">


<button class="minus">

−

</button>



<span>

1

</span>



<button class="plus">

+

</button>



</div>





<button

class="remove-product"

data-index="${index}">


✕

</button>



</div>


`;






cartItems.appendChild(
card
);





}

);







document
.querySelectorAll(
".remove-product"
)

.forEach(

button=>{


button.addEventListener(

"click",

()=>{



let carrito =
obtenerCarrito();




carrito.splice(

button.dataset.index,

1

);





guardarCarrito(
carrito
);





mostrarCarrito();





}


);



}

);





actualizarResumen(
carrito
);



}









/* =========================
RESUMEN
========================= */


function actualizarResumen(carrito){



let cantidad =
carrito.length;




let total =
carrito.reduce(

(sum,item)=>

sum + item.precio,

0

);






if(cartCount){

cartCount.textContent =
cantidad;

}





if(cartTotal){

cartTotal.textContent =

"Gs. "

+

total.toLocaleString(
"es-PY"
);

}




}









/* =========================
WHATSAPP
========================= */


function comprarWhatsapp(){



let carrito =
obtenerCarrito();





if(carrito.length===0){


alert(
"Tu carrito está vacío"
);


return;


}







let mensaje =

`Hola AMERISSTORE 👋

Quiero realizar este pedido:

`;






carrito.forEach(

(item,index)=>{


mensaje += `

${index+1}) ${item.producto}

Plan:
${item.plan}

Tipo:
${item.tipo}

Duración:
${item.duracion}

Precio:
Gs. ${item.precio.toLocaleString("es-PY")}

`;



}

);






let total =

carrito.reduce(

(sum,item)=>

sum + item.precio,

0

);





mensaje += `

TOTAL:

Gs. ${total.toLocaleString("es-PY")}

Gracias.`;


window.open(

"https://wa.me/595981841136?text="

+

encodeURIComponent(
mensaje
),

"_blank"

);



}









/* =========================
BOTON COMPRA
========================= */


if(checkoutButton){


checkoutButton.onclick =
comprarWhatsapp;


}









/* =========================
INICIAR
========================= */


mostrarCarrito();



});arrito.j
