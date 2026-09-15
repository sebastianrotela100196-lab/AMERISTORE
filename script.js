/* =========================================================
   AMERISSTORE
   SCRIPT GENERAL LIMPIO
========================================================= */

"use strict";


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       CONFIGURACIÓN
    ===================================================== */

    const CART_KEY = "amerisstore_carrito";
    const WHATSAPP_STORE = "595981841136";


    /* =====================================================
       CARRITO - CONTADOR GLOBAL
    ===================================================== */

    function obtenerCarrito() {

        try {

            return JSON.parse(
                localStorage.getItem(CART_KEY)
            ) || [];

        } catch (error) {

            console.error(
                "Error al leer el carrito:",
                error
            );

            return [];

        }

    }


    function obtenerCantidadCarrito() {

        const carrito = obtenerCarrito();

        return carrito.reduce(
            (total, item) => {

                return total + Number(
                    item.cantidad || 1
                );

            },
            0
        );

    }


    function obtenerTotalCarrito() {

        const carrito = obtenerCarrito();

        return carrito.reduce(
            (total, item) => {

                return total + (
                    Number(item.precio || 0) *
                    Number(item.cantidad || 1)
                );

            },
            0
        );

    }


    function formatearGs(numero) {

        return (
            "Gs. " +
            Number(numero || 0)
                .toLocaleString("es-PY")
        );

    }


    function actualizarCarritoHeader() {

        const contador =
            document.getElementById("cart-count");

        const total =
            document.getElementById("cart-total");


        if (contador) {

            contador.textContent =
                obtenerCantidadCarrito();

        }


        if (total) {

            total.textContent =
                formatearGs(
                    obtenerTotalCarrito()
                );

        }

    }


    /* =====================================================
       WHATSAPP GENERAL
    ===================================================== */

    function abrirWhatsApp(mensaje) {

        const url =
            "https://wa.me/" +
            WHATSAPP_STORE +
            "?text=" +
            encodeURIComponent(mensaje);

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }


    function iniciarWhatsapp() {

        const botones =
            document.querySelectorAll(
                ".floating-whatsapp, .btn-whatsapp"
            );


        botones.forEach((boton) => {

            /*
            Si el elemento ya tiene href de WhatsApp,
            dejamos que use ese enlace personalizado.
            */

            if (
                boton.tagName === "A" &&
                boton.getAttribute("href")?.includes("wa.me")
            ) {
                return;
            }


            boton.addEventListener("click", (event) => {

                event.preventDefault();

                abrirWhatsApp(
                    "Hola AMERISSTORE 👋 Quiero consultar sobre un servicio."
                );

            });

        });

    }


    /* =====================================================
       MENÚ MÓVIL
    ===================================================== */

    function iniciarMenuMovil() {

        const boton =
            document.getElementById("menu-toggle");

        const menu =
            document.getElementById("main-menu");


        if (!boton || !menu) {
            return;
        }


        boton.addEventListener("click", () => {

            const abierto =
                menu.classList.toggle("open");

            boton.setAttribute(
                "aria-expanded",
                String(abierto)
            );

            boton.textContent =
                abierto ? "✕" : "☰";

        });


        const enlaces =
            menu.querySelectorAll("a");


        enlaces.forEach((enlace) => {

            enlace.addEventListener("click", () => {

                menu.classList.remove("open");

                boton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                boton.textContent = "☰";

            });

        });

    }


    /* =====================================================
       FILTROS CATÁLOGO
    ===================================================== */

    function iniciarFiltros() {

        const botones =
            document.querySelectorAll(".filter-btn");


        if (botones.length === 0) {
            return;
        }


        botones.forEach((boton) => {

            boton.addEventListener("click", () => {

                botones.forEach((item) => {

                    item.classList.remove("active");

                });


                boton.classList.add("active");


                const filtro =
                    boton.dataset.filter;


                const evento =
                    new CustomEvent(
                        "amerisFiltro",
                        {
                            detail: filtro
                        }
                    );


                document.dispatchEvent(evento);

            });

        });

    }


    /* =====================================================
       MENÚ - PÁGINA ACTUAL
    ===================================================== */

    function marcarPaginaActual() {

        const pagina =
            window.location.pathname
                .split("/")
                .pop() || "index.html";


        const enlaces =
            document.querySelectorAll(".menu a");


        enlaces.forEach((enlace) => {

            enlace.classList.remove("active");

            const href =
                enlace.getAttribute("href");


            if (!href) {
                return;
            }


            const destino =
                href.split("?")[0];


            if (destino === pagina) {

                enlace.classList.add("active");

            }

        });

    }


    /* =====================================================
       EXPLORAR CATEGORÍAS
    ===================================================== */

    function iniciarExplorarCategorias() {

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


        if (!boton || !menu) {
            return;
        }


        boton.addEventListener("click", () => {

            const abierto =
                menu.classList.toggle("show");


            boton.setAttribute(
                "aria-expanded",
                String(abierto)
            );


            if (icono) {

                icono.textContent =
                    abierto ? "−" : "+";

            }

        });

    }


    /* =====================================================
       ACTUALIZAR CARRITO ENTRE PESTAÑAS
    ===================================================== */

    window.addEventListener(
        "storage",
        (event) => {

            if (event.key === CART_KEY) {

                actualizarCarritoHeader();

            }

        }
    );

/* =====================================================
   SLIDER CATEGORÍAS
===================================================== */


function iniciarCategorySliders(){


    const sliders = document.querySelectorAll(
        ".category-image-slider"
    );


    sliders.forEach((slider)=>{


        const imagenes =
        slider.querySelectorAll("img");


        if(imagenes.length === 0){
            return;
        }



        let actual = 0;



        imagenes[0].classList.add("active");



        setInterval(()=>{


            imagenes[actual]
            .classList.remove("active");



            actual++;



            if(actual >= imagenes.length){

                actual = 0;

            }



            imagenes[actual]
            .classList.add("active");



        },3000);



    });


}
    /* =====================================================
       INICIALIZAR
    ===================================================== */

    actualizarCarritoHeader();

    iniciarWhatsapp();

    iniciarMenuMovil();

    iniciarFiltros();

    marcarPaginaActual();

    iniciarExplorarCategorias();
    iniciarCategorySliders();


});
