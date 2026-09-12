/* =========================================================
   AMERISSTORE - FREE FIRE
   JavaScript exclusivo para freefire.html
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       CONFIGURACIÓN
    ====================================================== */

    const WHATSAPP = "595981841136";

    const CART_KEY = "amerisstore_carrito";


    /* =====================================================
       DATOS DE LA COMPRA
    ====================================================== */

    const compra = {

        producto: "",

        precioTexto: "",

        precioNumero: 0,

        id: "",

        cantidad: 1

    };


    /* =====================================================
       ELEMENTOS DE LA PÁGINA
    ====================================================== */

    const diamondCards =
        document.querySelectorAll(
            ".diamond-card"
        );


    const step2 =
        document.getElementById(
            "step2"
        );


    const step3 =
        document.getElementById(
            "step3"
        );


    const playerID =
        document.getElementById(
            "playerID"
        );


    const continueStep2 =
        document.getElementById(
            "continueStep2"
        );


    const openGuide =
        document.getElementById(
            "openGuide"
        );


    const guideContent =
        document.getElementById(
            "guideContent"
        );


    const summaryProduct =
        document.getElementById(
            "summaryProduct"
        );


    const summaryPrice =
        document.getElementById(
            "summaryPrice"
        );


    const summaryID =
        document.getElementById(
            "summaryID"
        );


    const quantityInput =
        document.getElementById(
            "quantity"
        );


    const minusBtn =
        document.getElementById(
            "minus"
        );


    const plusBtn =
        document.getElementById(
            "plus"
        );


    const totalPrice =
        document.getElementById(
            "totalPrice"
        );


    const buyWhatsapp =
        document.getElementById(
            "buyWhatsapp"
        );


    const extraButtons =
        document.querySelectorAll(
            ".buy-button"
        );


    /* =====================================================
       CONVERTIR PRECIO A NÚMERO
    ====================================================== */

    function precioANumero(precio) {

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


        return Number.isNaN(numero)
            ? 0
            : numero;

    }


    /* =====================================================
       FORMATEAR GUARANÍES
    ====================================================== */

    function formatearGs(numero) {

        return (
            "Gs. " +
            Number(
                numero || 0
            ).toLocaleString(
                "es-PY"
            )
        );

    }


    /* =====================================================
       VALIDAR USER ID
    ====================================================== */

    function esIDValido(valor) {

        return /^\d{6,15}$/.test(
            String(
                valor || ""
            )
        );

    }


    /* =====================================================
       SCROLL SUAVE
    ====================================================== */

    function scrollHacia(elemento) {

        if (!elemento) {

            return;

        }


        setTimeout(() => {

            elemento.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }, 120);

    }


    /* =====================================================
       ABRIR WHATSAPP
    ====================================================== */

    function abrirWhatsApp(mensaje) {

        const url =

            `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                mensaje
            )}`;


        window.open(

            url,

            "_blank",

            "noopener,noreferrer"

        );

    }


    /* =====================================================
       NOTIFICACIONES
    ====================================================== */

    function mostrarNotificacion(mensaje) {

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


        requestAnimationFrame(() => {

            notificacion.classList.add(
                "show"
            );

        });


        setTimeout(() => {

            notificacion.classList.remove(
                "show"
            );


            setTimeout(() => {

                notificacion.remove();

            }, 250);

        }, 2200);

    }


    /* =====================================================
       ACTUALIZAR RESUMEN
    ====================================================== */

    function actualizarResumen() {


        if (summaryProduct) {

            summaryProduct.textContent =
                compra.producto || "-";

        }


        if (summaryPrice) {

            summaryPrice.textContent =
                compra.precioTexto || "-";

        }


        if (summaryID) {

            summaryID.textContent =
                compra.id || "-";

        }


        if (quantityInput) {

            quantityInput.value =
                compra.cantidad;

        }


        if (totalPrice) {


            const total =

                compra.precioNumero *
                compra.cantidad;


            totalPrice.textContent =

                compra.precioNumero

                    ? formatearGs(
                        total
                    )

                    : "-";

        }

    }


    /* =====================================================
       ACTIVAR / DESACTIVAR BOTÓN CONTINUAR
    ====================================================== */

    function actualizarBotonContinuar() {


        if (
            !continueStep2 ||
            !playerID
        ) {

            return;

        }


        const valido =

            esIDValido(
                playerID.value.trim()
            );


        continueStep2.disabled =
            !valido;


        continueStep2.classList.toggle(

            "is-disabled",

            !valido

        );

    }


    /* =====================================================
       PASO 1
       SELECCIONAR PAQUETE DE DIAMANTES
    ====================================================== */

    diamondCards.forEach(card => {


        card.addEventListener(
            "click",
            () => {


                /* QUITAR SELECCIÓN ANTERIOR */

                diamondCards.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                /* MARCAR PAQUETE */

                card.classList.add(
                    "active"
                );


                /* GUARDAR PRODUCTO */

                compra.producto =

                    card.dataset.producto ||
                    "";


                compra.precioTexto =

                    card.dataset.precio ||
                    "";


                compra.precioNumero =

                    precioANumero(
                        compra.precioTexto
                    );


                compra.cantidad = 1;

                compra.id = "";


                /* REINICIAR CANTIDAD */

                if (quantityInput) {

                    quantityInput.value =
                        "1";

                }


                /* REINICIAR USER ID */

                if (playerID) {

                    playerID.value =
                        "";

                }


                /* MOSTRAR PASO 2 */

                if (step2) {

                    step2.classList.remove(
                        "hidden"
                    );

                }


                /* OCULTAR PASO 3 */

                if (step3) {

                    step3.classList.add(
                        "hidden"
                    );

                }


                actualizarResumen();

                actualizarBotonContinuar();


                /* IR AL PASO 2 */

                scrollHacia(
                    step2
                );

            }
        );

    });


    /* =====================================================
       PASO 2
       INGRESAR USER ID
    ====================================================== */

    if (playerID) {


        playerID.addEventListener(
            "input",
            () => {


                /* SOLO NÚMEROS */

                playerID.value =

                    playerID.value

                        .replace(
                            /\D/g,
                            ""
                        )

                        .slice(
                            0,
                            15
                        );


                compra.id =

                    playerID.value.trim();


                actualizarBotonContinuar();


                /*
                SI EL CLIENTE CAMBIA SU ID
                DESPUÉS DE ABRIR EL RESUMEN,
                VOLVEMOS A OCULTAR PASO 3
                */

                if (
                    step3 &&
                    !step3.classList.contains(
                        "hidden"
                    )
                ) {

                    step3.classList.add(
                        "hidden"
                    );

                }

            }
        );

    }


    /* =====================================================
       BOTÓN CONTINUAR
       PASO 2 → PASO 3
    ====================================================== */

    if (continueStep2) {


        /* INICIA DESHABILITADO */

        continueStep2.disabled =
            true;


        continueStep2.classList.add(
            "is-disabled"
        );


        continueStep2.addEventListener(
            "click",
            () => {


                if (!playerID) {

                    return;

                }


                compra.id =

                    playerID.value.trim();


                /* VALIDAR ID */

                if (
                    !esIDValido(
                        compra.id
                    )
                ) {


                    mostrarNotificacion(

                        "Ingresá un User ID válido de 6 a 15 dígitos."

                    );


                    playerID.focus();


                    return;

                }


                /* ACTUALIZAR DATOS */

                actualizarResumen();


                /* MOSTRAR PASO 3 */

                if (step3) {

                    step3.classList.remove(
                        "hidden"
                    );

                }


                /* BAJAR AL RESUMEN */

                scrollHacia(
                    step3
                );

            }
        );

    }


    /* =====================================================
       GUÍA
       ¿DÓNDE ENCUENTRO MI USER ID?
    ====================================================== */

    if (
        openGuide &&
        guideContent
    ) {


        openGuide.setAttribute(

            "aria-expanded",

            "false"

        );


        openGuide.addEventListener(
            "click",
            () => {


                const abierto =

                    guideContent.classList.toggle(
                        "show"
                    );


                openGuide.setAttribute(

                    "aria-expanded",

                    String(
                        abierto
                    )

                );


                const icono =

                    openGuide.querySelector(
                        "span:last-child"
                    );


                if (icono) {

                    icono.textContent =

                        abierto
                            ? "⌃"
                            : "⌄";

                }

            }
        );

    }


    /* =====================================================
       BOTÓN -
    ====================================================== */

    if (minusBtn) {


        minusBtn.addEventListener(
            "click",
            () => {


                if (
                    compra.cantidad > 1
                ) {


                    compra.cantidad--;


                    actualizarResumen();

                }

            }
        );

    }


    /* =====================================================
       BOTÓN +
    ====================================================== */

    if (plusBtn) {


        plusBtn.addEventListener(
            "click",
            () => {


                /*
                LÍMITE DE 20 PAQUETES
                PARA EVITAR CLICS INFINITOS
                */

                if (
                    compra.cantidad < 20
                ) {


                    compra.cantidad++;


                    actualizarResumen();

                }

            }
        );

    }


    /* =====================================================
       COMPRAR DIAMANTES POR WHATSAPP
    ====================================================== */

    if (buyWhatsapp) {


        buyWhatsapp.addEventListener(
            "click",
            () => {


                /* SIN PRODUCTO */

                if (
                    !compra.producto
                ) {


                    mostrarNotificacion(

                        "Primero seleccioná un paquete de diamantes."

                    );


                    scrollHacia(

                        document.getElementById(
                            "diamantes"
                        )

                    );


                    return;

                }


                /* ID INVÁLIDO */

                if (
                    !esIDValido(
                        compra.id
                    )
                ) {


                    mostrarNotificacion(

                        "Ingresá correctamente tu User ID."

                    );


                    if (playerID) {

                        playerID.focus();

                    }


                    return;

                }


                /* TOTAL */

                const total =

                    compra.precioNumero *
                    compra.cantidad;


                /* MENSAJE */

                const mensaje =
`Hola AMERISSTORE 👋

Quiero realizar una recarga de Free Fire.

💎 Paquete:
${compra.producto}

📦 Cantidad de paquetes:
${compra.cantidad}

💰 Precio por paquete:
${compra.precioTexto}

🧾 Total:
${formatearGs(total)}

🆔 User ID:
${compra.id}

Quiero completar mi compra.`;


                abrirWhatsApp(
                    mensaje
                );

            }
        );

    }
    /* =====================================================
       EXTRAS
       COMPRA DIRECTA POR WHATSAPP
    ====================================================== */

    extraButtons.forEach(button => {


        button.addEventListener(
            "click",
            () => {


                const producto =

                    button.dataset.producto ||
                    "Producto Free Fire";


                const precio =

                    button.dataset.precio ||
                    "";


                const mensaje =
`Hola AMERISSTORE 👋

Quiero comprar este producto de Free Fire:

🎮 Producto:
${producto}

💰 Precio:
${precio}

Quiero completar mi compra.`;


                abrirWhatsApp(
                    mensaje
                );

            }
        );

    });


    /* =====================================================
       CARRITO
       CARGAR DESDE LOCALSTORAGE
    ====================================================== */

    let carrito =
        cargarCarrito();


    function cargarCarrito() {


        try {


            const guardado =

                localStorage.getItem(
                    CART_KEY
                );


            const datos =

                guardado
                    ? JSON.parse(
                        guardado
                    )
                    : [];


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


    /* =====================================================
       GUARDAR CARRITO
    ====================================================== */

    function guardarCarrito() {


        localStorage.setItem(

            CART_KEY,

            JSON.stringify(
                carrito
            )

        );


        actualizarCarritoHeader();


        renderizarCarrito();

    }


    /* =====================================================
       AGREGAR AL CARRITO
    ====================================================== */

    function agregarAlCarrito(
        nombre,
        precio,
        imagen = "",
        cantidad = 1
    ) {


        const precioNumero =

            typeof precio === "number"

                ? precio

                : precioANumero(
                    precio
                );


        const existente =

            carrito.find(
                item =>
                    item.nombre === nombre
            );


        if (existente) {


            existente.cantidad +=
                cantidad;


        }
        else {


            carrito.push({

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


        guardarCarrito();


        mostrarNotificacion(

            `${nombre} agregado al carrito`

        );

    }


    /* =====================================================
       ELIMINAR PRODUCTO DEL CARRITO
    ====================================================== */

    function quitarDelCarrito(index) {


        if (
            index < 0 ||
            index >= carrito.length
        ) {

            return;

        }


        carrito.splice(
            index,
            1
        );


        guardarCarrito();

    }


    /* =====================================================
       CAMBIAR CANTIDAD EN CARRITO
    ====================================================== */

    function cambiarCantidadCarrito(
        index,
        cambio
    ) {


        const item =

            carrito[
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


            carrito.splice(
                index,
                1
            );

        }


        guardarCarrito();

    }


    /* =====================================================
       TOTAL DEL CARRITO
    ====================================================== */

    function totalCarrito() {


        return carrito.reduce(

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


    /* =====================================================
       CANTIDAD TOTAL DEL CARRITO
    ====================================================== */

    function cantidadCarrito() {


        return carrito.reduce(

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


    /* =====================================================
       BOTÓN
       AGREGAR DIAMANTES AL CARRITO
    ====================================================== */

    function crearBotonAgregarCarrito() {


        if (
            !buyWhatsapp ||
            document.getElementById(
                "addFreeFireToCart"
            )
        ) {


            return;

        }


        const button =

            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.id =
            "addFreeFireToCart";


        button.className =
            "ff-add-cart";


        button.innerHTML =
            "🛒 AGREGAR AL CARRITO";


        /*
        LO INSERTAMOS JUSTO
        ANTES DEL BOTÓN WHATSAPP
        */

        buyWhatsapp.insertAdjacentElement(

            "beforebegin",

            button

        );


        button.addEventListener(
            "click",
            () => {


                if (
                    !compra.producto
                ) {


                    mostrarNotificacion(

                        "Primero seleccioná tus diamantes."

                    );


                    return;

                }


                if (
                    !esIDValido(
                        compra.id
                    )
                ) {


                    mostrarNotificacion(

                        "Completá tu User ID antes de agregar al carrito."

                    );


                    if (playerID) {

                        playerID.focus();

                    }


                    return;

                }


                const nombre =

                    `${compra.producto} · ID ${compra.id}`;


                agregarAlCarrito(

                    nombre,

                    compra.precioNumero,

                    "assets/productos/diamond.png",

                    compra.cantidad

                );

            }
        );

    }


    /* =====================================================
       ASEGURAR BOTÓN CARRITO EN NAVBAR
    ====================================================== */

    function asegurarBotonCarrito() {


        let boton =

            document.getElementById(
                "cart-button"
            );


        if (boton) {


            return boton;

        }


        const navbar =

            document.querySelector(
                ".navbar"
            );


        const whatsappButton =

            navbar

                ? navbar.querySelector(
                    ".btn-whatsapp"
                )

                : null;


        if (!navbar) {


            return null;

        }


        boton =

            document.createElement(
                "button"
            );


        boton.type =
            "button";


        boton.id =
            "cart-button";


        boton.className =
            "ff-cart-button";


        boton.innerHTML =

            `🛒 <span>Carrito</span> <strong id="cart-count">0</strong>`;


        /*
        SI EXISTE WHATSAPP
        LO PONEMOS ANTES
        */

        if (whatsappButton) {


            navbar.insertBefore(

                boton,

                whatsappButton

            );

        }
        else {


            navbar.appendChild(
                boton
            );

        }


        return boton;

    }


    /* =====================================================
       ACTUALIZAR CARRITO EN HEADER
    ====================================================== */

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

                cantidadCarrito();

        }


        if (totalElemento) {


            totalElemento.textContent =

                formatearGs(
                    totalCarrito()
                );

        }

    }


    /* =====================================================
       CREAR PANEL DEL CARRITO
    ====================================================== */

    function crearPanelCarrito() {


        if (
            document.getElementById(
                "ffCartDrawer"
            )
        ) {


            return;

        }


        /* OVERLAY */

        const overlay =

            document.createElement(
                "div"
            );


        overlay.id =
            "ffCartOverlay";


        overlay.className =
            "ff-cart-overlay";


        /* PANEL */

        const drawer =

            document.createElement(
                "aside"
            );


        drawer.id =
            "ffCartDrawer";


        drawer.className =
            "ff-cart-drawer";


        drawer.innerHTML = `

            <div class="ff-cart-head">

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
                    class="ff-cart-close"
                    aria-label="Cerrar carrito"
                >
                    ✕
                </button>

            </div>


            <div
                id="ffCartItems"
                class="ff-cart-items"
            >
            </div>


            <div class="ff-cart-footer">


                <div class="ff-cart-total-row">

                    <span>
                        Total
                    </span>

                    <strong id="ffCartTotal">
                        Gs. 0
                    </strong>

                </div>


                <button
                    type="button"
                    id="ffCartWhatsapp"
                    class="ff-cart-whatsapp"
                >

                    💬 COMPRAR CARRITO POR WHATSAPP

                </button>


                <button
                    type="button"
                    id="ffCartClear"
                    class="ff-cart-clear"
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


        /* CERRAR CON FONDO */

        overlay.addEventListener(

            "click",

            cerrarCarrito

        );


        /* BOTÓN X */

        const cerrar =

            drawer.querySelector(
                ".ff-cart-close"
            );


        if (cerrar) {


            cerrar.addEventListener(

                "click",

                cerrarCarrito

            );

        }


        /* VACIAR */

        const vaciar =

            document.getElementById(
                "ffCartClear"
            );


        if (vaciar) {


            vaciar.addEventListener(
                "click",
                () => {


                    carrito = [];


                    guardarCarrito();


                    mostrarNotificacion(

                        "Carrito vaciado"

                    );

                }
            );

        }


        /* COMPRAR CARRITO */

        const comprar =

            document.getElementById(
                "ffCartWhatsapp"
            );


        if (comprar) {


            comprar.addEventListener(

                "click",

                comprarCarritoWhatsApp

            );

        }

    }


    /* =====================================================
       ABRIR CARRITO
    ====================================================== */

    function abrirCarrito() {


        crearPanelCarrito();


        renderizarCarrito();


        const overlay =

            document.getElementById(
                "ffCartOverlay"
            );


        const drawer =

            document.getElementById(
                "ffCartDrawer"
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


    /* =====================================================
       CERRAR CARRITO
    ====================================================== */

    function cerrarCarrito() {


        const overlay =

            document.getElementById(
                "ffCartOverlay"
            );


        const drawer =

            document.getElementById(
                "ffCartDrawer"
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
    /* =====================================================
       RENDERIZAR CARRITO
    ====================================================== */

    function renderizarCarrito() {


        const container =

            document.getElementById(
                "ffCartItems"
            );


        const total =

            document.getElementById(
                "ffCartTotal"
            );


        if (!container) {


            actualizarCarritoHeader();


            return;

        }


        /* CARRITO VACÍO */

        if (
            carrito.length === 0
        ) {


            container.innerHTML = `

                <div class="ff-cart-empty">

                    <div>
                        🛒
                    </div>

                    <h3>
                        Tu carrito está vacío
                    </h3>

                    <p>
                        Agrega un producto para verlo aquí.
                    </p>

                </div>

            `;


        }
        else {


            /* PRODUCTOS */

            container.innerHTML =

                carrito

                    .map(
                        (
                            item,
                            index
                        ) => `

                            <article
                                class="ff-cart-item"
                            >

                                <div
                                    class="ff-cart-item-info"
                                >

                                    <h3>
                                        ${escapeHtml(
                                            item.nombre
                                        )}
                                    </h3>

                                    <p>
                                        ${formatearGs(
                                            item.precio
                                        )}
                                    </p>

                                </div>


                                <div
                                    class="ff-cart-item-controls"
                                >


                                    <button
                                        type="button"
                                        data-cart-minus="${index}"
                                        aria-label="Restar cantidad"
                                    >
                                        −
                                    </button>


                                    <strong>
                                        ${item.cantidad}
                                    </strong>


                                    <button
                                        type="button"
                                        data-cart-plus="${index}"
                                        aria-label="Sumar cantidad"
                                    >
                                        +
                                    </button>


                                    <button
                                        type="button"
                                        class="remove"
                                        data-cart-remove="${index}"
                                        aria-label="Eliminar producto"
                                    >
                                        ✕
                                    </button>


                                </div>

                            </article>

                        `
                    )

                    .join("");



            /* RESTAR */

            container

                .querySelectorAll(
                    "[data-cart-minus]"
                )

                .forEach(button => {


                    button.addEventListener(
                        "click",
                        () => {


                            cambiarCantidadCarrito(

                                Number(
                                    button.dataset.cartMinus
                                ),

                                -1

                            );

                        }
                    );

                });



            /* SUMAR */

            container

                .querySelectorAll(
                    "[data-cart-plus]"
                )

                .forEach(button => {


                    button.addEventListener(
                        "click",
                        () => {


                            cambiarCantidadCarrito(

                                Number(
                                    button.dataset.cartPlus
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

                .forEach(button => {


                    button.addEventListener(
                        "click",
                        () => {


                            quitarDelCarrito(

                                Number(
                                    button.dataset.cartRemove
                                )

                            );

                        }
                    );

                });

        }


        /* TOTAL */

        if (total) {


            total.textContent =

                formatearGs(
                    totalCarrito()
                );

        }


        actualizarCarritoHeader();

    }


    /* =====================================================
       COMPRAR TODO EL CARRITO POR WHATSAPP
    ====================================================== */

    function comprarCarritoWhatsApp() {


        if (
            carrito.length === 0
        ) {


            mostrarNotificacion(

                "Tu carrito está vacío."

            );


            return;

        }


        const productos =

            carrito

                .map(
                    item =>

                        `${item.cantidad}x ${item.nombre}

${formatearGs(
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

${productos}

-------------------------

🧾 TOTAL:
${formatearGs(
    totalCarrito()
)}

Quiero completar mi compra.`;


        abrirWhatsApp(
            mensaje
        );

    }


    /* =====================================================
       ESCAPAR HTML
    ====================================================== */

    function escapeHtml(texto) {


        return String(
            texto || ""
        )

            .replaceAll(
                "&",
                "&amp;"
            )

            .replaceAll(
                "<",
                "&lt;"
            )

            .replaceAll(
                ">",
                "&gt;"
            )

            .replaceAll(
                '"',
                "&quot;"
            )

            .replaceAll(
                "'",
                "&#039;"
            );

    }


    /* =====================================================
       ESTILOS DEL CARRITO
       SE INSERTAN AUTOMÁTICAMENTE
    ====================================================== */

    function insertarEstilosCarrito() {


        if (
            document.getElementById(
                "ffCartRuntimeStyles"
            )
        ) {


            return;

        }


        const style =

            document.createElement(
                "style"
            );


        style.id =
            "ffCartRuntimeStyles";


        style.textContent = `


            /* =========================================
               BOTÓN CARRITO
            ========================================= */

            .ff-cart-button,
            .ff-add-cart {

                min-height: 44px;

                padding: 0 16px;

                display: inline-flex;

                align-items: center;

                justify-content: center;

                gap: 8px;

                background:
                    rgba(
                        124,
                        53,
                        255,
                        0.10
                    );

                border:
                    1px solid
                    rgba(
                        167,
                        109,
                        255,
                        0.26
                    );

                border-radius: 12px;

                color: #ffffff;

                cursor: pointer;

                font-weight: 900;

                transition:
                    0.25s ease;

            }


            .ff-cart-button:hover,
            .ff-add-cart:hover {

                transform:
                    translateY(-2px);

                background:
                    rgba(
                        124,
                        53,
                        255,
                        0.20
                    );

                border-color:
                    #a76dff;

            }


            .ff-cart-button strong {

                min-width: 22px;

                height: 22px;

                padding:
                    0 6px;

                display:
                    grid;

                place-items:
                    center;

                border-radius:
                    999px;

                background:
                    linear-gradient(
                        135deg,
                        #7c35ff,
                        #a76dff
                    );

                color:
                    #ffffff;

                font-size:
                    10px;

            }


            .ff-add-cart {

                width: 100%;

                margin-top: 18px;

            }


            /* =========================================
               BOTÓN CONTINUAR DESHABILITADO
            ========================================= */

            .continue-btn.is-disabled,
            .continue-btn:disabled {

                opacity:
                    0.40;

                cursor:
                    not-allowed;

                transform:
                    none !important;

                box-shadow:
                    none !important;

            }


            /* =========================================
               OVERLAY
            ========================================= */

            .ff-cart-overlay {

                position:
                    fixed;

                inset:
                    0;

                z-index:
                    9998;

                background:
                    rgba(
                        0,
                        0,
                        0,
                        0.62
                    );

                opacity:
                    0;

                visibility:
                    hidden;

                transition:
                    0.25s ease;

            }


            .ff-cart-overlay.open {

                opacity:
                    1;

                visibility:
                    visible;

            }


            /* =========================================
               PANEL CARRITO
            ========================================= */

            .ff-cart-drawer {

                position:
                    fixed;

                top:
                    0;

                right:
                    0;

                z-index:
                    9999;

                width:
                    min(
                        92vw,
                        420px
                    );

                height:
                    100vh;

                padding:
                    24px;

                display:
                    flex;

                flex-direction:
                    column;

                background:
                    #09070d;

                border-left:
                    1px solid
                    rgba(
                        167,
                        109,
                        255,
                        0.22
                    );

                box-shadow:
                    -20px
                    0
                    50px
                    rgba(
                        0,
                        0,
                        0,
                        0.35
                    );

                transform:
                    translateX(
                        105%
                    );

                transition:
                    0.30s ease;

            }


            .ff-cart-drawer.open {

                transform:
                    translateX(
                        0
                    );

            }


            /* =========================================
               CABECERA
            ========================================= */

            .ff-cart-head {

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    space-between;

                gap:
                    20px;

                padding-bottom:
                    18px;

                border-bottom:
                    1px solid
                    rgba(
                        167,
                        109,
                        255,
                        0.14
                    );

            }


            .ff-cart-head span {

                color:
                    #a76dff;

                font-size:
                    10px;

                font-weight:
                    1000;

                letter-spacing:
                    1.5px;

            }


            .ff-cart-head h2 {

                margin-top:
                    4px;

                color:
                    #ffffff;

                font-size:
                    25px;

            }


            .ff-cart-close {

                width:
                    40px;

                height:
                    40px;

                background:
                    rgba(
                        124,
                        53,
                        255,
                        0.10
                    );

                border:
                    1px solid
                    rgba(
                        167,
                        109,
                        255,
                        0.18
                    );

                border-radius:
                    10px;

                color:
                    #ffffff;

                cursor:
                    pointer;

            }


            /* =========================================
               PRODUCTOS DEL CARRITO
            ========================================= */

            .ff-cart-items {

                flex:
                    1;

                padding:
                    18px 0;

                overflow-y:
                    auto;

            }


            /* VACÍO */

            .ff-cart-empty {

                min-height:
                    280px;

                display:
                    flex;

                flex-direction:
                    column;

                align-items:
                    center;

                justify-content:
                    center;

                text-align:
                    center;

                color:
                    #aaa3b8;

            }


            .ff-cart-empty > div {

                margin-bottom:
                    12px;

                font-size:
                    36px;

            }


            .ff-cart-empty h3 {

                color:
                    #ffffff;

                font-size:
                    18px;

            }


            .ff-cart-empty p {

                margin-top:
                    7px;

                font-size:
                    12px;

            }


            /* PRODUCTO */

            .ff-cart-item {

                padding:
                    16px 0;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    space-between;

                gap:
                    14px;

                border-bottom:
                    1px solid
                    rgba(
                        167,
                        109,
                        255,
                        0.12
                    );

            }


            .ff-cart-item-info {

                min-width:
                    0;

            }


            .ff-cart-item-info h3 {

                color:
                    #ffffff;

                font-size:
                    13px;

                line-height:
                    1.4;

            }


            .ff-cart-item-info p {

                margin-top:
                    5px;

                color:
                    #a76dff;

                font-size:
                    12px;

                font-weight:
                    900;

            }


            /* CONTROLES */

            .ff-cart-item-controls {

                display:
                    flex;

                align-items:
                    center;

                gap:
                    6px;

                flex-shrink:
                    0;

            }


            .ff-cart-item-controls button {

                width:
                    31px;

                height:
                    31px;

                display:
                    grid;

                place-items:
                    center;

                background:
                    rgba(
                        124,
                        53,
                        255,
                        0.10
                    );

                border:
                    1px solid
                    rgba(
                        167,
                        109,
                        255,
                        0.18
                    );

                border-radius:
                    8px;

                color:
                    #ffffff;

                cursor:
                    pointer;

            }


            .ff-cart-item-controls .remove {

                color:
                    #ff6b8e;

            }


            /* =========================================
               FOOTER CARRITO
            ========================================= */

            .ff-cart-footer {

                padding-top:
                    18px;

                border-top:
                    1px solid
                    rgba(
                        167,
                        109,
                        255,
                        0.14
                    );

            }


            .ff-cart-total-row {

                margin-bottom:
                    16px;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    space-between;

                color:
                    #aaa3b8;

            }


            .ff-cart-total-row strong {

                color:
                    #ffffff;

                font-size:
                    20px;

            }


            /* WHATSAPP */

            .ff-cart-whatsapp {

                width:
                    100%;

                min-height:
                    46px;

                background:
                    #25d366;

                border:
                    0;

                border-radius:
                    11px;

                color:
                    #ffffff;

                cursor:
                    pointer;

                font-weight:
                    900;

            }


            /* VACIAR */

            .ff-cart-clear {

                width:
                    100%;

                min-height:
                    46px;

                margin-top:
                    9px;

                background:
                    transparent;

                border:
                    1px solid
                    rgba(
                        167,
                        109,
                        255,
                        0.18
                    );

                border-radius:
                    11px;

                color:
                    #aaa3b8;

                cursor:
                    pointer;

                font-weight:
                    900;

            }


            /* =========================================
               BLOQUEAR SCROLL
            ========================================= */

            body.cart-open {

                overflow:
                    hidden;

            }


            /* =========================================
               NOTIFICACIÓN
            ========================================= */

            .store-notification {

                position:
                    fixed;

                left:
                    50%;

                bottom:
                    28px;

                z-index:
                    10000;

                max-width:
                    calc(
                        100% - 30px
                    );

                padding:
                    13px 18px;

                opacity:
                    0;

                transform:
                    translate(
                        -50%,
                        25px
                    );

                background:
                    #120b1b;

                border:
                    1px solid
                    #a76dff;

                border-radius:
                    12px;

                color:
                    #ffffff;

                font-size:
                    12px;

                font-weight:
                    800;

                text-align:
                    center;

                pointer-events:
                    none;

                transition:
                    0.25s ease;

            }


            .store-notification.show {

                opacity:
                    1;

                transform:
                    translate(
                        -50%,
                        0
                    );

            }


            /* =========================================
               RESPONSIVE
            ========================================= */

            @media (
                max-width: 700px
            ) {


                .ff-cart-button span {

                    display:
                        none;

                }


                .ff-cart-button {

                    padding:
                        0 11px;

                }


                .ff-cart-drawer {

                    width:
                        min(
                            94vw,
                            400px
                        );

                    padding:
                        20px;

                }


                .ff-cart-item {

                    align-items:
                        flex-start;

                    flex-direction:
                        column;

                }

            }

        `;


        document.head.appendChild(
            style
        );

    }


    /* =====================================================
       INICIAR CARRITO
    ====================================================== */

    insertarEstilosCarrito();


    /* CREAR BOTÓN AGREGAR AL CARRITO */

    crearBotonAgregarCarrito();


    /* ASEGURAR BOTÓN CARRITO HEADER */

    const cartButton =

        asegurarBotonCarrito();


    /* CREAR PANEL */

    crearPanelCarrito();


    /* ACTUALIZAR CONTADOR */

    actualizarCarritoHeader();


    /* RENDER INICIAL */

    renderizarCarrito();


    /* =====================================================
       CLICK EN BOTÓN CARRITO
    ====================================================== */

    if (cartButton) {


        cartButton.addEventListener(
            "click",
            event => {


                event.preventDefault();


                abrirCarrito();

            }
        );

    }


    /* =====================================================
       WHATSAPP HEADER + FLOTANTE
    ====================================================== */

    document

        .querySelectorAll(
            ".btn-whatsapp, .floating-whatsapp"
        )

        .forEach(link => {


            if (
                link.tagName.toLowerCase() ===
                "a"
            ) {


                link.target =
                    "_blank";


                link.rel =
                    "noopener noreferrer";

            }

        });


    /* =====================================================
       LINKS INTERNOS
       SCROLL SUAVE
    ====================================================== */

    document

        .querySelectorAll(
            'a[href^="#"]'
        )

        .forEach(link => {


            link.addEventListener(
                "click",
                event => {


                    const selector =

                        link.getAttribute(
                            "href"
                        );


                    if (
                        !selector ||
                        selector === "#"
                    ) {


                        return;

                    }


                    const destino =

                        document.querySelector(
                            selector
                        );


                    if (!destino) {


                        return;

                    }


                    event.preventDefault();


                    destino.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        });


    /* =====================================================
       MENÚ MÓVIL
       SOLO SI EXISTE EN HTML
    ====================================================== */

    const menuToggle =

        document.getElementById(
            "menu-toggle"
        );


    const mainMenu =

        document.getElementById(
            "main-menu"
        );


    if (
        menuToggle &&
        mainMenu
    ) {


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

    }


    /* =====================================================
       ESTADO INICIAL DE FREE FIRE
    ====================================================== */

    if (step2) {


        step2.classList.add(
            "hidden"
        );

    }


    if (step3) {


        step3.classList.add(
            "hidden"
        );

    }


    /* ACTUALIZAR RESUMEN */

    actualizarResumen();


    /* BOTÓN CONTINUAR */

    actualizarBotonContinuar();


    /* =====================================================
       CONFIRMACIÓN EN CONSOLA
    ====================================================== */

    console.log(

        "AMERISSTORE Free Fire listo ✅"

    );


});
