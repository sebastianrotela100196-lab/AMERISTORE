/* =========================================================
   AMERISSTORE
   CARRITO SIMPLE PROFESIONAL
========================================================= */


"use strict";


document.addEventListener(
"DOMContentLoaded",
()=>{


const CART_KEY =
"amerisstore_carrito";



const cartItems =
document.getElementById("cartItems");


const cartCount =
document.getElementById("cartCount");


const cartTotal =
document.getElementById("cartTotal");


const checkoutButton =
document.getElementById("checkoutWhatsapp");





/* =========================
   CARRITO
========================= */


function obtenerCarrito(){

return JSON.parse(

localStorage.getItem(CART_KEY)

)

|| [];

}





function guardarCarrito(carrito){

localStorage.setItem(

CART_KEY,

JSON.stringify(carrito)

);

}





/* =========================
   MOSTRAR PRODUCTOS
========================= */


function mostrarCarrito(){


const carrito =
obtenerCarrito();



if(!cartItems)
return;



cartItems.innerHTML="";




if(carrito.length===0){


cartItems.innerHTML=`

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
document.createElement("div");



card.className =
"cart-product";



card.innerHTML = `


<div class="cart-info">


<h3>

${producto.producto}

</h3>



<p>

${producto.plan}

</p>



<small>

${producto.tipo}

</small>



<span>

${producto.duracion}

</span>



</div>




<div class="cart-actions">


<strong>

Gs.
${producto.precio.toLocaleString("es-PY")}

</strong>



<button

class="remove-product"

data-index="${index}">

✕

</button>


</div>


`;



cartItems.appendChild(card);



}

);







document
.querySelectorAll(".remove-product")
.forEach(

button=>{


button.onclick=()=>{


let carrito =
obtenerCarrito();



carrito.splice(

Number(button.dataset.index),

1

);



guardarCarrito(carrito);



mostrarCarrito();


};


}

);



actualizarResumen(carrito);



}









/* =========================
   TOTAL
========================= */


function actualizarResumen(carrito){


const cantidad =
carrito.length;



const total =

carrito.reduce(

(total,item)=>

total + item.precio,

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

total.toLocaleString("es-PY");

}



}









/* =========================
   WHATSAPP
========================= */


function comprarWhatsapp(){


const carrito =
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

${index + 1}) ${item.producto}

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





const total =

carrito.reduce(

(sum,item)=>

sum + item.precio,

0

);





mensaje += `

TOTAL:

Gs. ${total.toLocaleString("es-PY")}

Gracias.
`;






window.open(

"https://wa.me/595981841136?text="

+

encodeURIComponent(mensaje),

"_blank"

);



}









/* =========================
   BOTÓN COMPRA
========================= */


if(checkoutButton){

checkoutButton.onclick =
comprarWhatsapp;

}








/* =========================
   INICIO
========================= */


mostrarCarrito();



});
