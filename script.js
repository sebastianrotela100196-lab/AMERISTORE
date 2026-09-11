/* =====================================
   AMERISSTORE SCRIPT
   Gaming | IA | Streaming | Digital
===================================== */


// Número WhatsApp AMERISSTORE
const whatsapp = "595981841136";


// Función para comprar productos
function comprar(producto){

    let mensaje = 
    `Hola AMERISSTORE 👋%0A%0A` +
    `Estoy interesado en comprar:%0A` +
    `🎮 ${producto}%0A%0A` +
    `Quiero más información.`;



    let url = 
    `https://wa.me/${whatsapp}?text=${mensaje}`;


    window.open(url, "_blank");

}





// Animación simple al cargar página

document.addEventListener("DOMContentLoaded",()=>{


    console.log(
        "AMERISSTORE cargado correctamente 🚀"
    );


});
