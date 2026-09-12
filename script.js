/* =========================================================
   AMERISSTORE
   SCRIPT GENERAL DE LA TIENDA
========================================================= */

"use strict";


/* =========================================================
   CONFIGURACIÓN GENERAL
========================================================= */

const WHATSAPP_STORE = "595981841136";



/* =========================================================
   CATÁLOGO AMERISSTORE
========================================================= */

const productos = [

    /* =====================================================
       STREAMING
    ====================================================== */

    {
        categoria: "Streaming",
        nombre: "Netflix",
        descripcion:
            "Series y películas ilimitadas en calidad Premium.",
        precio: "Gs. 30.000",
        precioSecundario: "",
        imagen: "assets/logos/netflix.jpg",
        badge: "OFERTA"
    },

    {
        categoria: "Streaming",
        nombre: "Disney+ + ESPN",
        descripcion:
            "Disney, Marvel, Star Wars y deportes en vivo.",
        precio: "Gs. 25.000",
        precioSecundario: "",
        imagen: "assets/logos/disney-espn.jpg",
        badge: "OFERTA"
    },

    {
        categoria: "Streaming",
        nombre: "Prime Video",
        descripcion:
            "Películas, series exclusivas y contenido original.",
        precio: "Gs. 20.000",
        precioSecundario: "",
        imagen: "assets/logos/prime-video.jpg",
        badge: "OFERTA"
    },

    {
        categoria: "Streaming",
        nombre: "Max",
        descripcion:
            "HBO, Warner Bros., DC y mucho más.",
        precio: "Gs. 15.000",
        precioSecundario: "",
        imagen: "assets/logos/max.jpg",
        badge: "OFERTA"
    },

    {
        categoria: "Streaming",
        nombre: "Crunchyroll",
        descripcion:
            "El mejor catálogo de anime en streaming.",
        precio: "Gs. 12.000",
        precioSecundario: "",
        imagen: "assets/logos/crunchyroll.jpg",
        badge: "OFERTA"
    },

    {
        categoria: "Streaming",
        nombre: "Flujo TV",
        descripcion:
            "Canales en vivo, deportes y entretenimiento.",
        precio: "Gs. 30.000",
        precioSecundario: "",
        imagen: "assets/logos/flujo-tv.jpg",
        badge: "OFERTA"
    },

    {
        categoria: "Streaming",
        nombre: "Paramount+",
        descripcion:
            "Series, películas y eventos deportivos.",
        precio: "Gs. 15.000",
        precioSecundario: "",
        imagen: "assets/logos/paramount.jpg",
        badge: "OFERTA"
    },

    {
        categoria: "Streaming",
        nombre: "ViX+",
        descripcion:
            "Contenido latino, novelas, películas y deportes.",
        precio: "Gs. 12.000",
        precioSecundario: "",
        imagen: "assets/logos/vix.jpg",
        badge: "OFERTA"
    },



    /* =====================================================
       MÚSICA
    ====================================================== */

    {
        categoria: "Música",
        nombre: "Spotify Premium",
        descripcion:
            "Escucha música sin anuncios y sin límites.",
        precio: "Desde Gs. 25.000",
        precioSecundario:
            "1 mes 25.000 · 3 meses 60.000 · 6 meses 100.000 · 1 año 200.000",
        imagen: "assets/logos/spotify.jpg",
        badge: "POPULAR"
    },

    {
        categoria: "Música",
        nombre: "YouTube Premium",
        descripcion:
            "YouTube sin anuncios, reproducción en segundo plano y YouTube Music.",
        precio: "Desde Gs. 25.000",
        precioSecundario:
            "1 mes 25.000 · 3 meses 60.000",
        imagen: "assets/logos/youtube-premium.jpg",
        badge: "PREMIUM"
    },



    /* =====================================================
       MÁS STREAMING
    ====================================================== */

    {
        categoria: "Streaming",
        nombre: "Apple TV+",
        descripcion:
            "Series y películas originales de Apple.",
        precio: "Gs. 20.000",
        precioSecundario: "",
        imagen: "assets/logos/apple-tv.jpg",
        badge: "OFERTA"
    },

    {
        categoria: "Streaming",
        nombre: "Universal+",
        descripcion:
            "Series exclusivas, películas y contenido Premium.",
        precio: "Gs. 20.000",
        precioSecundario: "",
        imagen: "assets/logos/universal-plus.jpg",
        badge: "OFERTA"
    },

    {
        categoria: "Streaming",
        nombre: "MUBI",
        descripcion:
            "Cine independiente y películas premiadas.",
        precio: "Gs. 20.000",
        precioSecundario: "",
        imagen: "assets/logos/mubi.jpg",
        badge: "CINE"
    },

    {
        categoria: "Streaming",
        nombre: "Rakuten Viki",
        descripcion:
            "Dramas coreanos y series asiáticas con subtítulos.",
        precio: "Gs. 20.000",
        precioSecundario: "",
        imagen: "assets/logos/rakuten-viki.jpg",
        badge: "ASIA"
    },



    /* =====================================================
       INTELIGENCIA ARTIFICIAL
    ====================================================== */

    {
        categoria: "Inteligencia Artificial",
        nombre: "ChatGPT Plus",
        descripcion:
            "Herramientas avanzadas de inteligencia artificial.",
        precio: "Gs. 25.000",
        precioSecundario: "",
        imagen: "assets/logos/chatgpt.jpg",
        badge: "IA"
    },

    {
        categoria: "Inteligencia Artificial",
        nombre: "Google Gemini Pro",
        descripcion:
            "IA avanzada de Google con funciones Premium.",
        precio: "Desde Gs. 89.000",
        precioSecundario: "",
        imagen: "assets/logos/gemini.jpg",
        badge: "IA"
    },



    /* =====================================================
       DISEÑO
    ====================================================== */

    {
        categoria: "Diseño",
        nombre: "Canva Pro",
        descripcion:
            "Todas las funciones Premium para diseño profesional.",
        precio: "Desde Gs. 5.000",
        precioSecundario: "",
        imagen: "assets/logos/canva.jpg",
        badge: "PRO"
    },

    {
        categoria: "Diseño",
        nombre: "CapCut Pro",
        descripcion:
            "Edición de video profesional con herramientas Premium.",
        precio: "Gs. 30.000 /mes",
        precioSecundario: "",
        imagen: "assets/logos/capcut.jpg",
        badge: "PRO"
    },



    /* =====================================================
       EDUCACIÓN
    ====================================================== */

    {
        categoria: "Educación",
        nombre: "Duolingo Super (30 días)",
        descripcion:
            "Aprende idiomas sin anuncios y con funciones avanzadas.",
        precio: "Gs. 25.000",
        precioSecundario: "",
        imagen: "assets/logos/duolingo-30.jpg",
        badge: "TOP"
    },

    {
        categoria: "Educación",
        nombre: "Duolingo Super (1 año)",
        descripcion:
            "Aprende idiomas sin anuncios y con funciones avanzadas.",
        precio: "Gs. 150.000",
        precioSecundario: "",
        imagen: "assets/logos/duolingo-1ano.jpg",
        badge: "TOP"
    },



    /* =====================================================
       SEGURIDAD
    ====================================================== */

    {
        categoria: "Seguridad",
        nombre: "NordVPN",
        descripcion:
            "Protege tu conexión y navega de forma segura.",
        precio: "Gs. 25.000",
        precioSecundario: "",
        imagen: "assets/logos/nordvpn.jpg",
        badge: "VPN"
    },

    {
        categoria: "Seguridad",
        nombre: "Surfshark VPN",
        descripcion:
            "Navegación privada y acceso a contenido internacional.",
        precio: "Gs. 20.000",
        precioSecundario: "",
        imagen: "assets/logos/surfshark.jpg",
        badge: "VPN"
    }

];



/* =========================================================
   ESCAPAR TEXTO PARA HTML
========================================================= */

function escaparHTML(texto) {

    return String(texto || "")

        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}



/* =========================================================
   RENDERIZAR CATÁLOGO
========================================================= */

function renderCatalogo(
    filtro = "todos"
) {

    const grid =
        document.getElementById(
            "catalogGrid"
        );


    /*
    Si estamos en una página que
    no tiene catálogo, no hacemos nada.
    */

    if (!grid) {

        return;

    }


    let lista = productos;


    /* FILTRAR */

    if (
        filtro !== "todos"
    ) {

        lista =
            productos.filter(
                producto =>
                    producto.categoria === filtro
            );

    }


    /* CREAR TARJETAS */

    grid.innerHTML =

        lista

            .map(producto => {

                return `

                    <article
                        class="catalog-card"
                    >


                        <!-- IMAGEN -->

                        <div
                            class="catalog-image-wrap"
                        >


                            <span
                                class="catalog-badge"
                            >

                                ${escaparHTML(
                                    producto.badge
                                )}

                            </span>


                            <img
                                src="${escaparHTML(
                                    producto.imagen
                                )}"
                                alt="${escaparHTML(
                                    producto.nombre
                                )}"
                                loading="lazy"
                            >


                            <div
                                class="catalog-overlay"
                            >
                            </div>


                        </div>



                        <!-- INFORMACIÓN -->

                        <div
                            class="catalog-content"
                        >


                            <span
                                class="catalog-category"
                            >

                                ${escaparHTML(
                                    producto.categoria
                                )}

                            </span>


                            <h3
                                class="catalog-title"
                            >

                                ${escaparHTML(
                                    producto.nombre
                                )}

                            </h3>


                            <p
                                class="catalog-description"
                            >

                                ${escaparHTML(
                                    producto.descripcion
                                )}

                            </p>



                            <div
                                class="catalog-price"
                            >

                                <strong>

                                    ${escaparHTML(
                                        producto.precio
                                    )}

                                </strong>

                            </div>



                            ${
                                producto.precioSecundario

                                    ? `

                                        <p
                                            class="catalog-secondary-price"
                                        >

                                            ${escaparHTML(
                                                producto.precioSecundario
                                            )}

                                        </p>

                                    `

                                    : ""
                            }



                            <button
                                type="button"
                                class="catalog-btn"
                                data-producto="${escaparHTML(
                                    producto.nombre
                                )}"
                                data-precio="${escaparHTML(
                                    producto.precio
                                )}"
                            >

                                Comprar

                            </button>


                        </div>


                    </article>

                `;

            })

            .join("");


    /*
    Después de crear las tarjetas,
    conectamos los botones.
    */

    activarBotonesCatalogo();

}



/* =========================================================
   BOTONES DEL CATÁLOGO
========================================================= */

function activarBotonesCatalogo() {


    const botones =

        document.querySelectorAll(
            ".catalog-btn"
        );


    botones.forEach(boton => {


        boton.addEventListener(
            "click",
            () => {


                const nombre =

                    boton.dataset.producto ||
                    "";


                const precio =

                    boton.dataset.precio ||
                    "";


                comprarCatalogo(
                    nombre,
                    precio
                );

            }
        );

    });

}



/* =========================================================
   COMPRAR PRODUCTO DEL CATÁLOGO
========================================================= */

function comprarCatalogo(
    nombre,
    precio
) {


    if (!nombre) {

        return;

    }


    const mensaje =
`Hola AMERISSTORE 👋

Estoy interesado en este servicio:

📦 Producto:
${nombre}

💰 Precio:
${precio}

Quiero más información para completar la compra.`;


    abrirWhatsAppStore(
        mensaje
    );

}



/* =========================================================
   ABRIR WHATSAPP GENERAL
========================================================= */

function abrirWhatsAppStore(
    mensaje
) {


    const url =

        `https://wa.me/${WHATSAPP_STORE}?text=${encodeURIComponent(
            mensaje
        )}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}



/* =========================================================
   FILTROS DEL CATÁLOGO
========================================================= */

function iniciarFiltrosCatalogo() {


    const filtros =

        document.querySelectorAll(
            ".filter-btn"
        );


    if (
        filtros.length === 0
    ) {

        return;

    }


    filtros.forEach(boton => {


        boton.addEventListener(
            "click",
            () => {


                /* QUITAR ACTIVE */

                filtros.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                /* ACTIVAR NUEVO */

                boton.classList.add(
                    "active"
                );


                /* FILTRAR */

                renderCatalogo(

                    boton.dataset.filter ||
                    "todos"

                );

            }
        );

    });

}



/* =========================================================
   BOTONES .buy-product
========================================================= */

function iniciarBotonesCompra() {


    const botones =

        document.querySelectorAll(
            ".buy-product"
        );


    botones.forEach(boton => {


        boton.addEventListener(
            "click",
            event => {


                event.preventDefault();


                const producto =

                    boton.dataset.producto ||
                    "Producto";


                const precio =

                    boton.dataset.precio ||
                    "";


                const mensaje =
`Hola AMERISSTORE 👋

Quiero adquirir este servicio:

📦 Servicio:
${producto}

💰 Precio:
${precio}

¿Me pueden ayudar con la activación?`;


                abrirWhatsAppStore(
                    mensaje
                );

            }
        );

    });

}



/* =========================================================
   MENÚ MÓVIL
========================================================= */

function iniciarMenuMovil() {


    const menuToggle =

        document.getElementById(
            "menu-toggle"
        );


    const mainMenu =

        document.getElementById(
            "main-menu"
        );


    if (
        !menuToggle ||
        !mainMenu
    ) {

        return;

    }


    /* ABRIR / CERRAR */

    menuToggle.addEventListener(
        "click",
        () => {


            const abierto =

                mainMenu.classList.toggle(
                    "open"
                );


            menuToggle.setAttribute(

                "aria-expanded",

                String(
                    abierto
                )

            );


            menuToggle.textContent =

                abierto
                    ? "✕"
                    : "☰";

        }
    );


    /* CERRAR AL TOCAR ENLACE */

    const enlaces =

        mainMenu.querySelectorAll(
            "a"
        );


    enlaces.forEach(enlace => {


        enlace.addEventListener(
            "click",
            () => {


                mainMenu.classList.remove(
                    "open"
                );


                menuToggle.setAttribute(

                    "aria-expanded",

                    "false"

                );


                menuToggle.textContent =
                    "☰";

            }
        );

    });

}
/* =========================================================
   CARRITO GENERAL AMERISSTORE
========================================================= */

const CART_KEY =
    "amerisstore_carrito";


let carritoAmeris =
    cargarCarritoGeneral();



/* =========================================================
   CARGAR CARRITO
========================================================= */

function cargarCarritoGeneral() {

    try {

        const guardado =
            localStorage.getItem(
                CART_KEY
            );


        if (!guardado) {

            return [];

        }


        const datos =
            JSON.parse(
                guardado
            );


        return Array.isArray(
            datos
        )
            ? datos
            : [];

    }
    catch (error) {

        console.warn(
            "No se pudo cargar el carrito:",
            error
        );


        return [];

    }

}



/* =========================================================
   GUARDAR CARRITO
========================================================= */

function guardarCarritoGeneral() {

    localStorage.setItem(

        CART_KEY,

        JSON.stringify(
            carritoAmeris
        )

    );


    actualizarCarritoHeader();


    renderizarCarritoGeneral();

}



/* =========================================================
   CONVERTIR PRECIO
========================================================= */

function convertirPrecioGeneral(
    precio
) {

    if (
        typeof precio === "number"
    ) {

        return precio;

    }


    const numero =

        parseInt(

            String(
                precio || ""
            ).replace(
                /\D/g,
                ""
            ),

            10

        );


    return Number.isNaN(
        numero
    )
        ? 0
        : numero;

}



/* =========================================================
   FORMATEAR GUARANÍES
========================================================= */

function formatearGsGeneral(
    numero
) {

    return (

        "Gs. " +

        Number(
            numero || 0
        ).toLocaleString(
            "es-PY"
        )

    );

}



/* =========================================================
   AGREGAR AL CARRITO
========================================================= */

function agregarAlCarritoGeneral(
    nombre,
    precio,
    imagen = "",
    cantidad = 1
) {

    const precioNumero =

        convertirPrecioGeneral(
            precio
        );


    const existente =

        carritoAmeris.find(
            item =>
                item.nombre === nombre
        );


    if (existente) {

        existente.cantidad +=
            cantidad;

    }
    else {

        carritoAmeris.push({

            nombre:
                nombre,

            precio:
                precioNumero,

            imagen:
                imagen,

            cantidad:
                cantidad

        });

    }


    guardarCarritoGeneral();


    mostrarNotificacionGeneral(

        `${nombre} agregado al carrito`

    );

}



/* =========================================================
   ELIMINAR PRODUCTO
========================================================= */

function eliminarDelCarritoGeneral(
    index
) {

    if (
        index < 0 ||
        index >= carritoAmeris.length
    ) {

        return;

    }


    carritoAmeris.splice(
        index,
        1
    );


    guardarCarritoGeneral();

}



/* =========================================================
   CAMBIAR CANTIDAD
========================================================= */

function cambiarCantidadCarritoGeneral(
    index,
    cambio
) {

    const item =
        carritoAmeris[
            index
        ];


    if (!item) {

        return;

    }


    item.cantidad +=
        cambio;


    if (
        item.cantidad <= 0
    ) {

        carritoAmeris.splice(
            index,
            1
        );

    }


    guardarCarritoGeneral();

}



/* =========================================================
   VACIAR CARRITO
========================================================= */

function vaciarCarritoGeneral() {

    carritoAmeris = [];


    guardarCarritoGeneral();


    mostrarNotificacionGeneral(
        "Carrito vaciado"
    );

}



/* =========================================================
   CANTIDAD TOTAL
========================================================= */

function obtenerCantidadCarritoGeneral() {

    return carritoAmeris.reduce(

        (
            total,
            item
        ) =>

            total +

            Number(
                item.cantidad || 0
            ),

        0

    );

}



/* =========================================================
   TOTAL DEL CARRITO
========================================================= */

function obtenerTotalCarritoGeneral() {

    return carritoAmeris.reduce(

        (
            total,
            item
        ) =>

            total +

            Number(
                item.precio || 0
            ) *

            Number(
                item.cantidad || 0
            ),

        0

    );

}



/* =========================================================
   ACTUALIZAR HEADER
========================================================= */

function actualizarCarritoHeader() {

    const contador =

        document.getElementById(
            "cart-count"
        );


    const totalElemento =

        document.getElementById(
            "cart-total"
        );


    if (contador) {

        contador.textContent =

            obtenerCantidadCarritoGeneral();

    }


    if (totalElemento) {

        totalElemento.textContent =

            formatearGsGeneral(

                obtenerTotalCarritoGeneral()

            );

    }

}



/* =========================================================
   NOTIFICACIÓN GENERAL
========================================================= */

function mostrarNotificacionGeneral(
    mensaje
) {

    const anterior =

        document.querySelector(
            ".store-notification"
        );


    if (anterior) {

        anterior.remove();

    }


    const notificacion =

        document.createElement(
            "div"
        );


    notificacion.className =
        "store-notification";


    notificacion.textContent =
        mensaje;


    document.body.appendChild(
        notificacion
    );


    requestAnimationFrame(
        () => {

            notificacion.classList.add(
                "show"
            );

        }
    );


    setTimeout(
        () => {

            notificacion.classList.remove(
                "show"
            );


            setTimeout(
                () => {

                    notificacion.remove();

                },

                250
            );

        },

        2200

    );

}



/* =========================================================
   CREAR PANEL DEL CARRITO
========================================================= */

function crearCarritoGeneral() {

    if (
        document.getElementById(
            "storeCartDrawer"
        )
    ) {

        return;

    }


    const overlay =

        document.createElement(
            "div"
        );


    overlay.id =
        "storeCartOverlay";


    overlay.className =
        "store-cart-overlay";



    const drawer =

        document.createElement(
            "aside"
        );


    drawer.id =
        "storeCartDrawer";


    drawer.className =
        "store-cart-drawer";


    drawer.innerHTML = `

        <div
            class="store-cart-head"
        >

            <div>

                <span>
                    AMERISSTORE
                </span>

                <h2>
                    Tu carrito
                </h2>

            </div>


            <button
                type="button"
                class="store-cart-close"
                aria-label="Cerrar carrito"
            >
                ✕
            </button>

        </div>


        <div
            id="storeCartItems"
            class="store-cart-items"
        >
        </div>


        <div
            class="store-cart-footer"
        >


            <div
                class="store-cart-total"
            >

                <span>
                    Total
                </span>

                <strong
                    id="storeCartTotal"
                >

                    Gs. 0

                </strong>

            </div>


            <button
                type="button"
                id="storeCartWhatsapp"
                class="store-cart-whatsapp"
            >

                💬 COMPRAR POR WHATSAPP

            </button>


            <button
                type="button"
                id="storeCartClear"
                class="store-cart-clear"
            >

                Vaciar carrito

            </button>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    document.body.appendChild(
        drawer
    );


    /* CERRAR CON OVERLAY */

    overlay.addEventListener(
        "click",
        cerrarCarritoGeneral
    );


    /* CERRAR CON X */

    const cerrar =

        drawer.querySelector(
            ".store-cart-close"
        );


    if (cerrar) {

        cerrar.addEventListener(

            "click",

            cerrarCarritoGeneral

        );

    }


    /* VACIAR */

    const vaciar =

        document.getElementById(
            "storeCartClear"
        );


    if (vaciar) {

        vaciar.addEventListener(

            "click",

            vaciarCarritoGeneral

        );

    }


    /* WHATSAPP */

    const whatsapp =

        document.getElementById(
            "storeCartWhatsapp"
        );


    if (whatsapp) {

        whatsapp.addEventListener(

            "click",

            comprarCarritoGeneralWhatsApp

        );

    }

}



/* =========================================================
   ABRIR CARRITO
========================================================= */

function abrirCarritoGeneral() {

    crearCarritoGeneral();


    renderizarCarritoGeneral();


    const overlay =

        document.getElementById(
            "storeCartOverlay"
        );


    const drawer =

        document.getElementById(
            "storeCartDrawer"
        );


    if (overlay) {

        overlay.classList.add(
            "open"
        );

    }


    if (drawer) {

        drawer.classList.add(
            "open"
        );

    }


    document.body.classList.add(
        "cart-open"
    );

}



/* =========================================================
   CERRAR CARRITO
========================================================= */

function cerrarCarritoGeneral() {

    const overlay =

        document.getElementById(
            "storeCartOverlay"
        );


    const drawer =

        document.getElementById(
            "storeCartDrawer"
        );


    if (overlay) {

        overlay.classList.remove(
            "open"
        );

    }


    if (drawer) {

        drawer.classList.remove(
            "open"
        );

    }


    document.body.classList.remove(
        "cart-open"
    );

}



/* =========================================================
   RENDERIZAR CARRITO
========================================================= */

function renderizarCarritoGeneral() {

    const container =

        document.getElementById(
            "storeCartItems"
        );


    const totalElemento =

        document.getElementById(
            "storeCartTotal"
        );


    if (!container) {

        actualizarCarritoHeader();


        return;

    }


    /* CARRITO VACÍO */

    if (
        carritoAmeris.length === 0
    ) {

        container.innerHTML = `

            <div
                class="store-cart-empty"
            >

                <div>
                    🛒
                </div>

                <h3>
                    Tu carrito está vacío
                </h3>

                <p>
                    Agrega productos para verlos aquí.
                </p>

            </div>

        `;

    }
    else {

        container.innerHTML =

            carritoAmeris

                .map(
                    (
                        item,
                        index
                    ) => `

                        <article
                            class="store-cart-item"
                        >

                            <div
                                class="store-cart-item-info"
                            >

                                <h3>

                                    ${escaparHTML(
                                        item.nombre
                                    )}

                                </h3>


                                <p>

                                    ${formatearGsGeneral(
                                        item.precio
                                    )}

                                </p>

                            </div>


                            <div
                                class="store-cart-controls"
                            >

                                <button
                                    type="button"
                                    data-cart-minus="${index}"
                                >
                                    −
                                </button>


                                <strong>

                                    ${item.cantidad}

                                </strong>


                                <button
                                    type="button"
                                    data-cart-plus="${index}"
                                >
                                    +
                                </button>


                                <button
                                    type="button"
                                    class="remove"
                                    data-cart-remove="${index}"
                                >
                                    ✕
                                </button>

                            </div>

                        </article>

                    `
                )

                .join("");


        /* BOTÓN MENOS */

        container

            .querySelectorAll(
                "[data-cart-minus]"
            )

            .forEach(boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        cambiarCantidadCarritoGeneral(

                            Number(
                                boton.dataset.cartMinus
                            ),

                            -1

                        );

                    }
                );

            });


        /* BOTÓN MÁS */

        container

            .querySelectorAll(
                "[data-cart-plus]"
            )

            .forEach(boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        cambiarCantidadCarritoGeneral(

                            Number(
                                boton.dataset.cartPlus
                            ),

                            1

                        );

                    }
                );

            });


        /* ELIMINAR */

        container

            .querySelectorAll(
                "[data-cart-remove]"
            )

            .forEach(boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        eliminarDelCarritoGeneral(

                            Number(
                                boton.dataset.cartRemove
                            )

                        );

                    }
                );

            });

    }


    if (totalElemento) {

        totalElemento.textContent =

            formatearGsGeneral(

                obtenerTotalCarritoGeneral()

            );

    }


    actualizarCarritoHeader();

}



/* =========================================================
   COMPRAR CARRITO POR WHATSAPP
========================================================= */

function comprarCarritoGeneralWhatsApp() {

    if (
        carritoAmeris.length === 0
    ) {

        mostrarNotificacionGeneral(
            "Tu carrito está vacío"
        );


        return;

    }


    const productosTexto =

        carritoAmeris

            .map(
                item =>

                    `${item.cantidad}x ${item.nombre}

${formatearGsGeneral(
    item.precio *
    item.cantidad
)}`

            )

            .join(
                "\n\n"
            );


    const mensaje =
`Hola AMERISSTORE 👋

Quiero realizar este pedido:

${productosTexto}

-------------------------

🧾 TOTAL:
${formatearGsGeneral(
    obtenerTotalCarritoGeneral()
)}

Quiero completar mi compra.`;


    abrirWhatsAppStore(
        mensaje
    );

}



/* =========================================================
   BOTÓN DEL CARRITO
========================================================= */

function iniciarBotonCarrito() {

    const botonCarrito =

        document.getElementById(
            "cart-button"
        );


    if (!botonCarrito) {

        return;

    }


    botonCarrito.addEventListener(
        "click",
        event => {


            event.preventDefault();


            abrirCarritoGeneral();

        }
    );

}



/* =========================================================
   BOTONES PARA AGREGAR PRODUCTOS
========================================================= */

function iniciarBotonesAgregarCarrito() {

    const botones =

        document.querySelectorAll(
            "[data-add-cart]"
        );


    botones.forEach(boton => {


        boton.addEventListener(
            "click",
            () => {


                const nombre =

                    boton.dataset.producto ||
                    boton.dataset.nombre ||
                    "Producto";


                const precio =

                    boton.dataset.precio ||
                    "0";


                const imagen =

                    boton.dataset.imagen ||
                    "";


                agregarAlCarritoGeneral(

                    nombre,

                    precio,

                    imagen,

                    1

                );

            }
        );

    });

}



/* =========================================================
   WHATSAPP FLOTANTE Y BOTONES DIRECTOS
========================================================= */

function iniciarWhatsappGeneral() {

    const enlaces =

        document.querySelectorAll(

            ".floating-whatsapp, .btn-whatsapp"

        );


    enlaces.forEach(enlace => {


        if (
            enlace.tagName.toLowerCase() ===
            "a"
        ) {

            enlace.target =
                "_blank";


            enlace.rel =
                "noopener noreferrer";

        }

    });

}



/* =========================================================
   INICIALIZAR TODA LA WEB
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* CATÁLOGO */

        renderCatalogo();


        iniciarFiltrosCatalogo();


        iniciarBotonesCompra();


        /* MENÚ */

        iniciarMenuMovil();


        /* CARRITO */

        crearCarritoGeneral();


        actualizarCarritoHeader();


        renderizarCarritoGeneral();


        iniciarBotonCarrito();


        iniciarBotonesAgregarCarrito();


        /* WHATSAPP */

        iniciarWhatsappGeneral();


        console.log(
            "AMERISSTORE cargado correctamente ✅"
        );

    }
);
