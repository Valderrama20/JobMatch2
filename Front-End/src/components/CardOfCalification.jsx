import { starDorada } from "../utils/icons";
import avatar from "../../public/images/avatar.png";
function Card() {
  return (
    <div className=" bg-[#EBE3E35E] w-[320px]  p-6 space-y-5">
      <div className="flex justify-center  space-x-1">
        {[1, 2, 3, 4, 5].map((_, i) => {
          return <img src={starDorada} key={i} alt="" className="h-5 w-5" />;
        })}
      </div>

      <p className="font-semibold">
        "Encontré un excelente carpintero a través de JobMatch que transformó mi
        cocina. El proceso fue simple y pude ver opiniones de otros clientes
        antes de elegir."
      </p>
      <div className="flex flex-col items-center">
        <img src={avatar} alt="avatar" className="w-16 h-16 mb-2" />
        <p className="font-semibold">Noemí Gomez</p>
      </div>
    </div>
  );
}

export default Card;
