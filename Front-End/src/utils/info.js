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

import img1 from "../../public/images/img.jpg";
import img2 from "../../public/images/img2.jpg";
import img3 from "../../public/images/img3.jpg";

export let categorys = [
  {
    icon: plomeria,
    category: "Plomeria",
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
    category: "Cerrajeria",
  },
  {
    icon: mudanza,
    category: "Mudanza y Trasporte",
  },
  {
    icon: jardineria,
    category: "Jardineria y paisajismo",
  },
  {
    icon: albañileria,
    category: "Albañileria",
  },
  {
    icon: climatizacion,
    category: "Climatizacion y refrigeracion",
  },
  {
    icon: herreria,
    category: "Herreria",
  },
  {
    icon: limpieza,
    category: "Limpieza y mantenimiento",
  },
  {
    icon: pintura,
    category: "Pintura",
  },
];

export const publicaciones = [
  {
    _id: 1,
    latitude: -34.6600786,
    longitude: -58.5031222,
    color: "#f84d4d",
    userData: {
      _id: 1,
      name: "Lautaro Ríos",
      mail: "lautaror@procrew.ar",
      Phone: "12345678",
      Availability: "9:00 AM a 5:00 PM",
      zone: "Balvanera",
      description:
        "Gasista matriculado, arreglos, instalaciones, pruebas de artefactos",
      Rating: [1, 4, 2.5, 3],
      category: "Gasista",
      img: img1,
    },

    // label: "Hot Chicken Takeover",
    //     tooltip: "5 stars",
    //     color: "#f84d4d",
  },
  {
    _id: 2,
    latitude: -34.6159245,
    longitude: -58.4406027,
    color: "#f84d4d",
    userData: {
      name: "Martín Palermo",
      zone: "Recoleta",
      description:
        "Gasista matriculado, arreglos, instalaciones, pruebas de artefactos",
      resumen: "",
      category: "Gasista",
      img: img2,
    },
  },
  {
    _id: 3,
    latitude: -34.5780655,
    longitude: -58.4265317,
    color: "#f84d4d",
    userData: {
      name: "Luis Franco",
      zone: "Barrio Norte",
      description:
        "Gasista matriculado, arreglos, instalaciones, pruebas de artefactos",
      resumen: "",
      category: "Gasista",
      img: img3,
    },
  },
];
