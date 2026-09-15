/* =========================================================
   AMERISSTORE
   SCRIPT GENERAL DINÁMICO
========================================================= */


"use strict";


document.addEventListener(
"DOMContentLoaded",
()=>{



/* =========================================================
   CONFIGURACIÓN
========================================================= */


const CART_KEY =
"amerisstore_carrito";


const WHATSAPP_STORE =
"595981841136";








/* =========================================================
   CARRITO GLOBAL
========================================================= */


function obtenerCarrito(){


    try{


        return JSON.parse(

            localStorage.getItem(
                CART_KEY
            )

        ) || [];



    }
    catch(error){


        console.error(
            "Error carrito:",
            error
        );


        return [];


    }


}









function obtenerCantidadCarrito(){


    const carrito =
    obtenerCarrito();



    return carrito.reduce(

        (total,item)=>{


            return total +

            Number(
                item.cantidad || 1
            );


        },

        0

    );


}









function obtenerTotalCarrito(){


    const carrito =
    obtenerCarrito();



    return carrito.reduce(

        (total,item)=>{


            return total +

            (

                Number(
                    item.precio || 0
                )

                *

                Number(
                    item.cantidad || 1
                )

            );


        },

        0

    );


}









function formatearGs(numero){


    return (

        "Gs. "

        +

        Number(numero || 0)

        .toLocaleString(
            "es-PY"
        )

    );


}









function actualizarCarritoHeader(){


    const contador =

    document.getElementById(
        "cart-count"
    );



    const total =

    document.getElementById(
        "cart-total"
    );





    if(contador){


        contador.textContent =

        obtenerCantidadCarrito();


    }





    if(total){


        total.textContent =

        formatearGs(

            obtenerTotalCarrito()

        );


    }



}









/* =========================================================
   WHATSAPP
========================================================= */


function abrirWhatsApp(mensaje){


    const url =


    "https://wa.me/"

    +

    WHATSAPP_STORE

    +

    "?text="

    +

    encodeURIComponent(
        mensaje
    );



    window.open(

        url,

        "_blank"

    );


}









function iniciarWhatsapp(){


    const botones =

    document.querySelectorAll(

        ".floating-whatsapp, .btn-whatsapp"

    );





    botones.forEach(

        boton=>{


            if(

                boton.tagName === "A"

                &&

                boton.href.includes(
                    "wa.me"
                )

            ){

                return;

            }





            boton.addEventListener(

                "click",

                (e)=>{


                    e.preventDefault();



                    abrirWhatsApp(

                        "Hola AMERISSTORE 👋 quiero consultar un servicio."

                    );


                }

            );



        }

    );


}









/* =========================================================
   MENÚ MÓVIL
========================================================= */


function iniciarMenuMovil(){


    const boton =

    document.getElementById(
        "menu-toggle"
    );



    const menu =

    document.getElementById(
        "main-menu"
    );





    if(
        !boton ||
        !menu
    ){

        return;

    }






    boton.addEventListener(

        "click",

        ()=>{


            const abierto =

            menu.classList.toggle(
                "open"
            );



            boton.setAttribute(

                "aria-expanded",

                abierto

            );



            boton.textContent =

            abierto

            ?

            "✕"

            :

            "☰";



        }

    );






    menu.querySelectorAll(
        "a"
    )

    .forEach(

        enlace=>{


            enlace.addEventListener(

                "click",

                ()=>{


                    menu.classList.remove(
                        "open"
                    );



                    boton.textContent =
                    "☰";



                }

            );


        }

    );



}
   /* =========================================================
   PÁGINA ACTUAL ACTIVA
========================================================= */


function marcarPaginaActual(){


    const pagina =

    window.location.pathname

    .split("/")

    .pop()

    ||

    "index.html";





    document
    .querySelectorAll(
        ".menu a"
    )

    .forEach(

        enlace=>{


            enlace.classList.remove(
                "active"
            );



            const href =

            enlace.getAttribute(
                "href"
            );



            if(!href){

                return;

            }




            const destino =

            href.split("?")[0];





            if(
                destino === pagina
            ){

                enlace.classList.add(
                    "active"
                );

            }



        }

    );


}









/* =========================================================
   EXPLORAR CATEGORÍAS
========================================================= */


function iniciarExplorarCategorias(){


    const boton =

    document.getElementById(
        "moreProductsToggle"
    );



    const menu =

    document.getElementById(
        "moreProductsMenu"
    );



    const icono =

    document.getElementById(
        "moreProductsIcon"
    );





    if(
        !boton ||
        !menu
    ){

        return;

    }





    boton.addEventListener(

        "click",

        ()=>{


            const abierto =

            menu.classList.toggle(
                "show"
            );




            boton.setAttribute(

                "aria-expanded",

                abierto

            );





            if(icono){


                icono.textContent =

                abierto

                ?

                "−"

                :

                "+";


            }




        }

    );


}









/* =========================================================
   SLIDER DE CATEGORÍAS
========================================================= */


function iniciarCategorySliders(){


    const sliders =

    document.querySelectorAll(

        ".category-image-slider"

    );





    sliders.forEach(

        slider=>{


            const imagenes =

            slider.querySelectorAll(
                "img"
            );





            if(
                imagenes.length <= 1
            ){

                return;

            }





            let actual = 0;





            imagenes[0]
            .classList.add(
                "active"
            );






            setInterval(

                ()=>{


                    imagenes[actual]

                    .classList

                    .remove(
                        "active"
                    );





                    actual++;





                    if(
                        actual >= imagenes.length
                    ){

                        actual = 0;

                    }







                    imagenes[actual]

                    .classList

                    .add(
                        "active"
                    );




                },

                3000

            );



        }

    );


}









/* =========================================================
   PRODUCTOS DESTACADOS DINÁMICOS
========================================================= */


function iniciarProductosDestacados(){


    const contenedor =

    document.getElementById(

        "featuredProducts"

    );





    if(!contenedor){

        return;

    }






    const productos = [



        {

            imagen:
            "assets/productos/freefire.png",

            categoria:
            "GAMING",

            nombre:
            "Recargas Free Fire",

            descripcion:
            "Diamantes Free Fire mediante ID de jugador.",

            precio:
            "Gs. 6.000",

            link:
            "freefire.html",

            badge:
            "TOP VENTA"

        },





        {

            imagen:
            "assets/productos/netflix.png",

            categoria:
            "STREAMING",

            nombre:
            "Netflix Premium",

            descripcion:
            "Netflix Premium con diferentes opciones.",

            precio:
            "Desde Gs. 22.000",

            link:
            "producto.html?id=netflix",

            badge:
            "POPULAR"

        },





        {

            imagen:
            "assets/productos/spotify.png",

            categoria:
            "MÚSICA",

            nombre:
            "Spotify Premium",

            descripcion:
            "Música sin anuncios y sin límites.",

            precio:
            "Desde Gs. 25.000",

            link:
            "producto.html?id=spotify",

            badge:
            "POPULAR"

        },





        {

            imagen:
            "assets/productos/chatgpt.png",

            categoria:
            "IA TOOLS",

            nombre:
            "ChatGPT",

            descripcion:
            "Inteligencia artificial para crear y trabajar.",

            precio:
            "Desde Gs. 25.000",

            link:
            "producto.html?id=chatgpt",

            badge:
            "IA"

        },





        {

            imagen:
            "assets/productos/pubg.png",

            categoria:
            "GAMING",

            nombre:
            "PUBG Mobile",

            descripcion:
            "UC y beneficios premium.",

            precio:
            "Desde Gs. 8.000",

            link:
            "productogaming.html?id=pubg",

            badge:
            "OFERTA"

        },





        {

            imagen:
            "assets/productos/canva.png",

            categoria:
            "DISEÑO",

            nombre:
            "Canva Pro",

            descripcion:
            "Diseños profesionales Premium.",

            precio:
            "Desde Gs. 5.000",

            link:
            "producto.html?id=canva",

            badge:
            "PRO"

        }



    ];







    let inicio = 0;






    function renderizarProductos(){



        contenedor.innerHTML = "";





        let grupo =

        productos.slice(

            inicio,

            inicio + 4

        );






        if(
            grupo.length < 4
        ){


            grupo =

            grupo.concat(

                productos.slice(

                    0,

                    4 - grupo.length

                )

            );


        }







        grupo.forEach(

            producto=>{


                contenedor.innerHTML += `

<article class="product-card fade-up hover-lift">

<a href="${producto.link}">


<div class="product-image image-zoom">


<img

src="${producto.imagen}"

alt="${producto.nombre}"

loading="lazy"

>


<span class="product-badge">

${producto.badge}

</span>


</div>


<div class="product-info">


<span class="product-category">

${producto.categoria}

</span>


<h2>

${producto.nombre}

</h2>


<p>

${producto.descripcion}

</p>


<div class="product-bottom">


<div class="price">


<small>

Desde

</small>


<strong>

${producto.precio}

</strong>


</div>


<span class="product-arrow">

→

</span>


</div>


</div>


</a>

</article>

`;



            }

        );





        inicio += 4;





        if(
            inicio >= productos.length
        ){

            inicio = 0;

        }




    }






    renderizarProductos();





    setInterval(

        ()=>{


            renderizarProductos();



        },

        5000

    );



}
   
/* =========================================================
   ACTUALIZAR CARRITO ENTRE PESTAÑAS
========================================================= */


window.addEventListener(

    "storage",

    (event)=>{


        if(
            event.key === CART_KEY
        ){


            actualizarCarritoHeader();


        }


    }

);









/* =========================================================
   INICIALIZAR SISTEMA AMERISSTORE
========================================================= */


actualizarCarritoHeader();


iniciarWhatsapp();


iniciarMenuMovil();


iniciarExplorarCategorias();


iniciarCategorySliders();


iniciarProductosDestacados();





});
