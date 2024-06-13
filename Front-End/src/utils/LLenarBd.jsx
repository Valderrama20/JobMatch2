import axios from "axios";
import { fetchDataApi } from "../services/apiService";
import { methods, publicaciones } from "./info";

// creado para llenar bd con informacion

export default function Llenarbs() {
  const loginUsers = () => {
    usersAndPublications.forEach(async (e) => {
      let dataUser = {
        email: e.email,
        password: e.password,
      };

      let login = await fetchDataApi("/users/login", methods.POST, dataUser);
      if (login.ok) {
        console.log("user logueado");
        createPublication(e.publication, createUser.data.user.id);
      }
    });
  };

  let createPublication = (publication, id) => {
    publication.forEach(async (e) => {
      try {
        await axios.post(
          `https://jobapp-backend-ptoc.onrender.com/api/v1/publications`,
          { ...e, userId: id }
        );
        console.log("publicacion creada correctamente");
      } catch (error) {
        console.error("no se creo la publicacion");
      }
    });
  };
  return (
    <div>
      <button onClick={loginUsers}>Llenar Bd</button>
    </div>
  );
}

let usersAndPublications = [
  {
    name: "Estefani",
    email: "estefani@gmail.com",
    phone: "1173682744",
    password: "1234",
    availability: "full-time 10:00",
    rating: 5,
    description:
      "Estefani es una profesional comprometida y dedicada, con amplia experiencia en su área. Ofrece servicios de calidad y atención personalizada.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    publication: [
      {
        latitude: -34.6037,
        longitude: -58.3816,
        description:
          "Instalación y reparación de cañerías y grifos en Palermo.",
        category: "Plomería",
        zone: "Palermo",
      },
      {
        latitude: -34.6113,
        longitude: -58.4385,
        description:
          "Mantenimiento y reparación de sistemas de calefacción y aire acondicionado en Recoleta.",
        category: "Climatización y Refrigeración",
        zone: "Recoleta",
      },
      {
        latitude: -34.6031,
        longitude: -58.4421,
        description:
          "Servicio de cerrajería 24 horas, apertura de puertas y cambio de cerraduras en el centro de Buenos Aires.",
        category: "Cerrajería",
        zone: "Centro",
      },
    ],
  },
  {
    name: "Juan",
    email: "juan@gmail.com",
    phone: "1165489273",
    password: "abcd123",
    availability: "part-time 15:00",
    rating: 3,
    description:
      "Juan es un carpintero con habilidades excepcionales en diseño y fabricación de muebles a medida. Su compromiso con la calidad lo distingue en el mercado.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    publication: [
      {
        latitude: -34.6037,
        longitude: -58.3816,
        description:
          "Diseño y fabricación de muebles de madera a medida en Palermo.",
        category: "Carpintero",
        zone: "Palermo",
      },
      {
        latitude: -34.6118,
        longitude: -58.4173,
        description:
          "Reparación de instalaciones eléctricas y servicios generales de mantenimiento en Recoleta.",
        category: "Reparaciones Generales",
        zone: "Recoleta",
      },
      {
        latitude: -34.5983,
        longitude: -58.3761,
        description:
          "Instalación y mantenimiento de sistemas de riego y jardinería en Caballito.",
        category: "Jardineria y Paisajismo",
        zone: "Caballito",
      },
    ],
  },
  {
    name: "Ana",
    email: "ana@gmail.com",
    phone: "1156894321",
    password: "qwerty456",
    availability: "full-time 09:00",
    rating: 4,
    description:
      "Ana ofrece servicios de albañilería con atención personalizada y calidad garantizada. Especialista en construcción y reparación de estructuras.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    publication: [
      {
        latitude: -34.6027,
        longitude: -58.4204,
        description:
          "Construcción y reparación de muros y estructuras en Villa Crespo.",
        category: "Albañilería",
        zone: "Villa Crespo",
      },
      {
        latitude: -34.6142,
        longitude: -58.4275,
        description:
          "Reparación y mantenimiento de sistemas de refrigeración en Belgrano.",
        category: "Climatización y Refrigeración",
        zone: "Belgrano",
      },
      {
        latitude: -34.5972,
        longitude: -58.44,
        description:
          "Servicios de limpieza y mantenimiento integral en La Boca.",
        category: "Limpieza y Mantenimiento",
        zone: "La Boca",
      },
    ],
  },
  {
    name: "Pablo",
    email: "pablo@gmail.com",
    phone: "1167543209",
    password: "abcde789",
    availability: "part-time 14:00",
    rating: 2,
    description:
      "Pablo es especialista en reparaciones generales, ofreciendo soluciones rápidas y efectivas para problemas comunes en hogares y negocios.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    publication: [
      {
        latitude: -34.5991,
        longitude: -58.4138,
        description:
          "Servicios de limpieza y mantenimiento integral para hogares y oficinas en Barracas.",
        category: "Limpieza y Mantenimiento",
        zone: "Barracas",
      },
      {
        latitude: -34.5989,
        longitude: -58.4679,
        description:
          "Instalación y mantenimiento de sistemas de gas en Villa Lugano.",
        category: "Gasista",
        zone: "Villa Lugano",
      },
      {
        latitude: -34.5935,
        longitude: -58.4303,
        description:
          "Diseño y fabricación de estructuras metálicas y herrería en Villa Devoto.",
        category: "Herrería",
        zone: "Villa Devoto",
      },
    ],
  },
  {
    name: "Laura",
    email: "laura@gmail.com",
    phone: "1156789456",
    password: "qwerty123",
    availability: "full-time 08:00",
    rating: 5,
    description:
      "Laura se especializa en servicios de plomería, garantizando soluciones rápidas y eficientes para problemas de cañerías y grifos.",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    publication: [
      {
        latitude: -34.6108,
        longitude: -58.3917,
        description:
          "Reparación de instalaciones eléctricas y servicios generales de mantenimiento en Puerto Madero.",
        category: "Reparaciones Generales",
        zone: "Puerto Madero",
      },
      {
        latitude: -34.5923,
        longitude: -58.4281,
        description: "Mantenimiento de jardines y paisajismo en Villa Crespo.",
        category: "Jardineria y Paisajismo",
        zone: "Villa Crespo",
      },
      {
        latitude: -34.6056,
        longitude: -58.3686,
        description:
          "Instalación y mantenimiento de sistemas de climatización en San Cristóbal.",
        category: "Climatización y Refrigeración",
        zone: "San Cristóbal",
      },
    ],
  },
  {
    name: "Diego",
    email: "diego@gmail.com",
    phone: "1165237890",
    password: "abc456",
    availability: "part-time 13:00",
    rating: 4,
    description:
      "Diego ofrece servicios de reparaciones generales con enfoque en la calidad y satisfacción del cliente. Experiencia en múltiples áreas de mantenimiento.",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
    publication: [
      {
        latitude: -34.6015,
        longitude: -58.3775,
        description:
          "Instalación y mantenimiento de sistemas de calefacción en Palermo.",
        category: "Climatización y Refrigeración",
        zone: "Palermo",
      },
      {
        latitude: -34.5942,
        longitude: -58.4043,
        description:
          "Reparación y mantenimiento de estructuras metálicas y herrería en San Telmo.",
        category: "Herrería",
        zone: "San Telmo",
      },
      {
        latitude: -34.591,
        longitude: -58.433,
        description:
          "Servicios de carpintería y fabricación de muebles a medida en Colegiales.",
        category: "Carpintero",
        zone: "Colegiales",
      },
    ],
  },
  {
    name: "Carolina",
    email: "carolina@gmail.com",
    phone: "1156782345",
    password: "qwerty789",
    availability: "full-time 09:00",
    rating: 4,
    description:
      "Carolina ofrece servicios especializados en reparaciones eléctricas y mantenimiento general para hogares y negocios.",
    img: "https://randomuser.me/api/portraits/women/7.jpg",
    publication: [
      {
        latitude: -34.5994,
        longitude: -58.4412,
        description:
          "Reparación y mantenimiento de sistemas de climatización en La Boca.",
        category: "Climatización y Refrigeración",
        zone: "La Boca",
      },
      {
        latitude: -34.6036,
        longitude: -58.4059,
        description:
          "Instalación y reparación de sistemas de gas en Monserrat.",
        category: "Gasista",
        zone: "Monserrat",
      },
      {
        latitude: -34.6343,
        longitude: -58.4643,
        description:
          "Servicios de limpieza y mantenimiento para hogares en Villa Urquiza.",
        category: "Limpieza y Mantenimiento",
        zone: "Villa Urquiza",
      },
    ],
  },
  {
    name: "Martín",
    email: "martin@gmail.com",
    phone: "1167890123",
    password: "martin123",
    availability: "part-time 17:00",
    rating: 3,
    description:
      "Martín ofrece servicios de carpintería fina y restauración de muebles antiguos con un enfoque en la calidad y el detalle.",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
    publication: [
      {
        latitude: -34.5998,
        longitude: -58.4521,
        description:
          "Diseño y fabricación de muebles de madera a medida en Flores.",
        category: "Carpintero",
        zone: "Flores",
      },
      {
        latitude: -34.6161,
        longitude: -58.4427,
        description:
          "Reparación y mantenimiento de sistemas de riego en Villa del Parque.",
        category: "Jardineria y Paisajismo",
        zone: "Villa del Parque",
      },
      {
        latitude: -34.6324,
        longitude: -58.4808,
        description: "Servicios de herrería y reparaciones en Villa Ortúzar.",
        category: "Herrería",
        zone: "Villa Ortúzar",
      },
    ],
  },
  {
    name: "Lucía",
    email: "lucia@gmail.com",
    phone: "1154321098",
    password: "lucia456",
    availability: "full-time 08:00",
    rating: 5,
    description:
      "Lucía ofrece servicios de fontanería y reparación de sistemas hidráulicos con atención personalizada y eficiencia.",
    img: "https://randomuser.me/api/portraits/women/9.jpg",
    publication: [
      {
        latitude: -34.6021,
        longitude: -58.4444,
        description:
          "Instalación y reparación de sistemas de fontanería en Almagro.",
        category: "Plomería",
        zone: "Almagro",
      },
      {
        latitude: -34.6232,
        longitude: -58.466,
        description: "Mantenimiento de jardines y paisajismo en Villa Devoto.",
        category: "Jardineria y Paisajismo",
        zone: "Villa Devoto",
      },
      {
        latitude: -34.6429,
        longitude: -58.4711,
        description:
          "Reparación y mantenimiento de sistemas eléctricos en Villa Luro.",
        category: "Electricista",
        zone: "Villa Luro",
      },
    ],
  },
];
