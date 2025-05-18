// Datos de productos actualizados con categorías
        const products = [
            {
                id: 1,
                name: "Auriculares Inalámbricos",
                price: 8490,
                description: "Auricular BT Deportivo - Karsen GYM. 10 metros radio de frecuencia. 100dB de sensibilidad. Hasta 4 hs de reproduccion continua",
                image: "http://multibahia.com/imagenes/ART_1482_0.JPG",
                images: [
                    "http://multibahia.com/imagenes/ART_1483_0.JPG",
                    "http://multibahia.com/imagenes/ART_1482_5.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 2,
                name: "Cargador Motorola Original Turbo Power 50w DUO",
                price: 11.762,
                description: "Entradas USB-A / USB-C. Incluye cable Type C - Type C",
                image: "http://multibahia.com/imagenes/ART_6955226411557_0.JPG",
                category: "Cargadores"
            },
            {
                id: 3,
                name: "Cargador Apple 220v Cabezal 20w - Entrada C",
                price: 7770,
                description: "Cable durable de alta velocidad",
                image: "http://multibahia.com/imagenes/ART_190199040670_0.JPG",
                category: "Cargadores"
            },
            {
                id: 4,
                name: "Cubre cargador y cable",
                price: 5280,
                description: "Funda para cargador iPhone 20w + cubre cable de silicona",
                images: [
                    "http://multibahia.com/imagenes/ART_CC0002_0.JPG",
                    "http://multibahia.com/imagenes/ART_CC0006_0.JPG",
                    "http://multibahia.com/imagenes/ART_CC0010_0.JPG",
                    "http://multibahia.com/imagenes/ART_CC0014_0.JPG",
                    "http://multibahia.com/imagenes/ART_CC0013_0.JPG",
                    "http://multibahia.com/imagenes/ART_CC0015_0.JPG",

                ],
                image: "http://multibahia.com/imagenes/ART_CC0002_1.JPG",
                category: "Accesorios"
            },
            {
                id: 5,
                name: "Auriculares Bluetooth Deportivo - Karsen Marathon",
                price: 7260,
                description: "10 Metros radio de frecuencia, 100dB de sensibilidad. Hasta 4 hs de reproduccion de continua. ",
                image: "http://multibahia.com/imagenes/ART_1480_0.JPG",
                images: [
                    "http://multibahia.com/imagenes/ART_1480_3.JPG",
                    "http://multibahia.com/imagenes/ART_1481_0.JPG",
                    "http://multibahia.com/imagenes/ART_1481_3.JPG",
                    "http://multibahia.com/imagenes/ART_1481_4.JPG",

                ],
                category: "Auriculares"
            },
            {
                id: 6,
                name: "Auriculares Deportivos Suono",
                price: 4640,
                description: "96 dB de sensibilidad. 10 metros de radio de frecuencia. Entre 3 a 4 hs de reproduccion continua.",
                image: "http://multibahia.com/imagenes/ART_2525CH-R_0.JPG",
                images: [
                    "http://multibahia.com/imagenes/ART_2525CH-R_1.JPG",
                    "http://multibahia.com/imagenes/ART_2525CH-R_2.JPG",
                    "http://multibahia.com/imagenes/ART_2525CH-R_3.JPG",
                ],
                category: "Electro y Hogar"
            },
            {
                id: 7,
                name: "Smart Watch KR-888 ULTRA BEAR+ Auriculares Bluetooth",
                price: 51420,
                description: "Reloj inteligente con las siguientes funciones: Calendario, calculadoras, frecuencia cardíaca, presión arterial, oxígeno en sangre, datos de ejercicio, sueño, multiples modos de ejercicio, recordatorio de informacion, marcación, guía telefónica, control de musica bluetooth, recordatorio de sedentarismo, interfaz personalizada. Requisitos: Android 5.0 en adelante / iOs 10.0 en adelante. Auriculares Bluetooth TWS, con su estuche en forma de oso pardo. Duración de batería entre 4 a 5 hs de reproducción continua.",
                image: "http://multibahia.com/imagenes/ART_EC100245._0.JPG",
                images: [ 
            "http://multibahia.com/imagenes/ART_EC100245._4.JPG",
            "http://multibahia.com/imagenes/ART_EC100245._1.JPG",
            "http://multibahia.com/imagenes/ART_EC100245._2.JPG",
            "http://multibahia.com/imagenes/ART_EC100245._3.JPG",
            "http://multibahia.com/imagenes/ART_EC100245._4.JPG"
        ],
                category: "Smartwatch"
            },
            {
                id: 8,
                name: "Auriculares TWS A6s Pro - Mi Pods",
                price: 7160,
                description: "Auriculares True Wireless Stero, permite una conexión inalambrica total. Alcance inalámbrico de 10 m. Duracion de reproducción continua 2 hs. 40 mAh capaciadad de bateria de los auriculares, 350 mAh capacidad de bateria del estuche de carga. Lo que permite cargar mas de3 veces. ",
                image: "http://multibahia.com/imagenes/ART_A6S_0.JPG",
                images: [
                    "http://multibahia.com/imagenes/ART_A6S_1.JPG",
                    "http://multibahia.com/imagenes/ART_A6S_2.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 9,
                name: "Auriculares Apple Air Pods pro Gen 2",
                price: 33565,
                description: "Aricular Apple Air pods Pro. Marca APPLE AAA",
                image: "http://multibahia.com/imagenes/ART_AU-GGTYC023_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_AU-GGTYC023_1.JPG",
                    "http://multibahia.com/imagenes/ART_AU-GGTYC023_2.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 10,
                name: "Auriculares Bluetooth TWS - Karsen Miley",
                price: 15795,
                description: "Auriculares tipo Air Pods, ergonomicos y estéreo de alta fideliddad. Alcance del bluetooth de 7 a 10 metros. 2 a 3 horas de reproduccion continua.",
                image: "http://multibahia.com/imagenes/ART_1017_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_1016_0.JPG",
                    "http://multibahia.com/imagenes/ART_1017_0.JPG",
                    "http://multibahia.com/imagenes/ART_1019_0.JPG",
                    "http://multibahia.com/imagenes/ART_1020_0.JPG",
                    "http://multibahia.com/imagenes/ART_1021_0.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 10,
                name: "Auriculares Bluetooth TWS - LDNIO LD-TO1",
                price: 40480,
                description: "Auriculares tipo Air Pods de alta calidad. Alcance de bluetooth de 10 metros. 4 horias de reproducción contínua",
                image: "http://multibahia.com/imagenes/ART_6933138612132_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_6933138612132_1.JPG",
                    "http://multibahia.com/imagenes/ART_6933138612149_2.JPG",
                    "http://multibahia.com/imagenes/ART_6933138612132_2.JPG",
                    "http://multibahia.com/imagenes/ART_6933138612149_1.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 11,
                name: "Auriculares Bluetooth TWS - LDNIO LD-TO2 30w",
                price: 40480,
                description: "Auriculares tipo Air Pods de alta calidad. Alcance de bluetooth de 10 metros. 4 horias de reproducción contínua",
                image: "http://multibahia.com/imagenes/ART_6933138612163_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_6933138612163_1.JPG",
                    "http://multibahia.com/imagenes/ART_6933138612156_0.JPG",
                    "http://multibahia.com/imagenes/ART_6933138612163_2.JPG",
                    "http://multibahia.com/imagenes/ART_6933138612156_3.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 12,
                name: "AURICULAR BT VINCHA - AKZ K50 RGB (Orejas Desmontables)",
                price: 33590,
                description: "Sumérgete en el mundo de la música con estilo y tecnología con los audífonos diadema AKZ-K50. Estos auriculares no solo te ofrecen una experiencia auditiva de alta calidad gracias a su chip JL y controladores de 40 mm, sino que también te permiten expresar tu personalidad con sus divertidas orejas de gato y la iluminación RGB. Con una versión BT 5.1+EDR, disfrutarás de una conexión inalámbrica estable y un alcance de transmisión de hasta 10 metros, dándote la libertad de moverte sin ataduras. La batería de polímero de litio de 400 mAh asegura hasta 12 horas de música continua y 180 horas en reposo, para que la diversión nunca se detenga. Además, su entrada auxiliar de 3,5 mm ofrece versatilidad al permitirte conectarlos a dispositivos sin Bluetooth. El modelo K50 en color blanco es la combinación perfecta de funcionalidad y moda, ideal para quienes buscan destacar y disfrutar de su música al máximo. Con Bluetooth y luz LED, estos headset son el accesorio perfecto para tu vida diaria.",
                image: "http://multibahia.com/imagenes/ART_3988320544060_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_3988320544060_1.JPG",
                    "http://multibahia.com/imagenes/ART_3988320544060_2.JPG",
                    "http://multibahia.com/imagenes/ART_3988320544060_4.JPG",
                    "http://multibahia.com/imagenes/ART_3988320544060_3.JPG",
                    "http://multibahia.com/imagenes/ART_3988320544060_5.JPG",
                    "http://multibahia.com/imagenes/ART_3988320544060_7.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 13,
                name: "AURICULAR BT VINCHA - AITECH ARIES",
                price: 22960,
                description: "Auricular ARIES inalámbrico marca AITECH. Incluye Sistema de Manos Libres con Micrófono incorporado para recepción de llamadas. Tiempo de reproducción: 40 horas.  ",
                image: "http://multibahia.com/imagenes/ART_AIAU051041V_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_AIAU051041V_1.JPG",
                    "http://multibahia.com/imagenes/ART_AIAU051041V_2.JPG",
                    "http://multibahia.com/imagenes/ART_AIAU051041V_3.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 14,
                name: "AURICULAR BT VINCHA - KARSEN GAGA",
                price: 13458,
                description: "Auricular Vincha Karsen Gaga inalámbrico. Tiempo de reproducción: 5 a 6 horas. Alcance de 10 metros",
                image: "http://multibahia.com/imagenes/ART_1484_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_1484_2.JPG",
                    "http://multibahia.com/imagenes/ART_1484_1.JPG",
                    "http://multibahia.com/imagenes/ART_1484_8.JPG",
                    "http://multibahia.com/imagenes/ART_1484_6.JPG",
                    "http://multibahia.com/imagenes/ART_1485_0.JPG",
                    "http://multibahia.com/imagenes/ART_1486_0.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 15,
                name: "AURICULAR BT VINCHA - P9",
                price: 12780,
                description: "Auricular Vincha P9 inalámbrico. Tiempo de reproducción: 5 a 6 horas. Alcance de 10 metros",
                image: "http://multibahia.com/imagenes/ART_6954774700090_4.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_6954774700090_1.JPG",
                    "http://multibahia.com/imagenes/ART_6954774700090_3.JPG",
                    "http://multibahia.com/imagenes/ART_6954774700090_5.JPG",
                    "http://multibahia.com/imagenes/ART_6954774700090_6.JPG",
                    "http://multibahia.com/imagenes/ART_6954774700090_7.JPG",
                    "http://multibahia.com/imagenes/ART_6954774700090_8.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 16,
                name: "MANOS LIBRES TYPE C - AITECH AI-004 C",
                price: 4380,
                description: "Auriculares In Ear Aitech AI-004 con cable tipo C de 1,2 metros. Manos libre",
                image: "http://multibahia.com/imagenes/ART_AIAU082004N_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_AIAU082004N_0.JPG",
                    "http://multibahia.com/imagenes/ART_AIAU082004N_1.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 17,
                name: "MANOS LIBRES 3.5MM - ONE+",
                price: 4380,
                description: "Auriculares In Ear OnePlus con cable ficha 3.5mm de 1,2 metros. Manos libre",
                image: "http://multibahia.com/imagenes/ART_8944870157247_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_AIAU082004N_0.JPG",
                    "http://multibahia.com/imagenes/ART_8944870157254_0.JPG",
                    "http://multibahia.com/imagenes/ART_8944870157278_0.JPG",
                ],
                category: "Auriculares"
            },
            {
                id: 18,
                name: "Auriculares EarPods Lightning",
                price: 4380,
                description: "Auriculares Apple EarPods lighning de 1,2 metros. Manos libre",
                image: "http://multibahia.com/imagenes/ART_190198001733_0.jpg",
                images : [
                    "http://multibahia.com/imagenes/ART_190198001733_0.jpg",
                    "https://notebooksneuquen.com/tec/1884-large_default/auriculares-apple-earpods-lightning-iphone-original.jpg",
                ],
                category: "Auriculares"
            },
            {
                id: 19,
                name: "MICROFONO 3.5MM - ONE+ NR9143 CORBATERO - 2 METROS",
                price: 3166,
                description: "Microfono Corbatero OnePlus NR9143. Conector 3.5mm. Largo: 2 Metros. Noise Reduction. Marca ONEPLUS",
                image: "http://multibahia.com/imagenes/ART_8435606707633_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_8435606707633_1.JPG",
                    "http://multibahia.com/imagenes/ART_8435606707633_0.JPG",
                ],
                category: "Electro y Hogar"
            },
            {
                id: 19,
                name: "MICROFONO 3.5MM - ONE+ NR9143 CORBATERO - 3 METROS",
                price: 4370,
                description: "Microfono Corbatero OnePlus NR9143. Conector 3.5mm. Largo: 3 Metros. Noise Reduction. Marca ONEPLUS",
                image: "http://multibahia.com/imagenes/ART_8435606707640_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_8435606707640_1.JPG",
                    "http://multibahia.com/imagenes/ART_8435606707640_0.JPG",
                ],
                category: "Electro y Hogar"
            },
            {
                id: 20,
                name: "MICROFONO CORBATERO MALIBU J88 2 MIC FICHA DUAL TIPO C Y LIGHTNING",
                price: 4370,
                description: "MICROFONO CORBATERO MALIBU J88 2 MIC FICHA DUAL TIPO C Y LIGHTNING P/IPHONE ESTUCHE TIPO POWERBANK.",
                image: "http://multibahia.com/imagenes/ART_J88_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_J88_0.JPG",
                    "http://multibahia.com/imagenes/ART_J88_1.JPG",
                    "http://multibahia.com/imagenes/ART_J88_2.JPG",
                ],
                category: "Electro y Hogar"
            },
            {
                id: 19,
                name: "MICROFONO 3.5MM - ONE+ NR9143 CORBATERO - 3 METROS",
                price: 4370,
                description: "Microfono Corbatero OnePlus NR9143. Conector 3.5mm. Largo: 3 Metros. Noise Reduction. Marca ONEPLUS",
                image: "http://multibahia.com/imagenes/ART_8435606707640_0.JPG",
                images : [
                    "http://multibahia.com/imagenes/ART_8435606707640_1.JPG",
                    "http://multibahia.com/imagenes/ART_8435606707640_0.JPG",
                ],
                category: "Electro y Hogar"
            },
        ];

        let cart = [];
        let selectedProduct = null;
        let currentCategory = 'all';

        // Función para filtrar productos
        function filterProducts(category) {
            currentCategory = category;
            // Actualizar botones activos
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active-category');
            });
            event.target.classList.add('active-category');
            
            initProducts(category);
        }

        // Inicializar productos con filtro
        function initProducts(category = 'all') {
            const productList = document.getElementById('product-list');
            const filteredProducts = category === 'all' 
                ? products 
                : products.filter(p => p.category === category);

            productList.innerHTML = filteredProducts.map(product => `
                <div class="col-md-4">
                    <div class="card product-card">
                        <img src="${product.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <h6>$${product.price}</h6>
                            <small class="text-muted">${product.category}</small>
                            <div class="mt-2">
                                <button class="btn btn-info" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#productModal"
                                    onclick="showProductDetails(${product.id})">
                                    Más Info
                                </button>
                                <button class="btn btn-success" 
                                    onclick="addToCart(${product.id})">
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Mostrar detalles del producto en modal
        function showProductDetails(productId) {
    selectedProduct = products.find(p => p.id === productId);
    const carouselInner = document.getElementById('carousel-inner');
    
    // Actualizar detalles
    document.getElementById('modalProductName').textContent = selectedProduct.name;
    document.getElementById('modalProductDescription').textContent = selectedProduct.description;
    document.getElementById('modalProductPrice').textContent = selectedProduct.price;
    
    // Generar imágenes del carrusel
    carouselInner.innerHTML = selectedProduct.images.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100" alt="Imagen ${index + 1}">
        </div>
    `).join('');

    // Ocultar controles si solo hay una imagen
    const controls = document.querySelectorAll('.carousel-control');
    controls.forEach(control => {
        control.style.display = selectedProduct.images.length > 1 ? 'block' : 'none';
    });
}

        // Carrito
        function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if(product) {
        cart.push(product);
        updateCartCount();
    } else {
        console.error('Producto no encontrado');
    }
}

        function updateCartCount() {
            document.getElementById('cart-count').textContent = cart.length;
        }

        // Finalizar pedido
        function completeOrder() {
            const total = cart.reduce((sum, product) => sum + product.price, 0);
            const message = `Hola, quiero hacer un pedido de:\n${cart.map(p => `- ${p.name} ($${p.price})`).join('\n')}\n\nTotal: $${total}`;
            const whatsappURL = `https://wa.me/5492915275183?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }

        // Inicializar
        initProducts();
    