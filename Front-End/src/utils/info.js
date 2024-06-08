import {
  albañileria,
  carpinteria,
  cerrajeria,
  climatizacion,
  gas,
  herreria,
  jardineria,
  limpieza,
  mail,
  mudanza,
  pintura,
  plomeria,
  reparaciones,
} from "../utils/icons";

import grupo1 from "../../public/images/grupo1.png";
import grupo2 from "../../public/images/grupo2.png";
import grupo3 from "../../public/images/grupo3.png";
import avatar from "../../public/images/avatar.png";
import avatar2 from "../../public/images/avatar2.png";
import avatar3 from "../../public/images/avatar3.png";

export const apiUrl = "https://jobapp-backend-5upd.onrender.com/api/v1";
export let categorys = [
  {
    icon: plomeria,
    category: "Plomería",
  },
  {
    icon: gas,
    category: "Gasista",
  },
  {
    icon: carpinteria,
    category: "Carpintero",
  },

  {
    icon: reparaciones,
    category: "Reparaciones Generales",
  },
  {
    icon: cerrajeria,
    category: "Cerrajería",
  },
  // {
  //   icon: mudanza,
  //   category: "Mudanza y Transporte",
  // },
  {
    icon: jardineria,
    category: "Jardineria y Paisajismo",
  },
  {
    icon: albañileria,
    category: "Albañilería",
  },
  {
    icon: climatizacion,
    category: "Climatización y Refrigeración",
  },
  {
    icon: herreria,
    category: "Herrería",
  },
  {
    icon: limpieza,
    category: "Limpieza y Mantenimiento",
  },
  // {
  //   icon: pintura,
  //   category: "Pintura",
  // },
];

export const infoOfApp = [
  {
    img: grupo1,
    title: " Dinos que necesitas",
    text: " Explora las categorías y cuéntanos tu necesidad. Nosotros lo compartiremos con profesionales recomendados que te ayudarán a resolver los arreglos en tu hogar.",
  },
  {
    img: grupo2,
    title: "Elige entre cientos de profesionales",
    text: "Podrás elegir entre personal calificado dentro de tu zona que te asesorarán en lo que necesites.",
  },
  {
    img: grupo3,
    title: "Elige entre cientos de profesionales",
    text: "Cuando tengas toda la información, contrata de manera directa sin intermediarios ni sobrecostos.",
  },
];

export const calificationsOfApp = [
  {
    img: avatar,
    userName: "Noemí Gomez",
    commentary:
      "Encontré un excelente carpintero a través de JobMatch que transformó mi cocina. El proceso fue simple y pude ver opiniones de otros clientes antes de elegir.",
    calification: 5,
  },
  {
    img: avatar2,
    userName: "Maros Ferro",
    commentary:
      "Publicar mi necesidad de una reparación eléctrica fue muy sencillo, y en poco tiempo recibí varias propuestas de profesionales calificados.",
    calification: 5,
  },
  {
    img: avatar3,
    userName: "Luis Buonanote",
    commentary:
      "JobMatch me permitió expandir mi negocio. Ahora tengo una base constante de clientes y puedo gestionar mis trabajos de manera más eficiente.",
    calification: 0,
  },
];

export const zonas_caba = [
  "Agronomía",
  "Almagro",
  "Balvanera",
  "Barracas",
  "Belgrano",
  "Boedo",
  "Caballito",
  "Chacarita",
  "Coghlan",
  "Colegiales",
  "Constitución",
  "Flores",
  "Floresta",
  "La Boca",
  "La Paternal",
  "Liniers",
  "Mataderos",
  "Monte Castro",
  "Monserrat",
  "Nueva Pompeya",
  "Núñez",
  "Palermo",
  "Parque Avellaneda",
  "Parque Chacabuco",
  "Parque Chas",
  "Parque Patricios",
  "Puerto Madero",
  "Recoleta",
  "Retiro",
  "Saavedra",
  "San Cristóbal",
  "San Nicolás",
  "San Telmo",
  "Vélez Sársfield",
  "Versalles",
  "Villa Crespo",
  "Villa del Parque",
  "Villa Devoto",
  "Villa Gral. Mitre",
  "Villa Lugano",
  "Villa Luro",
  "Villa Ortúzar",
  "Villa Pueyrredón",
  "Villa Real",
  "Villa Riachuelo",
  "Villa Santa Rita",
  "Villa Soldati",
  "Villa Urquiza",
];

export const publicaciones = {
  Plomería: [
    {
      _id: 1,
      latitude: -34.6123,
      longitude: -58.3778,
      color: "#3498db",
      zone: "Recoleta",
      category: "Plomería",
      description:
        "Servicio de plomería integral, destapaciones, reparaciones y mantenimiento",
      userData: {
        _id: 1,
        name: "Carlos Pérez",
        mail: "carlosp@plomeros.com",
        phone: "98765432",
        availability: "8:00 AM a 6:00 PM",
        rating: [5, 4, 4, 5],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.6179,
      longitude: -58.4456,
      color: "#2ecc71",
      zone: "Palermo",
      category: "Plomería",
      description: "Instalaciones de agua y gas, reparación de cañerías",
      userData: {
        _id: 2,
        name: "Miguel Gómez",
        mail: "miguelg@plomeros.com",
        phone: "87654321",
        availability: "9:00 AM a 5:00 PM",
        rating: [5, 5, 3, 4],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.6081,
      longitude: -58.4196,
      color: "#e74c3c",
      zone: "Belgrano",
      category: "Plomería",
      description: "Plomería de emergencia 24 horas, reparaciones rápidas",
      userData: {
        _id: 3,
        name: "Juan Martínez",
        mail: "juanmartinez@plomeros.com",
        phone: "76543210",
        availability: "24 horas",
        rating: [4, 4, 5, 4],
        img: null,
      },
    },
  ],
  Gasista: [
    {
      _id: 1,
      latitude: -34.6600786,
      longitude: -58.5031222,
      color: "#f84d4d",
      zone: "Balvanera",
      category: "Gasista",
      description:
        "Gasista matriculado, arreglos, instalaciones, pruebas de artefactos",
      userData: {
        _id: 1,
        name: "Lautaro Ríos",
        mail: "lautaror@procrew.ar",
        phone: "12345678",
        availability: "9:00 AM a 5:00 PM",
        rating: [1, 4, 5, 3],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.6246,
      longitude: -58.4703,
      color: "#f1c40f",
      zone: "Caballito",
      category: "Gasista",
      description:
        "Instalación y mantenimiento de sistemas de gas domiciliarios",
      userData: {
        _id: 2,
        name: "Jorge Fernández",
        mail: "jorgef@gasistas.com",
        phone: "23456789",
        availability: "8:00 AM a 6:00 PM",
        rating: [5, 4, 5, 4],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.6022,
      longitude: -58.4127,
      color: "#e67e22",
      zone: "Almagro",
      category: "Gasista",
      description:
        "Reparación de fugas de gas, instalaciones de cocinas y calefones",
      userData: {
        _id: 3,
        name: "Federico López",
        mail: "federicol@gasistas.com",
        phone: "34567890",
        availability: "9:00 AM a 7:00 PM",
        rating: [5, 5, 4, 3],
        img: null,
      },
    },
  ],
  Carpintero: [
    {
      _id: 1,
      latitude: -34.6298,
      longitude: -58.4367,
      color: "#1abc9c",
      zone: "Flores",
      category: "Carpintero",
      description:
        "Muebles a medida, reparación y restauración de muebles antiguos",
      userData: {
        _id: 1,
        name: "Roberto Sánchez",
        mail: "robertos@carpinteros.com",
        phone: "45678901",
        availability: "9:00 AM a 5:00 PM",
        rating: [5, 4, 4, 4],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.6055,
      longitude: -58.43,
      color: "#9b59b6",
      zone: "San Telmo",
      category: "Carpintero",
      description: "Reparaciones de puertas y ventanas, fabricación de muebles",
      userData: {
        _id: 2,
        name: "Martín Rodríguez",
        mail: "martinr@carpinteros.com",
        phone: "56789012",
        availability: "10:00 AM a 6:00 PM",
        rating: [5, 3, 4, 5],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.6123,
      longitude: -58.4256,
      color: "#34495e",
      zone: "Retiro",
      category: "Carpintero",
      description: "Montaje de estructuras de madera, restauración de pisos",
      userData: {
        _id: 3,
        name: "Santiago López",
        mail: "santiagol@carpinteros.com",
        phone: "67890123",
        availability: "8:00 AM a 4:00 PM",
        rating: [4, 5, 5, 3],
        img: null,
      },
    },
  ],
  "Reparaciones Generales": [
    {
      _id: 1,
      latitude: -34.5982,
      longitude: -58.4199,
      color: "#d35400",
      zone: "Villa Crespo",
      category: "Reparaciones Generales",
      description:
        "Servicios de reparación y mantenimiento general en el hogar",
      userData: {
        _id: 1,
        name: "Lucas Pérez",
        mail: "lucasp@reparaciones.com",
        phone: "78901234",
        availability: "8:00 AM a 5:00 PM",
        rating: [5, 4, 4, 3],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.5864,
      longitude: -58.4455,
      color: "#c0392b",
      zone: "Chacarita",
      category: "Reparaciones Generales",
      description: "Reparaciones eléctricas, plomería y carpintería",
      userData: {
        _id: 2,
        name: "Andrés Gómez",
        mail: "andresg@reparaciones.com",
        phone: "89012345",
        availability: "9:00 AM a 6:00 PM",
        rating: [4, 5, 3, 4],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.5721,
      longitude: -58.4381,
      color: "#8e44ad",
      zone: "Villa Urquiza",
      category: "Reparaciones Generales",
      description: "Servicios de reparación rápida y económica",
      userData: {
        _id: 3,
        name: "Emiliano Ruiz",
        mail: "emilianor@reparaciones.com",
        phone: "90123456",
        availability: "8:00 AM a 7:00 PM",
        rating: [5, 4, 4, 5],
        img: null,
      },
    },
  ],
  Cerrajería: [
    {
      _id: 1,
      latitude: -34.5906,
      longitude: -58.4104,
      color: "#2980b9",
      zone: "Constitución",
      category: "Cerrajería",
      description:
        "Apertura de puertas, cambio de cerraduras, copias de llaves",
      userData: {
        _id: 1,
        name: "Alberto González",
        mail: "albertog@cerrajeria.com",
        phone: "01234567",
        availability: "24 horas",
        rating: [5, 4, 5, 4],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.5731,
      longitude: -58.4612,
      color: "#27ae60",
      zone: "Barracas",
      category: "Cerrajería",
      description:
        "Instalación de sistemas de seguridad, reparación de cerraduras",
      userData: {
        _id: 2,
        name: "Daniel Ruiz",
        mail: "danielr@cerrajeria.com",
        phone: "02345678",
        availability: "8:00 AM a 6:00 PM",
        rating: [4, 5, 4, 3],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.5821,
      longitude: -58.3956,
      color: "#8e44ad",
      zone: "San Cristóbal",
      category: "Cerrajería",
      description: "Reparación de cerraduras electrónicas, apertura de autos",
      userData: {
        _id: 3,
        name: "Gustavo Pérez",
        mail: "gustavop@cerrajeria.com",
        phone: "03456789",
        availability: "9:00 AM a 9:00 PM",
        rating: [5, 5, 3, 4],
        img: null,
      },
    },
  ],
  "Mudanza y Transporte": [
    {
      _id: 1,
      latitude: -34.6073,
      longitude: -58.3952,
      color: "#f39c12",
      zone: "Balvanera",
      category: "Mudanza y Transporte",
      description:
        "Servicio de mudanzas locales y nacionales, embalaje de pertenencias",
      userData: {
        _id: 1,
        name: "Ricardo Mendoza",
        mail: "ricardom@mudanzas.com",
        phone: "09876543",
        availability: "8:00 AM a 8:00 PM",
        rating: [4, 4, 5, 5],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.5845,
      longitude: -58.4046,
      color: "#c0392b",
      zone: "Almagro",
      category: "Mudanza y Transporte",
      description: "Transporte de cargas pesadas, servicio de grúa",
      userData: {
        _id: 2,
        name: "Ernesto Gómez",
        mail: "ernestog@mudanzas.com",
        phone: "10987654",
        availability: "7:00 AM a 7:00 PM",
        rating: [5, 4, 4, 4],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.5951,
      longitude: -58.4133,
      color: "#16a085",
      zone: "Palermo",
      category: "Mudanza y Transporte",
      description: "Mudanzas express, embalaje y desempaque",
      userData: {
        _id: 3,
        name: "Alejandro López",
        mail: "alejandrol@mudanzas.com",
        phone: "21098765",
        availability: "9:00 AM a 6:00 PM",
        rating: [5, 5, 4, 5],
        img: null,
      },
    },
  ],
  "Jardineria y Paisajismo": [
    {
      _id: 1,
      latitude: -34.5783,
      longitude: -58.4224,
      color: "#27ae60",
      zone: "Saavedra",
      category: "Jardinería y Paisajismo",
      description: "Diseño y mantenimiento de jardines, poda de árboles",
      userData: {
        _id: 1,
        name: "Carlos Domínguez",
        mail: "carlosd@jardineria.com",
        phone: "32109876",
        availability: "8:00 AM a 5:00 PM",
        rating: [4, 4, 5, 5],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.5914,
      longitude: -58.3923,
      color: "#2980b9",
      zone: "Parque Chas",
      category: "Jardinería y Paisajismo",
      description: "Instalación de sistemas de riego, diseño de paisajismo",
      userData: {
        _id: 2,
        name: "Sergio Rivas",
        mail: "sergior@jardineria.com",
        phone: "43210987",
        availability: "9:00 AM a 6:00 PM",
        rating: [5, 4, 4, 4],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.5876,
      longitude: -58.4057,
      color: "#16a085",
      zone: "Colegiales",
      category: "Jardinería y Paisajismo",
      description: "Mantenimiento de espacios verdes, diseño de jardines",
      userData: {
        _id: 3,
        name: "Luis Torres",
        mail: "luist@jardineria.com",
        phone: "54321098",
        availability: "10:00 AM a 4:00 PM",
        rating: [4, 5, 5, 3],
        img: null,
      },
    },
  ],
  Albañilería: [
    {
      _id: 1,
      latitude: -34.5765,
      longitude: -58.4178,
      color: "#c0392b",
      zone: "Villa del Parque",
      category: "Albañilería",
      description:
        "Construcción y reformas de viviendas, trabajos de albañilería en general",
      userData: {
        _id: 1,
        name: "Hernán Díaz",
        mail: "hernand@albañileria.com",
        phone: "65432109",
        availability: "7:00 AM a 5:00 PM",
        rating: [5, 4, 4, 5],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.5884,
      longitude: -58.4239,
      color: "#27ae60",
      zone: "Villa Devoto",
      category: "Albañilería",
      description: "Trabajos de mampostería, colocación de revestimientos",
      userData: {
        _id: 2,
        name: "Javier Gutiérrez",
        mail: "javierg@albañileria.com",
        phone: "76543210",
        availability: "8:00 AM a 4:00 PM",
        rating: [4, 5, 4, 3],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.5832,
      longitude: -58.4195,
      color: "#8e44ad",
      zone: "Villa Lugano",
      category: "Albañilería",
      description: "Reformas de cocinas y baños, construcción de muros",
      userData: {
        _id: 3,
        name: "Fernando López",
        mail: "fernandol@albañileria.com",
        phone: "87654321",
        availability: "9:00 AM a 5:00 PM",
        rating: [5, 3, 4, 5],
        img: null,
      },
    },
  ],
  "Climatización y Refrigeración": [
    {
      _id: 1,
      latitude: -34.5901,
      longitude: -58.3977,
      color: "#3498db",
      zone: "Caballito",
      category: "Climatización y Refrigeración",
      description:
        "Instalación y mantenimiento de aires acondicionados y calefacción",
      userData: {
        _id: 1,
        name: "Alejandro Vega",
        mail: "alejandrov@climatizacion.com",
        phone: "98765432",
        availability: "9:00 AM a 6:00 PM",
        rating: [5, 4, 4, 4],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.6012,
      longitude: -58.4114,
      color: "#1abc9c",
      zone: "Boedo",
      category: "Climatización y Refrigeración",
      description:
        "Reparación de sistemas de refrigeración industrial y comercial",
      userData: {
        _id: 2,
        name: "Fernando Álvarez",
        mail: "fernandoa@climatizacion.com",
        phone: "87654321",
        availability: "8:00 AM a 5:00 PM",
        rating: [4, 5, 4, 5],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.5992,
      longitude: -58.4213,
      color: "#e67e22",
      zone: "Mataderos",
      category: "Climatización y Refrigeración",
      description:
        "Servicio técnico de aires acondicionados, mantenimiento preventivo",
      userData: {
        _id: 3,
        name: "Sergio Ramos",
        mail: "sergior@climatizacion.com",
        phone: "76543210",
        availability: "10:00 AM a 7:00 PM",
        rating: [5, 4, 3, 4],
        img: null,
      },
    },
  ],
  Herrería: [
    {
      _id: 1,
      latitude: -34.6048,
      longitude: -58.4186,
      color: "#34495e",
      zone: "Parque Patricios",
      category: "Herrería",
      description: "Trabajos en hierro y acero inoxidable, rejas, portones",
      userData: {
        _id: 1,
        name: "Oscar Fernández",
        mail: "oscarf@herreria.com",
        phone: "65432109",
        availability: "8:00 AM a 6:00 PM",
        rating: [5, 4, 4, 5],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.5909,
      longitude: -58.4235,
      color: "#27ae60",
      zone: "Villa Urquiza",
      category: "Herrería",
      description: "Diseño y fabricación de estructuras metálicas, barandas",
      userData: {
        _id: 2,
        name: "Mario García",
        mail: "mariog@herreria.com",
        phone: "76543210",
        availability: "9:00 AM a 5:00 PM",
        rating: [4, 5, 4, 3],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.5833,
      longitude: -58.4116,
      color: "#c0392b",
      zone: "Villa Crespo",
      category: "Herrería",
      description:
        "Reparación de estructuras metálicas, fabricación de muebles metálicos",
      userData: {
        _id: 3,
        name: "Pablo Díaz",
        mail: "pablod@herreria.com",
        phone: "87654321",
        availability: "10:00 AM a 7:00 PM",
        rating: [5, 3, 4, 4],
        img: null,
      },
    },
  ],
  "Limpieza y Mantenimiento": [
    {
      _id: 1,
      latitude: -34.5862,
      longitude: -58.4239,
      color: "#3498db",
      zone: "Villa Devoto",
      category: "Limpieza y Mantenimiento",
      description:
        "Servicio de limpieza residencial y comercial, mantenimiento de edificios",
      userData: {
        _id: 1,
        name: "Clara Torres",
        mail: "clarat@limpieza.com",
        phone: "54321098",
        availability: "8:00 AM a 4:00 PM",
        rating: [5, 4, 4, 5],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.5763,
      longitude: -58.4347,
      color: "#1abc9c",
      zone: "Belgrano",
      category: "Limpieza y Mantenimiento",
      description:
        "Mantenimiento de oficinas, limpieza profunda de espacios comerciales",
      userData: {
        _id: 2,
        name: "Marta López",
        mail: "martal@limpieza.com",
        phone: "65432109",
        availability: "9:00 AM a 5:00 PM",
        rating: [4, 5, 4, 3],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.5912,
      longitude: -58.4048,
      color: "#e67e22",
      zone: "Almagro",
      category: "Limpieza y Mantenimiento",
      description:
        "Limpieza de alfombras y tapizados, mantenimiento de jardines",
      userData: {
        _id: 3,
        name: "Andrea García",
        mail: "andreag@limpieza.com",
        phone: "76543210",
        availability: "10:00 AM a 6:00 PM",
        rating: [5, 4, 3, 4],
        img: null,
      },
    },
  ],
  Pintura: [
    {
      _id: 1,
      latitude: -34.5958,
      longitude: -58.4339,
      color: "#2980b9",
      zone: "Núñez",
      category: "Pintura",
      description: "Pintura interior y exterior, trabajos en altura",
      userData: {
        _id: 1,
        name: "Ricardo Díaz",
        mail: "ricardod@pintura.com",
        phone: "98765432",
        availability: "8:00 AM a 5:00 PM",
        rating: [4, 5, 4, 4],
        img: null,
      },
    },
    {
      _id: 2,
      latitude: -34.5894,
      longitude: -58.4294,
      color: "#27ae60",
      zone: "Villa del Parque",
      category: "Pintura",
      description: "Revestimientos y pintura decorativa, impermeabilización",
      userData: {
        _id: 2,
        name: "Federico Sánchez",
        mail: "federicos@pintura.com",
        phone: "87654321",
        availability: "9:00 AM a 6:00 PM",
        rating: [5, 4, 5, 3],
        img: null,
      },
    },
    {
      _id: 3,
      latitude: -34.5932,
      longitude: -58.4019,
      color: "#8e44ad",
      zone: "Chacarita",
      category: "Pintura",
      description:
        "Pintura de obra nueva y remodelaciones, reparación de humedad",
      userData: {
        _id: 3,
        name: "Mauricio López",
        mail: "mauriciol@pintura.com",
        phone: "76543210",
        availability: "10:00 AM a 7:00 PM",
        rating: [5, 3, 4, 5],
        img: null,
      },
    },
  ],
};
