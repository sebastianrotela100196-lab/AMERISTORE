/* =====================================
   AMERISSTORE FREE FIRE CHECKOUT
   Gaming | IA | Streaming | Digital
===================================== */


const whatsapp = "595981841136";



document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"AMERISSTORE Free Fire cargado 🚀"
);




/* =====================================
 VARIABLES COMPRA
===================================== */


let compra = {

producto:"110 Diamantes 💎",

precio:"Gs. 6.000",

id:"",

cantidad:1

};








/* =====================================
 SELECCIONAR DIAMANTES
===================================== */


const tarjetas =
document.querySelectorAll(
".diamond-card"
);



tarjetas.forEach(card=>{


card.addEventListener(
"click",
()=>{


tarjetas.forEach(c=>{

c.classList.remove(
"active"
);

});



card.classList.add(
"active"
);




compra.producto =
card.dataset.producto;



compra.precio =
card.dataset.precio;





// Reiniciar cantidad

compra.cantidad = 1;



const quantity =
document.getElementById(
"quantity"
);



if(quantity){

quantity.value = 1;

}



actualizarResumen();



});


});









/* =====================================
 PASO 1 → PASO 2
===================================== */


const continuar1 =
document.getElementById(
"continueStep1"
);



if(continuar1){


continuar1.onclick = ()=>{


const step2 =
document.getElementById(
"step2"
);



if(step2){


step2.classList.remove(
"hidden"
);



step2.scrollIntoView({

behavior:"smooth"

});


}


};


}









/* =====================================
 ID JUGADOR
===================================== */


const inputID =
document.getElementById(
"playerID"
);



if(inputID){


inputID.addEventListener(
"input",
()=>{


compra.id =
inputID.value.trim();



actualizarResumen();



});


}









/* =====================================
 GUIA ID
===================================== */


const guideButton =
document.getElementById(
"openGuide"
);



const guideContent =
document.getElementById(
"guideContent"
);



if(guideButton){


guideButton.onclick = ()=>{


guideContent.classList.toggle(
"show"
);


};


}









/* =====================================
 PASO 2 → PASO 3
===================================== */


const continuar2 =
document.getElementById(
"continueStep2"
);



if(continuar2){


continuar2.onclick = ()=>{



if(compra.id.length < 6){


alert(
"Ingresa correctamente tu ID Free Fire"
);


return;


}





const step3 =
document.getElementById(
"step3"
);



if(step3){


step3.classList.remove(
"hidden"
);



step3.scrollIntoView({

behavior:"smooth"

});


}



actualizarResumen();



};


}









/* =====================================
 CONTROL CANTIDAD
===================================== */


const plus =
document.getElementById(
"plus"
);



const minus =
document.getElementById(
"minus"
);



const quantity =
document.getElementById(
"quantity"
);





if(plus){


plus.onclick = ()=>{


compra.cantidad++;



if(quantity){

quantity.value =
compra.cantidad;

}



actualizarResumen();


};


}






if(minus){


minus.onclick = ()=>{


if(compra.cantidad > 1){


compra.cantidad--;



if(quantity){

quantity.value =
compra.cantidad;

}



actualizarResumen();


}


};


}









/* =====================================
 ACTUALIZAR RESUMEN
===================================== */


function actualizarResumen(){


const producto =
document.getElementById(
"summaryProduct"
);


const precio =
document.getElementById(
"summaryPrice"
);


const id =
document.getElementById(
"summaryID"
);


const total =
document.getElementById(
"totalPrice"
);





if(producto)
producto.innerHTML =
compra.producto;



if(precio)
precio.innerHTML =
compra.precio;



if(id)
id.innerHTML =
compra.id || "-";





if(total){



let precioNumero =
parseInt(
compra.precio.replace(/\D/g,"")
);



let totalFinal =
precioNumero * compra.cantidad;




total.innerHTML =

"Gs. " +

totalFinal.toLocaleString();



}


}
/* =====================================
 WHATSAPP FINAL
===================================== */


const botonWhatsapp =
document.getElementById(
"buyWhatsapp"
);



if(botonWhatsapp){


botonWhatsapp.onclick = ()=>{



let precioNumero =

parseInt(

compra.precio.replace(
/\D/g,
""
)

);



let totalFinal =

precioNumero *
compra.cantidad;






let mensaje =


`Hola AMERISSTORE 👋🚀


Quiero realizar una compra:


🎮 Juego:
Free Fire


💎 Producto:
${compra.producto}


🔢 Cantidad:
${compra.cantidad}


💰 Precio unitario:
${compra.precio}


🧾 Total:
Gs. ${totalFinal.toLocaleString()}


🆔 ID Jugador:
${compra.id}



Espero confirmación de mi pedido.

Gracias.`;





let url =

`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;



window.open(
url,
"_blank"
);



};


}









/* =====================================
 EXTRAS
===================================== */


const botonesExtras =

document.querySelectorAll(
".buy-button"
);





botonesExtras.forEach(
boton=>{


boton.onclick = ()=>{



let producto =

boton.dataset.producto;



let precio =

boton.dataset.precio;





let mensaje =


`Hola AMERISSTORE 👋


Estoy interesado en:


📦 Producto:
${producto}


💰 Precio:
${precio}


Quiero recibir información para completar mi compra.


Gracias 🚀`;






let url =

`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;



window.open(
url,
"_blank"
);



};


});









/* =====================================
 CONTADOR DIAMANTES
===================================== */


const counter =

document.getElementById(
"diamondCounter"
);




if(counter){



let number = 0;


let target = 10000;





let animation =

setInterval(
()=>{



number += 200;




if(number >= target){



number = target;



clearInterval(animation);




let box =

document.querySelector(
".diamond-counter"
);




if(box){

box.classList.add(
"finished"
);

}





if(

!sessionStorage.getItem(
"diamondExplosion"
)

){


crearDiamantes();



sessionStorage.setItem(
"diamondExplosion",
"true"
);



}



}







counter.innerHTML =

"+" +

number.toLocaleString();






},
50);



}





});











/* =====================================
 LLUVIA DE DIAMANTES
===================================== */


function crearDiamantes(){



const container =

document.createElement(
"div"
);




container.className =

"diamond-effect";



document.body.appendChild(
container
);





for(
let i=0;
i<100;
i++
){



let diamond =

document.createElement(
"div"
);




diamond.className =

"falling-diamond";




diamond.innerHTML =

"💎";





diamond.style.left =

Math.random()*100+"%";





diamond.style.animationDelay =

Math.random()*2+"s";





diamond.style.fontSize =

(25 + Math.random()*45)+"px";





container.appendChild(
diamond
);



}





setTimeout(
()=>{


container.remove();


},
4500
);



}
