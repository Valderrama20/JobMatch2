import { star } from "../../utils/icons";
import img1 from "../../../public/images/img.jpg";
function Details() {
  return (
    <div className="w-full absolute inset-x-0 ">
      <div className=" bg-white rounded-xl p-3 w-[410px] box2 mx-auto">
        <div className=" flex justify-center">
          <img src={img1} alt="name" className="h-28 w-28" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Lautaro Rios</h3>
        </div>
        <p className="text-lg ">Balvanera</p>
        <div>
          <p className=" text-lg leading-6">Descripcion:</p>
          <p className="leading-4 text-sm">
            Somos una empresa con 10 años de experiencia en reparación de
            perdida.colocaciones de artefactos obras nuevas
          </p>
        </div>
        <div className="font-medium text-xl">Tel: 12345678</div>
        <div className="font-medium text-xl">Email: lautaror@procrew.ar</div>
        <div className="font-medium text-lg text-[#00551E]">
          Disponibilidad: 9:00 AM a 5:00 PM
        </div>
        <div>
          <h4 className="font-bold text-[#00551E] text-2xl">
            Opiniones sobre laurato
          </h4>
          <div className="flex space-x-2 ">
            <span className="text-4xl font-semibold ">5/5</span>
            <div className="relative flex items-center">
              <div className="flex ">
                {[1, 2, 3, 4, 5].map(() => {
                  return <img src={star} alt="star" className=" px-1 " />;
                })}
              </div>
              <p className="left-4 absolute -bottom-2 text-sm font-medium text-[#00000078]">
                {"(15 calificaciones)"}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center my-5">
            <button className="font-semibold text-xl  py-1 px-12 rounded-xl bg-[#00551E] text-white">
              Chatea ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
