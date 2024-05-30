import { personIcon, campanaIcon } from "../../public/svg.jsx";
import Card from "../components/CardOfCategori.jsx";
import { categorys } from "../utils/info.js";

function Home() {
  return (
    <div className="w-screen h-full px-16">
      <div className="flex w-full  py-8 items-center space-x-5">
        <h1 className="text-black font-bold">JOBMATCH</h1>
        <div className="flex w-full bgGray  py-2 border-2 rounded-md  text-[#625F5F]">
          <input
            type="text"
            placeholder="Busca trabajo por palabra clave"
            className="border-0 outline-none bg-transparent border-r-2 w-6/12 px-3"
          />
          <select name="" id="" className="bg-transparent px-3 ">
            <option value="">Lugar de trabajo</option>
          </select>
          <button></button>
        </div>
        <div className=" flex space-x-2">
          <button className="bgGreen1 text-white px-8 py-2 font-semibold  rounded-lg">
            Postulate
          </button>
          <button className="bg-[#1BBC55] text-white px-8 py-2 font-semibold rounded-lg">
            Contratar
          </button>
        </div>
        <div className="flex space-x-6 ">
          {campanaIcon} {personIcon}
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-10  ">
        {categorys.map((e) => {
          return <Card data={e} />;
        })}
      </div>
      <div className="flex p-10">
        <h3 className="text-3xl font-bold w-1/2 text-[#257341]">
          JobMatch: Conectando <br /> porfesionales con oportunidades
        </h3>
        <p className="w-[400px] text-[#222325]">
          Nuestra misión es crear un espacio donde la oferta y la demanda de
          servicios del hogar se encuentren de manera sencilla y eficiente.{" "}
        </p>
      </div>
      <div className="flex justify-around mb-10">
        {[1, 2, 3, 4].map(() => {
          return <div className="bg-[#D9D9D9] w-56 h-64 rounded-xl"></div>;
        })}
      </div>
    </div>
  );
}

export default Home;
