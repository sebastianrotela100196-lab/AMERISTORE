/* =========================================================
   AMERISSTORE
   PRODUCT GAMING SYSTEM
========================================================= */


"use strict";


document.addEventListener(
"DOMContentLoaded",
()=>{



/* =========================================================
   CONFIGURACIÓN
========================================================= */


const WHATSAPP =

"595981841136";


const CART_KEY =

"amerisstore_carrito";






/* =========================================================
   BASE DE DATOS JUEGOS
========================================================= */


const juegos = {





/* =========================================================
   MOBILE LEGENDS
========================================================= */


mobilelegends:{


nombre:
"Mobile Legends",


categoria:
"MOBILE LEGENDS",


badge:
"DIAMANTES",


imagen:
"assets/productos/mobilelegends.png",


descripcion:
"Recarga diamantes y pases para mejorar tu experiencia en Mobile Legends.",


color:
"mobilelegends",


servidor:
true,



info:

`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br>

• Server ID

<br><br>

Nunca solicitamos contraseña.

`,



productos:[



{
nombre:"28 Diamantes 💎",
precio:5000,
tipo:"recarga"
},



{
nombre:"44 Diamantes 💎",
precio:7000,
tipo:"recarga"
},



{
nombre:"86 Diamantes 💎",
precio:10000,
tipo:"recarga",
tag:"⭐ MÁS VENDIDO"
},



{
nombre:"176 Diamantes 💎",
precio:19500,
tipo:"recarga"
},



{
nombre:"257 Diamantes 💎",
precio:28500,
tipo:"recarga"
},



{
nombre:"343 Diamantes 💎",
precio:36500,
tipo:"recarga",
tag:"🔥 POPULAR"
},



{
nombre:"707 Diamantes 💎",
precio:71000,
tipo:"recarga"
},



{
nombre:"1498 Diamantes 💎",
precio:152000,
tipo:"recarga"
},



{
nombre:"2195 Diamantes 💎",
precio:216000,
tipo:"recarga"
},



{
nombre:"3688 Diamantes 💎",
precio:350000,
tipo:"recarga"
},



{
nombre:"5532 Diamantes 💎",
precio:520000,
tipo:"recarga",
tag:"👑 PREMIUM"
},





/* EXTRAS */


{
nombre:"Paquete Semanal Elite 🎟️",
precio:7000,
tipo:"extra"
},



{
nombre:"Pase Semanal 🎟️",
precio:13000,
tipo:"extra"
},



{
nombre:"Paquete Mensual Elite 🎟️",
precio:28000,
tipo:"extra"
},



{
nombre:"Pase Crepuscular 🎟️",
precio:58000,
tipo:"extra"
}



]



},







/* =========================================================
   PUBG MOBILE
========================================================= */


pubg:{


nombre:
"PUBG Mobile",


categoria:
"PUBG MOBILE",


badge:
"UC",


imagen:
"assets/productos/pubg.png",


descripcion:
"Compra UC y beneficios premium para mejorar tu cuenta.",


color:
"pubg",


servidor:
false,



info:

`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br><br>

Nunca solicitamos contraseña.

`,



productos:[



{
nombre:"60 Monedas WOW 🪙",
precio:8000,
tipo:"recarga"
},



{
nombre:"325 Monedas WOW 🪙",
precio:35000,
tipo:"recarga",
tag:"⭐ MÁS VENDIDO"
},



{
nombre:"660 Monedas WOW 🪙",
precio:70000,
tipo:"recarga",
tag:"🔥 POPULAR"
},



{
nombre:"1.800 Monedas WOW 🪙",
precio:170000,
tipo:"recarga"
},



{
nombre:"3.850 Monedas WOW 🪙",
precio:330000,
tipo:"recarga"
},



{
nombre:"8.100 Monedas WOW 🪙",
precio:650000,
tipo:"recarga",
tag:"👑 PREMIUM"
},



/* PASES */


{
nombre:"Pase Élite Nivel 1-50 🎟️",
precio:40000,
tipo:"extra"
},



{
nombre:"Pase Élite Nivel 1-100 🎟️",
precio:75000,
tipo:"extra"
},



{
nombre:"Pase Élite Plus Nivel 1-100 👑",
precio:180000,
tipo:"extra",
tag:"👑 PREMIUM"
},



/* PRIME */


{
nombre:"PUBG PRIME 1 Mes ⭐",
precio:8000,
tipo:"extra"
},



{
nombre:"PUBG PRIME 3 Meses ⭐",
precio:22000,
tipo:"extra"
},



{
nombre:"PUBG PRIME 6 Meses ⭐",
precio:45000,
tipo:"extra"
},



{
nombre:"PUBG PRIME 12 Meses ⭐",
precio:85000,
tipo:"extra"
}



]



},
/* =========================================================
   BLOOD STRIKE
========================================================= */


bloodstrike:{


nombre:
"Blood Strike",


categoria:
"BLOOD STRIKE",


badge:
"GOLD",


imagen:
"assets/productos/bloodstrike.png",


descripcion:
"Compra Oro, pases, cajas y eventos especiales de Blood Strike.",


color:
"bloodstrike",


servidor:
false,



info:

`

Para realizar la recarga necesitamos:

<br><br>

• ID del jugador

<br><br>

Nunca solicitamos contraseña.

`,





productos:[



/* =====================
   ORO
===================== */


{
nombre:"51 Oro 🪙",
precio:5000,
tipo:"recarga"
},


{
nombre:"105 Oro 🪙",
precio:8000,
tipo:"recarga",
tag:"⭐ MÁS VENDIDO"
},


{
nombre:"320 Oro 🪙",
precio:18000,
tipo:"recarga",
tag:"🔥 POPULAR"
},


{
nombre:"540 Oro 🪙",
precio:28000,
tipo:"recarga"
},


{
nombre:"1.100 Oro 🪙",
precio:55000,
tipo:"recarga"
},


{
nombre:"2.260 Oro 🪙",
precio:110000,
tipo:"recarga"
},


{
nombre:"5.800 Oro 🪙",
precio:275000,
tipo:"recarga",
tag:"👑 PREMIUM"
},







/* =====================
   PASES
===================== */


{
nombre:"Pase de Temporada 🎟️",
precio:8000,
tipo:"extra"
},


{
nombre:"Pase Subida de Nivel 🎟️",
precio:15000,
tipo:"extra"
},


{
nombre:"Pase Strike Élite 🎟️",
precio:27000,
tipo:"extra",
tag:"⭐ MÁS VENDIDO"
},


{
nombre:"Pase Strike Premium 👑",
precio:58000,
tipo:"extra",
tag:"👑 PREMIUM"
},







/* =====================
   CAJAS Y OFERTAS
===================== */


{
nombre:"Caja Ultra Skin Lucky 🎁",
precio:4000,
tipo:"extra"
},


{
nombre:"Oferta 049 🎁",
precio:4000,
tipo:"extra"
},


{
nombre:"Oferta 099 🎁",
precio:8000,
tipo:"extra"
},


{
nombre:"Oferta 199 🎁",
precio:18000,
tipo:"extra"
},


{
nombre:"Oferta 299 🎁",
precio:28000,
tipo:"extra"
},


{
nombre:"Oferta 399 🎁",
precio:38000,
tipo:"extra"
},


{
nombre:"Oferta 499 🎁",
precio:48000,
tipo:"extra"
},


{
nombre:"Oferta 599 🎁",
precio:58000,
tipo:"extra"
},


{
nombre:"Oferta 699 🎁",
precio:68000,
tipo:"extra"
},


{
nombre:"Oferta 799 🎁",
precio:78000,
tipo:"extra"
},


{
nombre:"Oferta 899 🎁",
precio:88000,
tipo:"extra"
},


{
nombre:"Oferta 999 🎁",
precio:98000,
tipo:"extra"
},







/* =====================
   EVENTOS ESPECIALES
===================== */


{
nombre:"One Punch Man - Bolsa de Suerte Exclusiva 🥊",
precio:5000,
tipo:"extra"
},


{
nombre:"One Punch Man - Cupón de Valor Especial 🥊",
precio:5000,
tipo:"extra"
},


{
nombre:"One Punch Man - Cofre de Puntos de Mejora 🥊",
precio:10000,
tipo:"extra"
},


{
nombre:"Dark Matter - Bolsa de Suerte Preventa 🌑",
precio:10000,
tipo:"extra"
},


{
nombre:"Cupón Caja Lucha Strike ⚔️",
precio:5000,
tipo:"extra"
},


{
nombre:"Cofre Puntos de Mejora Lucha Strike ⚔️",
precio:10000,
tipo:"extra"
},


{
nombre:"Ataque de los Titanes - Cupón Titán I ⚔️",
precio:10000,
tipo:"extra"
},


{
nombre:"Ataque de los Titanes - Cupón Titán II ⚔️",
precio:5000,
tipo:"extra"
},


{
nombre:"Ataque de los Titanes - Cofre Puntos de Mejora ⚔️",
precio:10000,
tipo:"extra"
},


{
nombre:"Bolsa de Suerte Carnaval 🎭",
precio:5000,
tipo:"extra"
},


{
nombre:"Bolsa de Suerte Groove 🎵",
precio:5000,
tipo:"extra"
},


{
nombre:"Preventa Eternal Valor Unplugged ⭐",
precio:10000,
tipo:"extra"
},


{
nombre:"Preventa Golden Elegy Eternal Valor ⭐",
precio:10000,
tipo:"extra"
},


{
nombre:"Bolsa de Suerte Green Field 🍀",
precio:5000,
tipo:"extra"
},


{
nombre:"Activar Cornucopia 🎁",
precio:10000,
tipo:"extra"
},


{
nombre:"Enzo: The Next One - Cofre Puntos de Mejora",
precio:10000,
tipo:"extra"
},


{
nombre:"Bolsa de Suerte 🎁",
precio:5000,
tipo:"extra"
},


{
nombre:"Cupón Maestro Especial ⭐",
precio:10000,
tipo:"extra"
},


{
nombre:"Cofre Puntos de Mejora Seven Deadly Sins",
precio:10000,
tipo:"extra"
},


{
nombre:"Cupón Valor Seven Deadly Sins",
precio:5000,
tipo:"extra"
},


{
nombre:"Tokyo Revengers - Cupón Valor I",
precio:5000,
tipo:"extra"
},


{
nombre:"Tokyo Revengers - Cupón Valor II",
precio:5000,
tipo:"extra"
},


{
nombre:"Tokyo Revengers - Cofre Puntos de Mejora",
precio:10000,
tipo:"extra",
tag:"👑 PREMIUM"
}



]


},
/* =========================================================
   CALL OF DUTY MOBILE
========================================================= */


codmobile:{


nombre:

"Call of Duty Mobile",


categoria:

"CALL OF DUTY",


badge:

"CP",


imagen:

"assets/productos/codmobile.png",


descripcion:

"Compra CP para desbloquear contenido premium dentro del juego.",


color:

"codmobile",


servidor:

false,



info:

`

Para realizar la recarga necesitamos:

<br><br>

• UID del jugador

<br><br>

Nunca solicitamos contraseña.

`,




productos:[



{
nombre:"88 CP",
precio:10000,
tipo:"recarga"
},



{
nombre:"460 CP",
precio:45000,
tipo:"recarga",
tag:"⭐ MÁS VENDIDO"
},



{
nombre:"960 CP",
precio:98000,
tipo:"recarga",
tag:"🔥 POPULAR"
},



{
nombre:"11600 CP",
precio:785000,
tipo:"recarga",
tag:"👑 PREMIUM"
}



]



}





};









/* =========================================================
   OBTENER JUEGO ACTUAL
========================================================= */


const params =

new URLSearchParams(
window.location.search
);







const id =

params.get("id")

||

"mobilelegends";







const juego =

juegos[id];







console.log(

"Juego cargado:",

id,

juego

);







if(!juego){



console.error(

"Juego no encontrado:",

id

);



return;



}









/* =========================================================
   COLOR DINÁMICO
========================================================= */


document.body.classList.add(

juego.color

);









/* =========================================================
   INFORMACIÓN PRINCIPAL
========================================================= */


const gameTitle =

document.getElementById(
"gameTitle"
);



const gameCategory =

document.getElementById(
"gameCategory"
);



const gameDescription =

document.getElementById(
"gameDescription"
);



const gameImage =

document.getElementById(
"gameImage"
);



const gameBadge =

document.getElementById(
"gameBadge"
);



const gameInfo =

document.getElementById(
"gameInfo"
);









/* =========================================================
   CARGAR DATOS
========================================================= */


document.title =

"AMERISSTORE | "

+

juego.nombre;








if(gameTitle){


gameTitle.textContent =

juego.nombre;


}







if(gameCategory){


gameCategory.textContent =

juego.categoria;


}







if(gameDescription){


gameDescription.textContent =

juego.descripcion;


}







if(gameImage){


gameImage.src =

juego.imagen;


gameImage.alt =

juego.nombre;


}







if(gameBadge){


gameBadge.textContent =

juego.badge;


}







if(gameInfo){


gameInfo.innerHTML =

juego.info;


}
/* =========================================================
   CONTENEDORES Y PASOS
========================================================= */


const mainContainer =
document.getElementById("mainContainer");


const extraContainer =
document.getElementById("extraContainer");


const step2 =
document.getElementById("step2");


const step3 =
document.getElementById("step3");


const serverContainer =
document.getElementById("serverContainer");


const summaryServerRow =
document.getElementById("summaryServerRow");



let productoSeleccionado = null;






/* =========================================================
   SERVER ID
========================================================= */


if(juego.servidor){


    if(serverContainer){

        serverContainer.style.display = "block";

    }


    if(summaryServerRow){

        summaryServerRow.style.display = "flex";

    }


}else{


    if(serverContainer){

        serverContainer.style.display = "none";

    }


    if(summaryServerRow){

        summaryServerRow.style.display = "none";

    }


}






/* =========================================================
   CREAR TARJETAS
========================================================= */


function crearTarjeta(producto){


    const card =
    document.createElement("div");





    /* =====================================================
       RECARGAS
    ===================================================== */


    if(producto.tipo === "recarga"){


        card.className = "diamond-card";


        let etiqueta = "";


        if(producto.tag){


            let claseTag = "";


            if(producto.tag.includes("MÁS VENDIDO")){

                claseTag = "tag-best";

            }


            else if(producto.tag.includes("POPULAR")){

                claseTag = "tag-popular";

            }


            else if(producto.tag.includes("PREMIUM")){

                claseTag = "tag-premium";

            }


            etiqueta = `

                <span class="package-tag ${claseTag}">
                    ${producto.tag}
                </span>

            `;

        }



        card.innerHTML = `

            ${etiqueta}

            <h3>
                ${producto.nombre}
            </h3>

            <strong>
                Gs. ${producto.precio.toLocaleString("es-PY")}
            </strong>

        `;


    }





    /* =====================================================
       EXTRAS
    ===================================================== */


    else{


        card.className = "ff-extra-card";


        card.innerHTML = `

            <div class="ff-extra-icon">
                🎟️
            </div>


            <span class="ff-extra-label">
                BENEFICIO
            </span>


            <h3>
                ${producto.nombre}
            </h3>


            <p>
                Obtén beneficios adicionales dentro del juego.
            </p>


            <div class="ff-extra-bottom">

                <strong>
                    Gs. ${producto.precio.toLocaleString("es-PY")}
                </strong>

                <button
                    class="buy-button"
                    type="button"
                >
                    COMPRAR
                </button>

            </div>

        `;


    }






    /* =====================================================
       CLICK TARJETA
    ===================================================== */


    card.addEventListener("click",()=>{


        /* Solo las recargas abren Paso 2 */

        if(producto.tipo !== "recarga"){

            return;

        }



        document
        .querySelectorAll(".diamond-card")
        .forEach((item)=>{

            item.classList.remove("active");

        });



        card.classList.add("active");


        productoSeleccionado = producto;



        /*
        Si el usuario cambia de paquete después de haber
        abierto el resumen, lo ocultamos para evitar que
        quede mostrando el producto anterior.
        */

        if(step3){

            step3.classList.add("hidden");

        }



        if(step2){

            step2.classList.remove("hidden");

            scrollPaso(step2);

        }


    });



    return card;


}






/* =========================================================
   CARGAR PRODUCTOS
========================================================= */


function cargarProductos(){


    if(mainContainer){

        mainContainer.innerHTML = "";

    }


    if(extraContainer){

        extraContainer.innerHTML = "";

    }




    juego.productos.forEach((producto)=>{


        const tarjeta =
        crearTarjeta(producto);



        if(producto.tipo === "extra"){


            if(extraContainer){

                extraContainer.appendChild(tarjeta);

            }


        }else{


            if(mainContainer){

                mainContainer.appendChild(tarjeta);

            }


        }


    });


}






/* =========================================================
   SCROLL SUAVE
========================================================= */


function scrollPaso(elemento){


    if(!elemento){

        return;

    }


    setTimeout(()=>{


        elemento.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });


    },150);


}






/* =========================================================
   INICIAR PRODUCTOS
========================================================= */


cargarProductos();
/* =========================================================
   GUIA DE ID
========================================================= */


const guideButton =

document.getElementById(
"guideButton"
);



const guideContent =

document.getElementById(
"guideContent"
);



const guideText =

document.getElementById(
"guideText"
);







if(guideButton){


    guideButton.addEventListener(
    
    "click",
    
    ()=>{


        if(guideContent){


            guideContent.classList.toggle(
            "show"
            );


        }


    }


    );


}









/* =========================================================
   TEXTO GUIA SEGÚN JUEGO
========================================================= */


if(guideText){



    if(id === "mobilelegends"){


        guideText.innerHTML = `

        1. Abrí Mobile Legends.

        <br><br>

        2. Tocá tu foto de perfil.

        <br><br>

        3. Copiá tu ID y Server ID.

        <br><br>

        4. Envíanos los datos junto al paquete elegido.

        `;


    }







    if(id === "pubg"){


        guideText.innerHTML = `

        1. Abrí PUBG Mobile.

        <br><br>

        2. Entrá a tu perfil.

        <br><br>

        3. Copiá tu ID de jugador.

        <br><br>

        4. Envíanos tu ID para realizar la recarga.

        `;


    }







    if(id === "bloodstrike"){


        guideText.innerHTML = `

        1. Abrí Blood Strike.

        <br><br>

        2. Entrá a tu perfil.

        <br><br>

        3. Copiá tu ID.

        <br><br>

        4. Envíanos el ID junto al paquete.

        `;


    }







    if(id === "codmobile"){


        guideText.innerHTML = `

        1. Abrí Call of Duty Mobile.

        <br><br>

        2. Entrá a tu perfil.

        <br><br>

        3. Copiá tu UID.

        <br><br>

        4. Envíanos el dato para la recarga.

        `;


    }



}









/* =========================================================
   CANTIDAD Y TOTAL
========================================================= */


const quantity =

document.getElementById(
"quantity"
);



const plusButton =

document.getElementById(
"plusButton"
);



const minusButton =

document.getElementById(
"minusButton"
);



const totalPrice =

document.getElementById(
"totalPrice"
);





let cantidad = 1;









function actualizarTotal(){



    if(!productoSeleccionado){

        return;

    }



    const total =

    productoSeleccionado.precio *

    cantidad;






    if(totalPrice){


        totalPrice.textContent =

        "Gs. "

        +

        total.toLocaleString(
        "es-PY"
        );


    }



}









/* =========================================================
   SUMAR
========================================================= */


if(plusButton){



plusButton.addEventListener(

"click",

()=>{


    cantidad++;


    if(quantity){


        quantity.value = cantidad;


    }



    actualizarTotal();



}


);



}









/* =========================================================
   RESTAR
========================================================= */


if(minusButton){



minusButton.addEventListener(

"click",

()=>{


    if(cantidad > 1){


        cantidad--;


    }



    if(quantity){


        quantity.value = cantidad;


    }



    actualizarTotal();



}


);



}









/* =========================================================
   VALIDAR DATOS
========================================================= */


function validarDatos(){



    if(!productoSeleccionado){


        mostrarNotificacion(

        "Selecciona un paquete primero."

        );


        return false;


    }







    const playerID =

    document.getElementById(
    "playerID"
    );







    if(
    !playerID ||
    !playerID.value.trim()
    ){


        mostrarNotificacion(

        "Ingresa tu ID de jugador."

        );


        if(playerID){

            playerID.focus();

        }


        return false;


    }







    if(juego.servidor){



        const serverID =

        document.getElementById(
        "serverID"
        );





        if(
        !serverID ||
        !serverID.value.trim()
        ){


            mostrarNotificacion(

            "Ingresa tu Server ID."

            );


            serverID.focus();


            return false;


        }


    }







    return true;


}









/* =========================================================
   MOSTRAR RESUMEN
========================================================= */


const continueButton =

document.getElementById(
"continueButton"
);


const summaryProduct =

document.getElementById(
"summaryProduct"
);



const summaryID =

document.getElementById(
"summaryID"
);



const summaryServer =

document.getElementById(
"summaryServer"
);









if(continueButton){



continueButton.addEventListener(

"click",

()=>{





    if(!validarDatos()){

        return;

    }







    const playerID =

    document.getElementById(
    "playerID"
    );





    const serverID =

    document.getElementById(
    "serverID"
    );








    if(summaryProduct){


        summaryProduct.textContent =

        productoSeleccionado.nombre;


    }








    if(summaryID){


        summaryID.textContent =

        playerID.value;


    }







    if(
    juego.servidor &&
    summaryServer
    ){


        summaryServer.textContent =

        serverID.value;


    }








    if(step3){


        step3.classList.remove(
        "hidden"
        );



        actualizarTotal();



        scrollPaso(step3);


    }






}



);



}
/* =========================================================
   CARRITO
========================================================= */


const addCartButton =

document.getElementById(
"addCartButton"
);







function obtenerCarrito(){



    try{


        return JSON.parse(

            localStorage.getItem(
            CART_KEY
            )

        )

        || [];



    }

    catch{


        return [];


    }



}









function guardarCarrito(carrito){



    localStorage.setItem(

        CART_KEY,

        JSON.stringify(
        carrito
        )

    );


}









function agregarAlCarrito(){



    const carrito =

    obtenerCarrito();






    const playerID =

    document.getElementById(
    "playerID"
    );





    const serverID =

    document.getElementById(
    "serverID"
    );









    const producto = {


        producto:

        `${juego.nombre} - ${productoSeleccionado.nombre}`,


        plan:

        productoSeleccionado.nombre,


        precio:

        productoSeleccionado.precio * cantidad,


        imagen:

        juego.imagen,


        tipo:

        "GAMING",


        cantidad:

        cantidad,


        idJugador:

        playerID.value.trim(),



        servidor:

        juego.servidor

        ?

        serverID.value.trim()

        :

        ""



    };








    carrito.push(producto);








    guardarCarrito(
    carrito
    );







    mostrarNotificacion(

    "Producto agregado al carrito 🛒"

    );



}









/* =========================================================
   BOTON CARRITO
========================================================= */


if(addCartButton){



    addCartButton.addEventListener(

    "click",

    ()=>{





        if(!validarDatos()){

            return;

        }







        agregarAlCarrito();



    }


    );



}









/* =========================================================
   NOTIFICACIONES
========================================================= */


function mostrarNotificacion(texto){



    const anterior =

    document.querySelector(
    ".store-notification"
    );





    if(anterior){


        anterior.remove();


    }








    const aviso =

    document.createElement(
    "div"
    );






    aviso.className =

    "store-notification";





    aviso.textContent =

    texto;






    document.body.appendChild(
    aviso
    );







    setTimeout(()=>{


        aviso.classList.add(
        "show"
        );


    },50);







    setTimeout(()=>{


        aviso.remove();


    },2500);



}









/* =========================================================
   WHATSAPP
========================================================= */


const buyWhatsapp =

document.getElementById(
"buyWhatsapp"
);







if(buyWhatsapp){



buyWhatsapp.addEventListener(

"click",

()=>{





    if(!validarDatos()){

        return;

    }








    const playerID =

    document.getElementById(
    "playerID"
    );






    const serverID =

    document.getElementById(
    "serverID"
    );









    let mensaje =



`Hola AMERISSTORE 👋


Quiero realizar una recarga:


🎮 Juego:

${juego.nombre}



📦 Producto:

${productoSeleccionado.nombre}



🔢 Cantidad:

${cantidad}



🆔 ID Jugador:

${playerID.value}

`;







    if(juego.servidor){



        mensaje +=


`

🌐 Server ID:

${serverID.value}

`;



    }








    mensaje +=


`

💰 Total:

Gs. ${(productoSeleccionado.precio * cantidad).toLocaleString("es-PY")}



Quiero completar mi compra.`;









    window.open(


    "https://wa.me/"

    +

    WHATSAPP

    +

    "?text="

    +

    encodeURIComponent(
    mensaje
    ),


    "_blank"



    );





}



);



}









/* =========================================================
   FAQ DINÁMICO
========================================================= */


const faqContainer =

document.querySelector(
".ff-faq-grid"
);







if(faqContainer){



let preguntas = [];








if(id === "mobilelegends"){


preguntas = [

[
"¿Necesito Server ID?",
"Sí, Mobile Legends necesita ID y Server ID."
],

[
"¿Necesito contraseña?",
"No. Nunca solicitamos contraseña."
],

[
"¿Cuánto tarda la recarga?",
"Se realiza después de confirmar el pago."
]

];


}








if(id === "pubg"){


preguntas = [

[
"¿Qué necesito para PUBG?",
"Solo tu ID de jugador."
],

[
"¿Necesito contraseña?",
"No solicitamos contraseña."
],

[
"¿Puedo comprar varios paquetes?",
"Sí, puedes agregarlos al carrito."
]

];


}








if(id === "bloodstrike"){


preguntas = [

[
"¿Qué necesito para Blood Strike?",
"Solo tu ID de jugador."
],

[
"¿Hay pases y eventos?",
"Sí, están disponibles en la sección extras."
],

[
"¿Necesito contraseña?",
"No solicitamos contraseña."
]

];


}








if(id === "codmobile"){


preguntas = [

[
"¿Qué necesito para COD Mobile?",
"Necesitamos tu UID."
],

[
"¿Cómo recibo los CP?",
"Después de confirmar la compra."
],

[
"¿Necesito contraseña?",
"No solicitamos contraseña."
]

];


}








faqContainer.innerHTML = "";







preguntas.forEach(

(item,index)=>{





faqContainer.innerHTML += `



<div class="ff-faq-card">


<div class="ff-faq-icon">

0${index + 1}

</div>





<div>


<h3>

${item[0]}

</h3>



<p>

${item[1]}

</p>



</div>



</div>


`;





}



);



}









/* =========================================================
   FIN
========================================================= */


});
