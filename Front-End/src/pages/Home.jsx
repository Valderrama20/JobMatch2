import { personIcon, campanaIcon } from "../../public/svg.jsx";
import Card from "../components/CardOfCategori.jsx";
import CardCalification from "../components/CardOfCalification.jsx";
import { categorys } from "../utils/info.js";
import img4 from "../../public/images/img4.jpg";
import { back, next } from "../utils/icons/index.js";

function Home() {
  return (
    <div className="w-screen h-full ">
      <div className="flex w-full  py-5 items-center space-x-5 pl-10 pr-16">
        <h1 className="text-black font-extrabold text-xl">JOBMATCH</h1>
        <div className="flex w-full bg-[#FFF]  py-2 border-2 rounded-md  text-[#625F5F]">
          <input
            type="text"
            placeholder="qué servicio necesitas para tu casa hoy? Ej: Carpintero"
            className="border-0 outline-none bg-transparent  w-6/12 px-3"
          />
        </div>
        <div className="flex space-x-6 ">
          {campanaIcon} {personIcon}
        </div>
      </div>
      {/* intro*/}
      <div className="flex py-16  bgGradient">
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
          <button className="bg-[#FF3D00]  my-10 w-full py-3 text-white text-xl font-semibold rounded-lg">
            Registrate como profesional
          </button>
        </div>
        <div className="w-1/2 ">
          <img src={img4} alt="img4" className="w-10/12 h-10/12 " />
        </div>
      </div>
      {/* Categorias */}
      <div>
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
      <div className="flex justify-center items-center flex-col py-14">
        <div className="w-[420px] text-center space-y-3">
          <h3 className="font-extrabold text-4xl ">¿Cómo funciona?</h3>
          <p className="text-[#6D7280] font-medium">
            Es muy sencillo... sigue estos pasos y estarás más cerca de resolver
            cualquier inconveniente en tu hogar{" "}
          </p>
        </div>

        <div className="flex items-center py-3">
          <img src={back} alt="backIcon" className="h-16 w-16" />
          <img src="" alt="" className="border h-96 w-[700px] mx-10" />
          <img src={next} alt="nextIcon" className="h-16 w-16" />
        </div>
        <div className="flex space-x-1 my-2">
          <div className="h-4 w-4 border rounded-full bg-green-800"></div>
          <div className="h-4 w-4 border rounded-full "></div>
          <div className="h-4 w-4 border rounded-full "></div>
        </div>
      </div>
      {/* Reseñas de JobMatch */}
      <div className="flex flex-col justify-center items-center text-center my-10">
        <h3 className="font-extrabold text-4xl mb-4">
          ¿Qué dicen los usuarios <br /> de Jobmatch?
        </h3>
        <p className="w-[550px] text-[#6D7280] font-medium">
          Las valoraciones y comentarios de otros usuarios te ayudan a la hora
          de contratar a un profesional, o conocer los beneficios de utilizar la
          plataforma como prestador.
        </p>
        <div className="flex space-x-6 mt-5">
          <CardCalification />
          <CardCalification />
          <CardCalification />
        </div>
      </div>
    </div>
  );
}

export default Home;
