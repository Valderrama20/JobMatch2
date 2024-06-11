import { personIcon, campanaIcon } from "../../public/svg.jsx";
import Card from "../components/CardOfCategori.jsx";
import { categorys, methods } from "../utils/info.js";
import img4 from "../../public/images/img4.jpg";
import MarqueeDemo from "../components/Prueba.tsx";
import Carrusel from "../components/Carrusel.jsx";
import { useNavigate } from "react-router-dom";
import Autocomplete from "../components/AutocompleteInput.jsx";
import { useEffect } from "react";
import { publicationsAtom } from "../context/atoms.jsx";
import { useAtom } from "jotai";
import { fetchDataApi } from "../services/apiService.js";
function Home() {
  const [publications, setPublications] = useAtom(publicationsAtom);

  useEffect(() => {
    getPublicationsApi();
  }, []);

  let getPublicationsApi = async () => {
    let apiPublications = await fetchDataApi("/publications", methods.GET);
    if (apiPublications.ok) setPublications(apiPublications.data);
  };

  const navigate = useNavigate();
  return (
    <div className="w-screen h-full ">
      <nav className="flex w-full  py-5 items-center space-x-5 pl-10 pr-16">
        <h1 className="text-black font-extrabold text-xl">JOBMATCH</h1>
        <Autocomplete />

        <button
          onClick={() => navigate("profile/jose-garcia/1")}
          className="flex ml-5 p-2 rounded-full bg-[#004B19]"
        >
          {personIcon}
        </button>
      </nav>
      {/* intro*/}
      <div className="flex py-20  bgGradient">
        <div className="w-1/2 flex flex-col  justify-center px-10">
          <h2 className="font-bold text-5xl leading-tight mb-3">
            Buscá profesionales <br />
            por categoría o servicio
          </h2>
          <p className="text-[#a0a2aa]  text-xl leading-6 ">
            Encuentra profesionales verificados para realizar cualquier tarea
            del hogar, desde reparaciones menores hasta grandes proyectos, o
            regístrate para ofrecer tus servicios.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#FF3D00]  my-10 w-full py-3 text-white text-xl font-semibold rounded-lg transform hover:scale-105 transition-transform "
          >
            Registrate como profesional
          </button>
        </div>
        <div className="w-1/2 ">
          <img src={img4} alt="img4" className="w-10/12 h-10/12 " />
        </div>
      </div>
      {/* Categorias */}
      <div className="h-screen flex flex-col justify-center">
        <h3 className="font-bold text-center text-4xl">
          Transforma tu hogar con los mejores profesionales,
          <br /> a solo un click de distancia
        </h3>
        <div className="flex flex-wrap justify-center px-28">
          {categorys.map((e, i) => {
            return <Card data={e} key={i} />;
          })}
        </div>
      </div>
      {/* Explicacion de la Web */}
      <div className="flex h-screen justify-center items-center flex-col pb-5">
        <div className="w-[420px] text-center space-y-3">
          <h3 className="font-extrabold text-4xl ">¿Cómo funciona?</h3>
          <p className="text-[#6D7280] font-medium">
            Es muy sencillo... sigue estos pasos y estarás más cerca de resolver
            cualquier inconveniente en tu hogar{" "}
          </p>
        </div>
        <Carrusel />
      </div>
      {/* Reseñas de JobMatch */}
      <div className="flex h-screen flex-col justify-center items-center text-center ">
        <h3 className="font-extrabold text-4xl mb-4">
          ¿Qué dicen los usuarios <br /> de Jobmatch?
        </h3>
        <p className="w-[550px] text-[#6D7280] font-medium">
          Las valoraciones y comentarios de otros usuarios te ayudan a la hora
          de contratar a un profesional, o conocer los beneficios de utilizar la
          plataforma como prestador.
        </p>
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default Home;
