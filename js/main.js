/* =========================
   CORALE
========================= */


/* =========================
   MENÚ
========================= */

(() => {

    /* =========================
       DATOS
    ========================= */

    const menuData = {

        coffee: [
            {
                name: "Espresso",
                description: "Café corto, intenso y aromático.",
                price: "$2.500",
                image: "assets/images/menu/cafe/espresso.jpg"
            },
            {
                name: "Flat White",
                description: "Espresso con leche texturizada y una textura sedosa.",
                price: "$3.200",
                image: "assets/images/menu/cafe/flat-white.jpg"
            },
            {
                name: "Cappuccino",
                description: "Espresso, leche vaporizada y una espuma suave.",
                price: "$3.000",
                image: "assets/images/menu/cafe/cappuccino.jpg"
            },
            {
                name: "Latte",
                description: "Espresso suave con abundante leche texturizada.",
                price: "$3.200",
                image: "assets/images/menu/cafe/latte.jpg"
            },
            {
                name: "Cold Brew",
                description: "Café extraído en frío, suave y refrescante.",
                price: "$3.500",
                image: "assets/images/menu/cafe/cold-brew.jpg"
            }
        ],


        drinks: [
            {
                name: "Limonada",
                description: "Limón, agua y un toque justo de dulzura.",
                price: "$2.800",
                image: "assets/images/menu/bebidas/limonada.jpg"
            },
            {
                name: "Té",
                description: "Una selección de té para disfrutar caliente.",
                price: "$2.400",
                image: "assets/images/menu/bebidas/te.jpg"
            },
            {
                name: "Iced Latte",
                description: "Espresso, leche fría y mucho hielo.",
                price: "$3.500",
                image: "assets/images/menu/bebidas/iced-latte.jpg"
            },
            {
                name: "Chocolate Caliente",
                description: "Chocolate cremoso y reconfortante.",
                price: "$3.200",
                image: "assets/images/menu/bebidas/chocolate.jpg"
            }
        ],


        bakery: [
            {
                name: "Croissant",
                description: "Hojaldre dorado, liviano y mantecoso.",
                price: "$2.800",
                image: "assets/images/menu/pasteleria/croissant.jpg"
            },
            {
                name: "Roll de Canela",
                description: "Masa suave, canela y glaseado ligero.",
                price: "$3.200",
                image: "assets/images/menu/pasteleria/roll-canela.jpg"
            },
            {
                name: "Torta de Chocolate",
                description: "Chocolate intenso y textura húmeda.",
                price: "$4.200",
                image: "assets/images/menu/pasteleria/torta-chocolate.jpg"
            },
            {
                name: "Cheesecake",
                description: "Cremoso, suave y acompañado de frutos rojos.",
                price: "$4.000",
                image: "assets/images/menu/pasteleria/cheesecake.jpg"
            }
        ],


        savory: [
            {
                name: "Tostado de Jamón y Queso",
                description: "Pan dorado, jamón y queso fundido.",
                price: "$4.500",
                image: "assets/images/menu/salado/tostado.jpg"
            },
            {
                name: "Avocado Toast",
                description: "Pan de masa madre, palta y semillas.",
                price: "$5.200",
                image: "assets/images/menu/salado/avocado-toast.jpg"
            },
            {
                name: "Tostada Caprese",
                description: "Tomate, mozzarella, albahaca y aceite de oliva.",
                price: "$4.800",
                image: "assets/images/menu/salado/caprese.jpg"
            },
            {
                name: "Sándwich Corale",
                description: "Una combinación de ingredientes frescos en pan artesanal.",
                price: "$5.500",
                image: "assets/images/menu/salado/sandwich.jpg"
            }
        ]

    };


    /* =========================
       RECOMENDACIONES
    ========================= */

    const recommendations = [

        {
            name: "Flat White",
            description: "Espresso y leche texturizada.",
            price: "$3.200",
            image: "assets/images/menu/recomendaciones/flat-white.jpg"
        },

        {
            name: "Roll de Canela",
            description: "Suave, tibio y recién horneado.",
            price: "$3.200",
            image: "assets/images/menu/recomendaciones/roll-canela.jpg"
        },

        {
            name: "Avocado Toast",
            description: "Masa madre, palta y semillas.",
            price: "$5.200",
            image: "assets/images/menu/recomendaciones/avocado-toast.jpg"
        }

    ];


    /* =========================
       REFERENCIAS
    ========================= */

    const recommendationContainer =
        document.querySelector("[data-recommendations]");

    const categoryElements =
        document.querySelectorAll("[data-menu-category]");


    /* =========================
       RENDER RECOMENDACIONES
    ========================= */

    function renderRecommendations() {

        if (!recommendationContainer) return;

        recommendations.forEach((product) => {

            const article =
                document.createElement("article");

            article.classList.add(
                "menu__recommendation"
            );


            article.innerHTML = `
                <div class="menu__recommendation-image-wrapper">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="menu__recommendation-image"
                        width="520"
                        height="400"
                        loading="lazy"
                    >

                </div>

                <h4 class="menu__recommendation-name">
                    ${product.name}
                </h4>

                <p class="menu__recommendation-description">
                    ${product.description}
                </p>

                <span class="menu__recommendation-price">
                    ${product.price}
                </span>
            `;


            recommendationContainer.appendChild(article);

        });

    }


    /* =========================
       SELECCIONAR PRODUCTO
    ========================= */

    function selectProduct(
        categoryElement,
        products,
        index
    ) {

        const product =
            products[index];

        if (!product) return;


        const image =
            categoryElement.querySelector(
                "[data-menu-image]"
            );

        const description =
            categoryElement.querySelector(
                "[data-menu-description]"
            );

        const price =
            categoryElement.querySelector(
                "[data-menu-price]"
            );


        if (!image || !description || !price) {
            return;
        }


        /* Cambiar imagen */

        image.style.opacity = "0";


        setTimeout(() => {

            image.src = product.image;
            image.alt = product.name;

            image.style.opacity = "1";

        }, 200);


        /* Información */

        description.textContent =
            product.description;

        price.textContent =
            product.price;


        /* Producto activo */

        const buttons =
            categoryElement.querySelectorAll(
                ".menu-category__product"
            );


        buttons.forEach((button, buttonIndex) => {

            button.classList.toggle(
                "is-active",
                buttonIndex === index
            );

        });

    }


    /* =========================
       RENDER CATEGORÍA
    ========================= */

    function renderCategory(categoryElement) {

        const categoryName =
            categoryElement.dataset.menuCategory;

        const products =
            menuData[categoryName];


        if (!products || products.length === 0) {
            return;
        }


        const productsContainer =
            categoryElement.querySelector(
                "[data-menu-products]"
            );


        if (!productsContainer) {
            return;
        }


        products.forEach((product, index) => {

            const button =
                document.createElement("button");


            button.type = "button";

            button.classList.add(
                "menu-category__product"
            );


            button.innerHTML = `
                <span class="menu-category__product-name">
                    ${product.name}
                </span>

                <span class="menu-category__product-price">
                    ${product.price}
                </span>
            `;


            button.addEventListener(
                "click",
                () => {

                    selectProduct(
                        categoryElement,
                        products,
                        index
                    );

                }
            );


            productsContainer.appendChild(button);

        });


        /* Mostrar primer producto */

        selectProduct(
            categoryElement,
            products,
            0
        );

    }


    /* =========================
       INICIALIZAR
    ========================= */

    function init() {

        renderRecommendations();


        categoryElements.forEach(
            (categoryElement) => {

                renderCategory(
                    categoryElement
                );

            }
        );

    }


    /* =========================
       DOM READY
    ========================= */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }

})();

/* =========================
   REVEAL ON SCROLL
========================= */

(() => {

    const revealElements =
        document.querySelectorAll(".reveal");


    if (!revealElements.length) return;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;


                    entry.target.classList.add(
                        "is-visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach((element) => {

        observer.observe(element);

    });

})();

/* =========================
   NAVBAR
========================= */

(() => {

    const navbar =
        document.querySelector(".navbar");

    const toggle =
        document.querySelector(".navbar__toggle");

    const links =
        document.querySelectorAll(".navbar__link");

    if (!navbar || !toggle) return;


    const openMenu = () => {

        navbar.classList.add("menu-open");

        toggle.setAttribute(
            "aria-expanded",
            "true"
        );

        toggle.setAttribute(
            "aria-label",
            "Cerrar menú"
        );

        document.body.style.overflow = "hidden";
    };


    const closeMenu = () => {

        navbar.classList.remove("menu-open");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        toggle.setAttribute(
            "aria-label",
            "Abrir menú"
        );

        document.body.style.overflow = "";
    };


    toggle.addEventListener("click", () => {

        const isOpen =
            navbar.classList.contains("menu-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });


    links.forEach((link) => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });


})();