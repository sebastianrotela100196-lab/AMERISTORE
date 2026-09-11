/* =====================================
   AMERISSTORE SCRIPT
   Gaming | IA | Streaming | Digital
===================================== */



// =========================
// WHATSAPP AMERISSTORE
// =========================


const whatsapp = "595981841136";





function comprar(producto, precio){



    let mensaje =

`Hola AMERISSTORE 👋

Estoy interesado en realizar una compra.

📦 Producto:
${producto}

💰 Precio:
${precio}

✅ Me gustaría recibir información para completar mi pedido.

Gracias por la atención. 🚀`;




    let url =

    `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;



    window.open(url,"_blank");

}





// =========================
// CARGA PAGINA
// =========================


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"AMERISSTORE cargado correctamente 🚀"
);





// =========================
// BOTONES DE COMPRA
// WHATSAPP AUTOMÁTICO
// =========================



const botonesCompra = 
document.querySelectorAll(".buy-button");



botonesCompra.forEach((boton)=>{


    boton.addEventListener(
    "click",
    ()=>{


        let producto =
        boton.dataset.producto;



        let precio =
        boton.dataset.precio;



        comprar(producto,precio);



    });


});








// =========================
// CONTADOR DIAMANTES
// =========================


const counter = 
document.getElementById("diamondCounter");





if(counter){



let number = 0;


let target = 10000;



let animation = setInterval(()=>{



number += 200;




if(number >= target){



number = target;


clearInterval(animation);





let box =
document.querySelector(
".diamond-counter"
);




if(box){

box.classList.add("finished");

}






// EXPLOSIÓN SOLO UNA VEZ POR VISITA


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

"+" + number.toLocaleString();





},50);




}



});









// =========================
// LLUVIA DE DIAMANTES
// =========================



function crearDiamantes(){



const container =

document.createElement("div");



container.className =

"diamond-effect";



document.body.appendChild(container);







for(let i=0;i<100;i++){



let diamond =

document.createElement("div");



diamond.className =

"falling-diamond";



diamond.innerHTML="💎";




diamond.style.left =

Math.random()*100+"%";




diamond.style.animationDelay =

Math.random()*2+"s";




diamond.style.fontSize =

(25 + Math.random()*45)+"px";




container.appendChild(diamond);



}







setTimeout(()=>{


container.remove();


},4500);




}
