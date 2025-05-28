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
    id: 21,
    name: "MICROFONO GAMER - CONDENSADOR OMNIDIRECCIONAL CON TRIPODE",
    price: 20050,
    description: "Microfono condenser con tripode para pc - streaming.",
    image: "http://multibahia.com/imagenes/ART_EC100460._0.jpg",
    images: [
      "http://multibahia.com/imagenes/ART_EC100460._0.jpg",
      "http://multibahia.com/imagenes/ART_EC100460._1.jpg",
      "http://multibahia.com/imagenes/ART_EC100460._2.jpg",
      "http://multibahia.com/imagenes/ART_EC100460._5.jpg"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 22,
    name: "PARLANTE 2 EN 1 - AITECH LUZ RGB 250V GIRATORIA",
    price: 8900,
    description: "Foco parlante Aitech Giratoria Bluetooth con luz RGB 250v.",
    image:"http://multibahia.com/imagenes/ART_AILD102001M_0.jpg",
    images: [
      "http://multibahia.com/imagenes/ART_AILD102001M_0.jpg",
      "http://multibahia.com/imagenes/ART_AILD102001M_1.jpg"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 23,
    name: "PARLANTE 2 EN 1 - OS-125 FOCO LED RGB C/CONTROL",
    price: 9160,
    description: "Foco led Bluetooth con luces RGB de 100 - 240v y control remoto.",
   image:"http://multibahia.com/imagenes/ART_OS125A_0.jpg",
    images: [
      "http://multibahia.com/imagenes/ART_OS125A_0.jpg"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 24,
    name: "PARLANTE 2 EN 1 - KA06 CARACOL PARLANTE / LUZ LED",
    price: 33930,
    description: "Lampara parlante Bluetooth Ka06 con forma de caracol y luz LED.",
    image:"http://multibahia.com/imagenes/ART_EC100282._0.jpg",
    images: [
      "http://multibahia.com/imagenes/ART_EC100282._0.jpg",
      "http://multibahia.com/imagenes/ART_EC100282._1.jpg",
      "http://multibahia.com/imagenes/ART_EC100282._2.jpg",
      "http://multibahia.com/imagenes/ART_EC100282._3.jpg",
      "http://multibahia.com/imagenes/ART_EC100282._4.jpg"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 25,
    name: "PARLANTE VELADOR Y LAMPARA - PROYECTOR DE NOCHE",
    price: 19530,
    description: "Lampara proyector velador de noche 360. Ideal para dormitorios infantiles.",
    image:"http://multibahia.com/imagenes/ART_HOG0112_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_HOG0112_0.JPG",
      "http://multibahia.com/imagenes/ART_HOG0112_1.JPG",
      "http://multibahia.com/imagenes/ART_HOG0112_2.JPG",
      "http://multibahia.com/imagenes/ART_HOG0112_5.JPG",
      "http://multibahia.com/imagenes/ART_HOG0112_6.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 26,
    name: "PARLANTES PARA PC 2.0 - AITECH AI-355 CON LUZ RGB",
    price: 17050,
    description: "Parlates para pc Aitech, ofreciendo sonido nítido y diseño moderno con luz RGB.",
    image:"http://multibahia.com/imagenes/ART_AIPS050553N_0.jpg",
    images: [
      "http://multibahia.com/imagenes/ART_AIPS050553N_0.jpg"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 27,
    name: "PARLANTE 3 EN 1 - LAMPARA, CARGADOR INALAMBRICO Y PARLANTE - BR3401",
    price: 30880,
    description: "Excelente dispositivo parlante, cargador inalambrico y lampara RGB. Carga a 15w, suficiente para iPhone. Bluetooth 5.1.",
    image: "http://multibahia.com/imagenes/ART_6973281283070_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_6973281283070_0.JPG",
      "http://multibahia.com/imagenes/ART_6973281283070_1.JPG",
      "http://multibahia.com/imagenes/ART_6973281283070_2.JPG",
      "http://multibahia.com/imagenes/ART_6973281283070_3.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 28,
    name: "PARLANTE 3 EN 1 - G600 LAMPARA G RGB / CARGA INALÁMBRICA 15W / PARLANTE",
    price: 23374,
    description: "Parlante 3 en 1 - Cargador inalambrico, parlante con luces RGB. Soporta Auxiliar, Tf, USB, FM. Cuenta con bateria propia de 500mAh. Carga a 15w",
    image: "http://multibahia.com/imagenes/ART_6912501600518_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_6912501600518_1.JPG",
      "http://multibahia.com/imagenes/ART_6912501600518_2.JPG",
      "http://multibahia.com/imagenes/ART_6912501600518_3.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 29,
    name: "PARLANTE AITECG AI-8350 TEXAS BLUETOOTH CON FM Y LUCES RGB.",
    price: 23980,
    description: "Parlante bluetooth ligero y transporable, para la plaza, la playa, una juntada, donde quieras. Bateria de 1200mAh. Variedad de colores",
    image: "http://multibahia.com/imagenes/ART_AISP040309A_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_AISP040309C_0.JPG",
      "http://multibahia.com/imagenes/ART_AISP040309A_0.JPG",
      "http://multibahia.com/imagenes/ART_AISP040309N_0.JPG",
      "http://multibahia.com/imagenes/ART_AISP040309R_0.JPG",
      "http://multibahia.com/imagenes/ART_AISP040309Y_0.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 30,
    name: "PARLANTE AITECH AI8390 CHARLOTTE BLUETOOTH LUZ RGB CON SOPORTE 5W NEGRO",
    price: 23225,
    description: "Parlante Aitech Charlotte Bluetooth, excelete opción para transportarlo y escuchar donde prefieras. Bateria de 1200mAh. Solo Negro",
    image: "http://multibahia.com/imagenes/ART_AISP040391N_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_AISP040391N_0.JPG",
      "http://multibahia.com/imagenes/ART_AISP040391N_1.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 31,
    name: "PARLANTE AITECH AIT-505 MOVEMENT AZUL/ROJO",
    price: 18400,
    description: "Parlante Aitech AIT-505 Movement GO portable, excelente para transportarlo en tu bici y llevarlo donde quieras. Bateria de 500mAh. 1hora de uso",
    image: "http://multibahia.com/imagenes/ART_AISP030105B_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_AISP030105B_0.JPG",
      "http://multibahia.com/imagenes/ART_AISP030105B_1.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 32,
    name: "PARLANTE AITECH ARIZONA 3\"X2 BLUETOOTH FM 5 MODOS DE LUCES RGB",
    price: 29710,
    description: "Parlante Aitech Arizona Bluetooth. La opcion para llevarlo donde quieras y obtener el maximo provecho. Cuenta con luces RGB, radio FM, sonido potente y nitido. Bateria de larga duracion",
    image: "http://multibahia.com/imagenes/ART_AISP040119N_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_AISP040119N_0.JPG",
      "http://multibahia.com/imagenes/ART_AISP040119N_1.JPG",
      "http://multibahia.com/imagenes/ART_AISP040119N_2.JPG"
    ],
    category: "Sin categoría"
  },
  {
    id: 33,
    name: "PARLANTE GTS-1732",
    price: 12140,
    description: "El parlante GTS-1732 tiene una potencia de 5 watts y un excelente sonido de alta definición. Funciona con Bluetooth en forma inalambrica con hasta 10 metros de alcance.",
    image: "http://multibahia.com/imagenes/ART_1494_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_1494_0.JPG",
      "http://multibahia.com/imagenes/ART_1494_6.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 34,
    name: "PARLANTE K52 CON MICROFONO INALAMBRICO",
    price: 29030,
    description: "K52 Altavoz Bluetooth, Mini portátil, Karaoke inalámbrico, Altavoz de micrófono de audio Bluetooth.",
    image: "http://multibahia.com/imagenes/ART_736372874979_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_736372874979_0.JPG",
      "http://multibahia.com/imagenes/ART_736372874979_1.JPG",
      "http://multibahia.com/imagenes/ART_736372874979_2.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 35,
    name: "PARLANTE LAMPARA ASTRONAUTA BN0384",
    price: 37250,
    description: "LÁMPARA DE PROYECTOR DE ASTRONAUTA CON BLUETOOTH. 7 colores, laser verde y proyector de luna. Con su respectivo control remoto",
    image: "http://multibahia.com/imagenes/ART_6912408103846_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_6912408103846_0.JPG",
      "http://multibahia.com/imagenes/ART_6912408103846_1.JPG",
      "http://multibahia.com/imagenes/ART_6912408103846_2.JPG",
      "http://multibahia.com/imagenes/ART_6912408103846_3.JPG",
      "http://multibahia.com/imagenes/ART_6912408103846_4.JPG",
      "http://multibahia.com/imagenes/ART_6912408103846_6.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 36,
    name: "RECEPTOR BLUETOOTH CAR WIRELES BT310",
    price: 4500,
    description: "Convierta su Stereo o equipo de música normales al instante en altavoces estéreo inalámbricos Bluetooth y manos libres ya que tiene incorporado un micrófono.",
    image: "http://multibahia.com/imagenes/ART_7899202105124_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_7899202105124_0.JPG",
      "http://multibahia.com/imagenes/ART_7899202105124_1.JPG"
    ],
    category: "Accesorios"
  },
  {
    id: 37,
    name: "TRANSMISOR FM - KARSEN SMART CAR",
    price: 7270,
    description: "Transmisor FM Inalambrico con Bluetooth. Doble USB para cargar tu movil. 3.1 Amp.",
    image: "http://multibahia.com/imagenes/ART_1488_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_1488_0.JPG",
      "http://multibahia.com/imagenes/ART_1488_1.JPG",
      "http://multibahia.com/imagenes/ART_1488_4.JPG"
    ],
    category: "Accesorios"
  },
  {
    id: 38,
    name: "TRANSMISOR FM - SUONO ACC0007 - CARG7 1 USB 5V 3.1A - 12-24V",
    price: 4040,
    description: "Transmisor FM para autos con Bluetooth. Display Led, botones fisicos y apagado indepentiente. Admite USB y micro SD hasta 32gb.",
    image: "http://multibahia.com/imagenes/ART_715753636436_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_715753636436_0.JPG",
      "http://multibahia.com/imagenes/ART_715753636436_1.JPG",
      "http://multibahia.com/imagenes/ART_715753636436_2.JPG",
      "http://multibahia.com/imagenes/ART_715753636436_3.JPG"
    ],
    category: "Sin categoría"
  },
  {
    id: 39,
    name: "TRANSMISOR FM - SUONO ACC0050 LED 2 USB 5V 3.1A - 12-24V",
    price: 5995,
    description: "Transmisor FM Suono, receptor de audio bluetooth 3.1A ual USB, cargador de auto rapido.",
    image: "http://multibahia.com/imagenes/ART_731299175192_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_731299175192_0.JPG",
      "http://multibahia.com/imagenes/ART_731299175192_1.JPG",
      "http://multibahia.com/imagenes/ART_731299175192_2.JPG"
    ],
    category: "Accesorios"
  },
  {
    id: 40,
    name: "Adaptador Audio 1 a 2",
    price: 1970,
    description: "Adaptador Audio (auricular y microfono). De Plug 3.5mm a direrenciado audio y mcriofono 3.5mm. Ideal para pc, notebook o consola como ps4, xbox, etc",
    image: "http://multibahia.com/imagenes/ART_400-0069_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_400-0069_0.JPG",
      "http://multibahia.com/imagenes/ART_400-0069_1.JPG"
    ],
    category: "Electro y Hogar"
  },
  {
    id: 41,
    name: "Adaptador de audio - tipo C a 3.5mm metalico",
    price: 4977,
    description: "Adaptador de jack 3.5mm a USB TIPO C. Para celulares que no tengan entrada de auriculares comun.",
    image: "http://multibahia.com/imagenes/ART_6971696236520_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_6971696236520_0.JPG",
      "http://multibahia.com/imagenes/ART_6971696236520_1.JPG",
      "http://multibahia.com/imagenes/ART_6971696236520_2.JPG"
    ],
    category: "Accesorios"
  },
  {
    id: 42,
    name: "Adaptador de audio Aitech Tipo C a 3.5mm",
    price: 5130,
    description: "Adaptador de jack 3.5mm a USB TIPO C marca Aitech. Para celulares que no tengan entrada de auriculares comun.",
    image: "http://multibahia.com/imagenes/ART_AIAD100286B_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_AIAD100286B_0.JPG",
      "http://multibahia.com/imagenes/ART_AIAD100286B_1.JPG"
    ],
    category: "Accesorio"
  },
  {
    id: 43,
    name: "Adaptador Apple 3.5mm a lightning",
    price: 3870,
    description: "Adaptador de jack 3.5mm a Lightning Apple",
    image: "http://multibahia.com/imagenes/ART_AD-GGCH11_0.jpg",
    images: [
      "http://multibahia.com/imagenes/ART_AD-GGCH11_0.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn :ANd9GcQVPAAdNIDrWga_fqG4_PoHtqBeIQJWlP7BVQ&s"
    ],
    category: "Accesorio"
  },
  {
    id: 44,
    name: "Adaptador Karsen 3.5mm a Lightning",
    price: 3550,
    descriptio: "Adaptador de jack 3.5mm a Lightning Karsen",
    image: "http://multibahia.com/imagenes/ART_1000_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_1000_0.JPG",
      "http://multibahia.com/imagenes/ART_1000_1.JPG"
    ],
    category: "Accesorio"
  },
  {
    id: 45,
    name: "Adaptador Karsen 3.5mm a USB tipo C",
    price: 3320,
    description: "Adaptador de jack 3.5mm a USB tipo C",
    image: "http://multibahia.com/imagenes/ART_1005_0.JPG",
    images: [
      "http://multibahia.com/imagenes/ART_1005_0.JPG",
      "http://multibahia.com/imagenes/ART_1005_1.JPG"
    ],
    category: "Accesorios"
  },
  {
    id: 46,
    name: "CABLE ALIMENTACION - AITECH INTERLOCK TIPO 8 - 1.50 METROS",
    price: 3620,
    description:"Cable de alimentacion Interlock de tipo 8, compatible para ciertas modelos notebook, TV, Play 3 y otros dispositivos. 1.5 metros de largo. Capacidad de voltaje: 110/220v" ,
    image:"http://multibahia.com/imagenes/ART_EC100218._0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC100218._0.JPG"],
    category:"Cables",
  },
  {
    id:47,
    name:"Cable alimentacion Power 1.5metros",
    price:3629,
    description:"Cable de alimentacion para fuente de alimentacion de PC. 1,5 metros de largo.",
    image:"http://multibahia.com/imagenes/ART_EC100216._0.jpg",
    images:["http://multibahia.com/imagenes/ART_EC100216._0.jpg"],
    category:"Cables",
  },
  {
    id:48,
    name:"Cable de alimentacion trebol power 1.5m",
    price:3629,
    description:"Cable de aliemntacion trebol power. Compatible con fuente de alietacion de notebook, tv y otros dispositivos. Cable 1.5 metros de largo.",
    image:"http://multibahia.com/imagenes/ART_EC100217._0.jpg",
    images:["http://multibahia.com/imagenes/ART_EC100217._0.jpg"],
    category:"Cables",
  },
  {
    id:49,
    name:"Cable auxiliar 3.5mm macho y hembra",
    price:1510,
    description:"Cable auxiliar 3.5mm macho/hembra. Funciona como extensión de audio. Cable de 1.5 metros",
    image:"http://multibahia.com/imagenes/ART_EC97024_0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC97024_0.JPG",
        "http://multibahia.com/imagenes/ART_EC97024_1.JPG"
    ],
    category:"Cables",
  },
  {
    id:49,
    name:"Cable auxiliar 3.5mm macho y hembra",
    price:1510,
    description:"Cable auxiliar 3.5mm macho/hembra. Funciona como extensión de audio. Cable de 1.5 metros",
    image:"http://multibahia.com/imagenes/ART_EC97024_0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC97024_0.JPG",
        "http://multibahia.com/imagenes/ART_EC97024_1.JPG"
    ],
    category:"Cables",
  },
  {
    id:50,
    name:"Cable auxiliar 3.5mm macho/ macho",
    price:1360,
    description:"CABLE AUDIO AUXILIAR 3.5MM - AITECH NEGRO 1.5 METROs",
    image:"http://multibahia.com/imagenes/ART_EC91182_0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC91182_0.JPG",
    ],
    category:"Cables",
  },
  {
    id:51,
    name:"Cable auxiliar KARSEN mallado 3.5mm macho/macho",
    price:1625,
    description:"Cable auxiliar KARSEN macho/macho 3.5mm, mallado. 1,5 metros de largo",
    image:"http://multibahia.com/imagenes/ART_7246_0.JPG",
    images:["http://multibahia.com/imagenes/ART_7246_0.JPG",
        "http://multibahia.com/imagenes/ART_7245_0.JPG"
    ],
    category:"Cables",
  },
  {
    id:52,
    name:"CABLE AUDIO RCA - GM-3441 2 RCA A 3.5MM 3 METROS",
    price:1660,
    description:"Cable Audio 3.5Mm A 2 RCA 3 Metros.Ideal para conectar tu pc, notebook, netbook, home theater, etc. a un equipo de música, parlantes potenciados u otros.",
    image:"http://multibahia.com/imagenes/ART_3780201370023_0.JPG",
    images:["http://multibahia.com/imagenes/ART_3780201370023_0.JPG",
    ],
    category:"Cables",
  },
  {
    id:53,
    name:"Cable Lightning Aitech. 1 metro",
    price:4225,
    description:"Cable Lightning Aitech. Soporta carga rapida. 1metro de largo. Salida de 5A",
    image:"http://multibahia.com/imagenes/ART_AICA181501B_0.JPG",
    images:["http://multibahia.com/imagenes/ART_AICA181501B_0.JPG",
    ],
    category:"Cables",
  },
  {
    id:53,
    name:"Cable Video HDMI 10 metros mallado",
    price:10580,
    description:"Cable HDMI de 10 metros para mayor flexibilidad en conexionesFull HD y compatible con LED TV y 3D para mejor experiencia visual. Diseño mallado",
    image:"http://multibahia.com/imagenes/ART_4000-0040_0.JPG",
    images:["http://multibahia.com/imagenes/ART_4000-0040_0.JPG",
    ],
    category:"Cables",
  },
  {
    id:54,
    name:"Cable Video HDMI 10 metros ",
    price:9500,
    description:"Cable video HDMI 10 metro, negro",
    image:"http://multibahia.com/imagenes/ART_EC100398._0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC100398._0.JPG",
    ],
    category:"Cables",
  },
  {
    id:55,
    name:"Convertidor HDMI - 2AV",
    price:15990,
    description:"Convertidor HDMI a RCA - Av es un convertidor universal de entrada hdmi 1080p a video compuesto analogico de salida. Compativilidad variada para PC, DVD, PS3, PROYECTOR, ETC",
    image:"http://multibahia.com/imagenes/ART_EC09052_0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC09052_0.JPG",
        "http://multibahia.com/imagenes/ART_EC09052_1.JPG",
        "http://multibahia.com/imagenes/ART_EC09052_2.JPG"
    ],
    category:"Cables",
  },
  {
    id:56,
    name:"Convertidor HDMI - 2AV AITECH",
    price:15990,
    description:"Convertidor HDMI a RCA - Av es un convertidor universal de entrada hdmi 1080p a video compuesto analogico de salida. Compativilidad variada para PC, DVD, PS3, PROYECTOR, ETC",
    image:"http://multibahia.com/imagenes/ART_EC09052_0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC09052_0.JPG",
        "http://multibahia.com/imagenes/ART_EC09052_1.JPG",
        "http://multibahia.com/imagenes/ART_EC09052_2.JPG"
    ],
    category:"Cables",
  },
  {
    id:57,
    name:"Cargador de auto 12v cabezal 38W - Ibek",
    price:6820,
    description:"CARGADOR AUTO 12V CABEZAL 38W - IBEK AC-2330. 2 entRADAS: USB A y Tipo C.",
    image:"http://multibahia.com/imagenes/ART_7790839912690_0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC09052_0.JPG",
        "http://multibahia.com/imagenes/ART_7790839912690_0.JPG",
    ],
    category:"Cargadores",
  },
  {
    id:58,
    name:"CARGADOR AUTO 12V CABEZAL 45W - AITECH",
    price:6840,
    description:"Cargador de Auto Aitech 2USB 45W PD+QC3.0 potencia total de hasta 45W, asegurando una carga rápida y eficiente. 2 entradas: USB-A y TIPO C",
    image:"http://multibahia.com/imagenes/ART_7790839912690_0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC09052_0.JPG",
        "http://multibahia.com/imagenes/ART_7790839912690_0.JPG",
    ],
    category:"Cargadores",
  },
  {
    id:59,
    name:"CARGADOR AUTO 12V MICRO USB 18W - LDNIO C309",
    price:12215,
    description:"Cargador de auto LDNIO C309. Protección ante posible sobre voltaje. 2 puertos USB. Potencia máxima de salida: 18W",
    image:"http://multibahia.com/imagenes/ART_6933138610473._0.JPG",
    images:["http://multibahia.com/imagenes/ART_6933138610473._0.JPG",
        "http://multibahia.com/imagenes/ART_6933138610473._1.JPG",
        "http://multibahia.com/imagenes/ART_6933138610473._2.JPG",
        "http://multibahia.com/imagenes/ART_6933138610473._3.JPG"
    ],
    category:"Cargadores",
  },
  {
    id:60,
    name:"CARGADOR AUTO 12V MICRO USB 18W - LDNIO C309",
    price:12215,
    description:"Cargador de auto LDNIO C309. Protección ante posible sobre voltaje. 2 puertos USB. Potencia máxima de salida: 18W",
    image:"http://multibahia.com/imagenes/ART_6933138610473._0.JPG",
    images:["http://multibahia.com/imagenes/ART_6933138610473._0.JPG",
        "http://multibahia.com/imagenes/ART_6933138610473._1.JPG",
        "http://multibahia.com/imagenes/ART_6933138610473._2.JPG",
        "http://multibahia.com/imagenes/ART_6933138610473._3.JPG"
    ],
    category:"Cargadores",
  },
  {
    id:61,
    name:"Cargador Apple iPhone 20W - USB C",
    price:9010,
    description:"Cargador Apple iPhone 20w, carga rapida y eficiente. Entrada USB Tipo C. SIN CABLE",
    image:"http://multibahia.com/imagenes/ART_190199040670_0.JPG",
    images:["http://multibahia.com/imagenes/ART_190199040670_0.JPG",
        "https://http2.mlstatic.com/D_NQ_NP_714142-MLA74327451319_012024-O.webp",
    ],
    category:"Cargadores",
  },
  {
    id:62,
    name:"Cargador Apple iPhone 25W - USB C. ",
    price:10260,
    description:"Cargador Apple iPhone 25w, carga rapida y eficiente. Entrada USB Tipo C. Ficha a pared recta. SIN CABLE",
    image:"http://multibahia.com/imagenes/ART_CAR084_0.JPG",
    images:["http://multibahia.com/imagenes/ART_CAR084_0.JPG",
        "https://m.media-amazon.com/images/I/51Wt-N8TcVL.jpg",
    ],
    category:"Cargadores",
  },
  {
    id:63,
    name:"CARGADOR 220V CABEZAL 25W - SAMSUNG USB-C ",
    price:7510,
    description:"Cargador SAMSUNG 25w, carga rapida. Entrada USB Tipo C. SIN CABLE",
    image:"http://multibahia.com/imagenes/ART_CAR-GGSM25WPD_0.JPG",
    images:["http://multibahia.com/imagenes/ART_CAR-GGSM25WPD_0.JPG",
    ],
    category:"Cargadores",
  },
  {
    id:64,
    name:"CARGADOR 220V CABEZAL 25W -AITECH ",
    price:6490,
    description:"Cargador AITECH 25w, carga rapida. Entrada USB Tipo C. SIN CABLE",
    image:"http://multibahia.com/imagenes/ART_AICP060120X_0.JPG",
    images:["http://multibahia.com/imagenes/ART_AICP060120X_0.JPG",
        
    ],
    category:"Cargadores",
  },
  {
    id:65,
    name:"CARGADOR 220V CABEZAL 65W - AITECH",
    price:42980,
    description:"Cargador AITECH 65w, carga TURBO. Entrada USB Tipo C y USB-A. Cuenta con 3 tipos de fichas adaptadoras. SIN CABLE",
    image:"http://multibahia.com/imagenes/ART_AICP060130B_0.JPG",
    images:["http://multibahia.com/imagenes/ART_AICP060130B_0.JPG",
        "http://multibahia.com/imagenes/ART_AICP060130B_1.JPG",
        "http://multibahia.com/imagenes/ART_AICP060130B_2.JPG",
        "http://multibahia.com/imagenes/ART_AICP060130B_3.JPG",
        "http://multibahia.com/imagenes/ART_AICP060130B_4.JPG"
    ],
    category:"Cargadores",
  },
  {
    id:66,
    name:"CARGADOR 220V CABEZAL 65W - SAMSUNG",
    price:13500,
    description:"Adaptador Trio de carga super rápida - sin cable (65W) SIN CABLE",
    image:"http://multibahia.com/imagenes/ART_8806090973369_0.JPG",
    images:["http://multibahia.com/imagenes/ART_8806090973369_0.JPG",
        "http://multibahia.com/imagenes/ART_8806090973369_1.JPG",
    ],
    category:"Cargadores",
  },
  {
    id:67,
    name:"CARGADOR INALAMBRICO 10W - KARSEN",
    price:10640,
    description:"Cargador base inalambrica Karsen. Solo apoyas el celular y se va cargando (Solo apto para celulares con bobina de carga como: Iphone 8 en adelante, Samsung S7 en adelante, Xiaomi MI 9 en adelante, etc",
    image:"http://multibahia.com/imagenes/ART_7243_0.JPG",
    images:["http://multibahia.com/imagenes/ART_7243_0.JPG",
        "http://multibahia.com/imagenes/ART_7243_1.JPG",
        "http://multibahia.com/imagenes/ART_7243_2.jpg",
        "http://multibahia.com/imagenes/ART_7242_0.JPG",
        "http://multibahia.com/imagenes/ART_7242_1.JPG",

    ],
    category:"Cargadores",
  },
  {
    id:68,
    name:"CARGADOR INALAMBRICO 15W - AITECH",
    price:15990,
    description:"Cargador base inalambrica MAGNETICO Aitech. Incluye su cable USB tipo C Solo apoyas el celular y se va cargando (Solo apto para celulares con bobina de carga como: Iphone 8 en adelante, Samsung S7 en adelante, Xiaomi MI 9 en adelante, etc). Compatible para fundas MAGSAFE",
    image:"http://multibahia.com/imagenes/ART_AICW010131B_0.JPG",
    images:["http://multibahia.com/imagenes/ART_AICW010131B_0.JPG",
        "http://multibahia.com/imagenes/ART_AICW010131B_1.JPG",
        "http://multibahia.com/imagenes/ART_AICW010131B_2.JPG",
    ],
    category:"Cargadores",
  },
  {
    id:69,
    name:"CARGADOR INALAMBRICO 3 EN 1",
    price:59600,
    description:"Cargador Inalámbrico 3 en 1 es una solución práctica y eficiente para cargar simultáneamente tu celular, iWatch y auriculares inalámbricos. Es compatible con una amplia gama de dispositivos Android e iOS que admiten carga inalámbrica",
    image:"http://multibahia.com/imagenes/ART_EC100362._0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC100362._0.JPG",
        "https://i.ebayimg.com/images/g/P~sAAOSw-iNmKcTw/s-l1600.jpg",
    ],
    category:"Cargadores",
  },
  {
    id:70,
    name:"CARGADOR INALAMBRICO APPLE MAGSAFE",
    price:12780,
    description:"Cargador MagSafe hace que la carga inalámbrica sea muy sencilla. Los imanes perfectamente alineados se adhieren a su iPhone 14, iPhone 14 Pro, iPhone 13, iPhone 13 Pro, iPhone 12 y iPhone 12 Pro y brindan una carga inalámbrica más rápida de hasta 15 W",
    image:"http://multibahia.com/imagenes/ART_194252192450_0.jpg",
    images:["http://multibahia.com/imagenes/ART_194252192450_1.JPG",
        "http://multibahia.com/imagenes/ART_194252192450_2.JPG",
        "http://multibahia.com/imagenes/ART_194252192450_0.jpg",
    ],
    category:"Cargadores",
  },
  {
    id:71,
    name:"PARLANTE YZ-6B 6 EN 1 -RELOJ ALARMA - CLIMA / LUZ LED / QI 15 W",
    price:12780,
    description:"Parlante YZ-6B 6 en 1 RGB, Bluetooth, Cargador inalambrico de 15w",
    image:"http://multibahia.com/imagenes/ART_YZ-6B_0.JPG",
    images:["http://multibahia.com/imagenes/ART_YZ-6B_0.JPG",
        "http://multibahia.com/imagenes/ART_YZ-6B_2.JPG",
        "http://multibahia.com/imagenes/ART_YZ-6B_4.JPG",
        "http://multibahia.com/imagenes/ART_YZ-6B_6.JPG",
    ],
    category:["Cargadores","Electro y Hogar" ]
  },
  {
    id:72,
    name:"ABRIDOR DE VINO AUTOMATICO SUONO",
    price:28430,
    description:"Sacacorchos Automatico, recargable con USB. SUONO",
    image:"http://multibahia.com/imagenes/ART_HOG0058_0.JPG",
    images:["http://multibahia.com/imagenes/ART_HOG0058_0.JPG",
        "http://multibahia.com/imagenes/ART_HOG0058_1.JPG",
    ],
    category:"Electro y Hogar",
  },
  {
    id:73,
    name:"AIREADOR, OXIGENADOR & DISPENSER DE VINO ELECTRICO",
    price:22375,
    description:"Aireador de vino eléctrico: decantador de vino automático inteligente, dispensador de vino recargable",
    image:"http://multibahia.com/imagenes/ART_736372874726_0.JPG",
    images:["http://multibahia.com/imagenes/ART_736372874726_0.JPG",
        "http://multibahia.com/imagenes/ART_736372874726_2.JPG",
    ],
    category:"Electro y Hogar",
  },
  {
    id:74,
    name:"Malla Nylon Braid Loop 42/44mm",
    price:8324,
    description:"Malla de nylon trenzada con más de 16.000 filamentos apta para todas las series compatible con medida 42/44 MM. Elástica, ant-itranspirante, anatómica. Conectores de acero inoxidable",
    image:"http://multibahia.com/imagenes/ART_25743_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25743_0.JPG",
        "http://multibahia.com/imagenes/ART_25751_0.JPG",
        "http://multibahia.com/imagenes/ART_25747_0.JPG",
        "http://multibahia.com/imagenes/ART_25744_0.JPG",
        "http://multibahia.com/imagenes/ART_25752_0.JPG",
        "http://multibahia.com/imagenes/ART_25741_0.JPG",

    ],
    category:"Smartwatch",
  },
  {
    id:75,
    name:"Malla Nylon Hair Tie 42/44mm",
    price:8324,
    description:"Malla estilo colita de pelo apta para todas las series de Applewatch compatible con medidas 42/44MM. Material súper resistente y elástico con diseños únicos y novedosos.",
    image:"http://multibahia.com/imagenes/ART_25743_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25743_0.JPG",
        "http://multibahia.com/imagenes/ART_25760_0.JPG",
        "http://multibahia.com/imagenes/ART_25756_0.JPG",
        "http://multibahia.com/imagenes/ART_25759_0.JPG",

    ],
    category:"Smartwatch",
  },
  {
    id:76,
    name:"Malla Nylon Velcro Loop 42/44mm",
    price:5051,
    description:"Malla de nylon uniloop con velcro de 4 ajustes compatible con todas las series de Applewacth apta para medidas de 42/44MM.",
    image:"http://multibahia.com/imagenes/ART_25826_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25826_0.JPG",
        "http://multibahia.com/imagenes/ART_25827_0.JPG",
        "http://multibahia.com/imagenes/ART_25768_0.JPG",
        "http://multibahia.com/imagenes/ART_25765_0.JPG",
        "http://multibahia.com/imagenes/ART_25767_0.JPG",
        "http://multibahia.com/imagenes/ART_25764_0.JPG"

    ],
    category:"Smartwatch",
  },
  {
    id:77,
    name:"Malla Rainbow Silicone 42/44mm",
    price:6810,
    description:"Malla de silicona multicolor estilo uniloop (pulsera sin cierre). Anti transpirante con encastre deslizable. Apto para medidas 42/44MM.",
    image:"http://multibahia.com/imagenes/ART_25783_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25783_0.JPG",
        "http://multibahia.com/imagenes/ART_25784_0.JPG",
        "http://multibahia.com/imagenes/ART_25785_0.JPG",
        "http://multibahia.com/imagenes/ART_25786_0.JPG",
        "http://multibahia.com/imagenes/ART_25787_0.JPG",
        "http://multibahia.com/imagenes/ART_25788_0.JPG",
        "http://multibahia.com/imagenes/ART_25789_0.JPG",
        "http://multibahia.com/imagenes/ART_25790_0.JPG",
        "http://multibahia.com/imagenes/ART_25791_0.JPG",
    ],
    category:"Smartwatch",
  },
  {
    id:78,
    name:"Malla Sport Silicone Loop 42/44mm",
    price:5489,
    description:"Correa sport uniloop de silicona con diseño estilo Nike.Compatible con medidas 42/44MM. Conectores de acero inoxidable.",
    image:"http://multibahia.com/imagenes/ART_25727_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25727_0.JPG",
        "http://multibahia.com/imagenes/ART_25731_0.JPG",
        "http://multibahia.com/imagenes/ART_25735_0.JPG",
        "http://multibahia.com/imagenes/ART_25728_0.JPG",
        "http://multibahia.com/imagenes/ART_25732_0.JPG",

    ],
    category:"Smartwatch",
  },
  {
    id:79,
    name:"Malla Nylon Braid 20mm",
    price:5270,
    description:"Malla Genérica estilo uniloop de nylon trenzada con hebilla regulable más de 16.000 filamentos. Apta para la medida de 20/22MM. Elástica, antitranspirante, anatómica, encastrable.",
    image:"http://multibahia.com/imagenes/ART_25678_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25678_0.JPG",
        "http://multibahia.com/imagenes/ART_25677_0.JPG",
        "http://multibahia.com/imagenes/ART_25676_0.JPG",
        "http://multibahia.com/imagenes/ART_25714_0.JPG",
    ],
    category:"Smartwatch",
  },
  {
    id:80,
    name:"Malla Nylon Braid 20mm",
    price:3950,
    description:"Apta para la medida de 20/22MM. Elástica, antitranspirante, anatómica, encastrable. Medidas 130/140/160 de largo",
    image:"http://multibahia.com/imagenes/ART_25715_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25715_0.JPG",
        "http://multibahia.com/imagenes/ART_25712_0.JPG",
        "http://multibahia.com/imagenes/ART_25716_0.JPG",
        "http://multibahia.com/imagenes/ART_25713_0.JPG",
        "http://multibahia.com/imagenes/ART_25846_0.JPG",
    ],
    category:"Smartwatch",
  },
  {
    id:80,
    name:"Malla Nylon Braid 22mm",
    price:3950,
    description:"Apta para la medida de 20/22MM. Elástica, antitranspirante, anatómica, encastrable. Medidas 130/140/160 de largo",
    image:"http://multibahia.com/imagenes/ART_25715_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25715_0.JPG",
        "http://multibahia.com/imagenes/ART_25712_0.JPG",
        "http://multibahia.com/imagenes/ART_25716_0.JPG",
        "http://multibahia.com/imagenes/ART_25713_0.JPG",
        "http://multibahia.com/imagenes/ART_25846_0.JPG",
    ],
    category:"Smartwatch",
  },
  {
    id:81,
    name:"Malla Nylon Loop Elastica 20mm",
    price:3950,
    description:"Malla genérica de nylon elástico suave estilo loop con hebilla ajustable. Compatible con smartwatch de 20/22MM",
    image:"http://multibahia.com/imagenes/ART_25684_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25684_0.JPG",
        "http://multibahia.com/imagenes/ART_25686_0.JPG",
        "http://multibahia.com/imagenes/ART_25683_0.JPG",
        "http://multibahia.com/imagenes/ART_25685_0.JPG",
    ],
    category:"Smartwatch",
  },
  {
    id:81,
    name:"Malla Nylon Velcro Loop 20mm",
    price:6100,
    description:"Malla de nylon uniloop con velcro de 4 ajustes apta para medidas de 20/22MM.",
    image:"http://multibahia.com/imagenes/ART_25705_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25705_0.JPG",
        "http://multibahia.com/imagenes/ART_25704_0.JPG",
        "http://multibahia.com/imagenes/ART_25701_0.JPG",
        "http://multibahia.com/imagenes/ART_25702_0.JPG",
    ],
    category:"Smartwatch",
  },
  {
    id:82,
    name:"Malla Sport Silicone 22mm",
    price:4830,
    description:"Correa genérica de silicona tradicional estilo Sport de Nike con cierre de 1 pin. Compatible con medidas de 20/22MM",
    image:"http://multibahia.com/imagenes/ART_25673_0.JPG",
    images:["http://multibahia.com/imagenes/ART_25673_0.JPG",
    ],
    category:"Smartwatch",
  },
  {
    id:83,
    name:"Malla Silicona para Smartband M3/M4",
    price:2650,
    description:"MALLA SILICONA PARA SMARTBAND M3 / M4 COLORES VARIOS",
    image:"http://multibahia.com/imagenes/ART_MAM3M4_0.jpg",
    images:["http://multibahia.com/imagenes/ART_MAM3M4_0.jpg",
    ],
    category:"Smartwatch",
  },
  {
    id:84,
    name:"Malla Silicona para Smartband M5/M6/M7",
    price:2650,
    description:"MALLA SILICONA PARA SMARTBAND M5 / M6 / M7 COLORES VARIOS",
    image:"http://multibahia.com/imagenes/ART_MAM3M4_0.jpg",
    images:["http://multibahia.com/imagenes/ART_MAM3M4_0.jpg",
    ],
    category:"Smartwatch",
  },
  {
    id:85,
    name:"Smartband M6 Suono Blue",
    price:11170,
    description:"Pulsera inteligente con pantalla táctil y parlante integrado. Mide pasos, calorías, sueño, frecuencia cardíaca, presión, oxígeno y humedad. Responde llamadas, tiene despertador y alerta anti pérdida. Resistente al agua (IP67). Compatible con Android 5.0+ e iOS 9.0+.",
    image:"http://multibahia.com/imagenes/ART_731299173556_0.JPG",
    images:["http://multibahia.com/imagenes/ART_731299173556_0.JPG",
      "http://multibahia.com/imagenes/ART_731299173556_1.JPG",
      "http://multibahia.com/imagenes/ART_731299173556_2.JPG"
    ],
    category:"Smartwatch",
  },
  {
    id:86,
    name:"AURICULARES TWS + SMART WATCH MALIBU K2 - INCLUYE 7 MALLAS",
    price:62900,
    description:"Set de Reloj Smartwatch. Incluye Auriculares tipo earpod y caja de carga con luces led . Incluye 7 correas para el reloj. Cargador magnetico. El Smartwatch es de ultima generación con bateria de larga duración, interfase touch rapida. Monitor deportivo, medidor de salud, Calendario, monitor de sueño. Recibe llamadas y mensajes con microfono incorporado",
    image:"http://multibahia.com/imagenes/ART_K2_0.JPG",
    images:["http://multibahia.com/imagenes/ART_K2_0.JPG",
      "http://multibahia.com/imagenes/ART_731299173556_1.JPG",
      "http://multibahia.com/imagenes/ART_K2_1.JPG",
      "http://multibahia.com/imagenes/ART_K2_3.JPG"
    ],
    category:"Smartwatch",
  },
{
    id:87,
    name:"AURICULARES TWS + SMART WATCH T55 ULTRA MAX AZUL/BLANCO/NEGRO",
    price:27150,
    description:"Smartwatch T55 Ultra Max Negro + Auricular In-Ear Bluetooth. Incluye dos mallas de silicona (49 mm) y auriculares Watch 8. Pantalla táctil de 1,44” (280x280), llamadas por Bluetooth, monitoreo de sueño, pasos, calorías, frecuencia cardíaca y presión arterial. Recibe notificaciones de llamadas, SMS, WhatsApp, etc. Batería de 320 mAh, dura 1 a 3 días. Memoria: 196 KB RAM / 1 MB + 64 MB ROM.Carga en 2-3 horas.",
    image:"http://multibahia.com/imagenes/ART_ULTRAT55AZ_0.JPG",
    images:["http://multibahia.com/imagenes/ART_ULTRAT55AZ_0.JPG",
      "http://multibahia.com/imagenes/ART_ULTRAT55AZ_1.JPG",
      "http://multibahia.com/imagenes/ART_ULTRAT55AZ_2.JPG",
      "http://multibahia.com/imagenes/ART_ULTRAT55AZ_3.JPG"
    ],
    category:"Smartwatch",
  },
  {
    id:88,
    name:"SMART WATCH K850 ULTRA DOBLE PULSO",
    price:34540,
    description:"Smart Watch K850 Ultra Doble Pulso 2.08  HD - Negro. Reloj inteligente con pantalla HD de 2.08” y doble sensor de pulso. Mide frecuencia cardíaca, sueño, pasos y calorías. Permite recibir notificaciones, llamadas y controlar música por Bluetooth. Diseño moderno ideal para uso diario o deportivo.",
    image:"http://multibahia.com/imagenes/ART_EC100338N._0.JPG",
    images:["http://multibahia.com/imagenes/ART_EC100338N._0.JPG",
      "http://multibahia.com/imagenes/ART_EC100338N._1.JPG",
    ],
    category:"Smartwatch",
  },
  {
    id:89,
    name:"SMART WATCH M9 ULTRA 2 COLORES VARIOS",
    price:43660,
    description:"Smartwatch M9 Ultra 2 Pantalla táctil HD y diseño resistente al agua. Monitorea ritmo cardíaco, sueño y pasos. Recibe notificaciones de llamadas, mensajes y apps vía Bluetooth. Batería de hasta 10 días. Ideal para deporte y mantenerse conectado sin usar el celular.",
    image:"http://multibahia.com/imagenes/ART_REL-GGM9ULTRA_0.JPG",
    images:["http://multibahia.com/imagenes/ART_REL-GGM9ULTRA_0.JPG",
      "http://multibahia.com/imagenes/ART_REL-GGM9ULTRA_1.JPG",
      "http://multibahia.com/imagenes/ART_REL-GGM9ULTRA_2.JPG",
      "http://multibahia.com/imagenes/ART_REL-GGM9ULTRA_3.JPG",
    ],
    category:"Smartwatch",
  },
  {
    id:90,
    name:"CABLE IPHONE 1.00 MTS - APPLE CABLE USB-C TO LIGHTNING",
    price:3200,
    description:"Modelo del cable: USB- C a Lightning",
    image:"http://multibahia.com/imagenes/ART_400-0062_0.jpg",
    images:["http://multibahia.com/imagenes/ART_400-0062_0.jpg",
    ],
    category:"Cables",
  },
  {
    id:91,
    name:"CABLE IPHONE 1.00 MTS - KARSEN C-301 4.2A - USB-C TO LIGHTNING",
    price:2950,
    description:"CABLE IPHONE 1M - KARSEN C-301 - USB C a Lightning",
    image:"http://multibahia.com/imagenes/ART_1326_0.JPG",
    images:["http://multibahia.com/imagenes/ART_1326_1.JPG",
      "http://multibahia.com/imagenes/ART_1326_2.JPG"
    ],
    category:"Cables",
  },
  {
    id:92,
    name:"CABLE IPHONE 2.00 MTS - APPLE CABLE USB-A TO LIGHTNING",
    price:3740,
    description:"Largo de 2mt. Compatible con todos los dispositivos Apple con salida Lightning",
    image:"http://multibahia.com/imagenes/ART_CA-GGCH6_0.JPG",
    images:["http://multibahia.com/imagenes/ART_CA-GGCH6_0.JPG",
      "http://multibahia.com/imagenes/ART_CA-GGCH6_1.JPG"
    ],
    category:"Cables",
  },
  {
    id:93,
    name:"CABLE IPHONE 1.00 MTS - LDNIO",
    price:3640,
    description:"Largo de 1mt. Compatible con todos los dispositivos Apple con salida Lightning",
    image:"http://multibahia.com/imagenes/ART_6933138611081_0.JPG",
    images:["http://multibahia.com/imagenes/ART_6933138611081_1.JPG",
      "http://multibahia.com/imagenes/ART_6933138611081_2.JPG",
      "http://multibahia.com/imagenes/ART_6933138611081_4.JPG"
    ],
    category:"Cables",
  },
  {
    id:94,
    name:"CABLE TYPE C 1.00 MTS - AITECH 60A TIPO C A TIPO C",
    price:4980,
    description:"Largo de 1mt. Compatible con todos los dispositivos Apple. Entrada y Salida USB C",
    image:"http://multibahia.com/imagenes/ART_AICA181413B_0.JPG",
    images:["http://multibahia.com/imagenes/ART_AICA181413B_0.JPG",
      "http://multibahia.com/imagenes/ART_AICA181413B_1.JPG",
      "http://multibahia.com/imagenes/ART_AICA181413B_2.JPG"
    ],
    category:"Cables",
  },
  {
    id:95,
    name:"CABLE TYPE C 1.00 MTS - AITECH SÚPER RÁPIDO 7A TIPO C A TIPO C ",
    price:4980,
    description:"Largo de 1mt. Compatible con todos los dispositivos Apple. Entrada y Salida USB C",
    image:"http://multibahia.com/imagenes/ART_AICA181411N_0.JPG",
    images:["http://multibahia.com/imagenes/ART_AICA181411N_0.JPG",
      "http://multibahia.com/imagenes/ART_AICA181411N_1.JPG",
      "http://multibahia.com/imagenes/ART_AICA181411N_2.JPG"
    ],
    category:"Cables",
  },
  {
    id:96,
    name:"CABLE TYPE C 1.00 MTS - APPLE CABLE USB-C TO USB-C ",
    price:4980,
    description:"Largo de 1mt. Compatible con todos los dispositivos Apple. Entrada y Salida USB C",
    image:"http://multibahia.com/imagenes/ART_CABLECAC_0.JPG",
    images:["http://multibahia.com/imagenes/ART_CABLECAC_0.JPG",
      "http://multibahia.com/imagenes/ART_CABLECAC_1.JPG"
    ],
    category:"Cables",
  },
  {
    id:97,
    name:"CABLE TYPE C 1.00 MTS - KARSEN ",
    price:2680,
    description:"Largo de 1mt. Entrada USB-A y Salida USB-C",
    image:"http://multibahia.com/imagenes/ART_1066_0.JPG",
    images:["http://multibahia.com/imagenes/ART_1066_0.JPG",
      "http://multibahia.com/imagenes/ART_1066_2.JPG",
      "http://multibahia.com/imagenes/ART_1067_0.JPG",
      "http://multibahia.com/imagenes/ART_1067_2.JPG"
    ],
    category:"Cables",
  },
  {
    id:98,
    name:"CABLE TYPE C / TYPE C 1.00 MTS - KARSEN ",
    price:2680,
    description:"Largo de 1mt. Entrada y Salida USB-C",
    image:"http://multibahia.com/imagenes/ART_1318_0.JPG",
    images:["http://multibahia.com/imagenes/ART_1318_0.JPG",
      "http://multibahia.com/imagenes/ART_1066_2.JPG",
      "http://multibahia.com/imagenes/ART_1318_1.JPG",
      "http://multibahia.com/imagenes/ART_1318_3.JPG"
    ],
    category:"Cables",
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
function createCategoryButtons() {
    const container = document.getElementById('category-buttons');

    // Extrae categorías únicas y las ordena alfabéticamente
    const categories = [...new Set(products.map(p => p.category))]
        .filter(Boolean) // elimina categorías vacías o undefined
        .sort((a, b) => a.localeCompare(b));

    categories.unshift('all'); // Agrega "all" al principio

    container.innerHTML = ''; // Limpia contenedor

    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category === 'all' ? 'Todos' : category;
        button.className = 'category-btn';
        button.onclick = (event) => {
            filterProducts(category);
            // Actualizar botones activos (esto mueve la lógica desde filterProducts)
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active-category');
            });
            event.target.classList.add('active-category');
        };
        container.appendChild(button);
    });
}
window.onload = () => {
    createCategoryButtons();
    initProducts();
};

        // Inicializar productos con filtro
function initProducts(category = 'all') {
    const productList = document.getElementById('product-list');

    const filteredProducts = category === 'all' 
        ? [...products].sort((a, b) => a.name.localeCompare(b.name))
        : [...products]
            .filter(p => p.category === category)
            .sort((a, b) => a.name.localeCompare(b.name));

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
    