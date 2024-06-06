import { starDorada } from "../utils/icons";
import avatar from "../../public/images/avatar.png";
function Card({ data }) {
  let { commentary, img, userName } = data;
  return (
    <div className=" bg-[#EBE3E35E] w-[320px]  p-6 space-y-5 transform hover:scale-105 transition-transform duration-200">
      <div className="flex justify-center  space-x-1">
        {[1, 2, 3, 4, 5].map((_, i) => {
          return <img src={starDorada} key={i} alt="" className="h-5 w-5" />;
        })}
      </div>

      <p className="font-semibold">{commentary}</p>
      <div className="flex flex-col items-center">
        <img src={img} alt="avatar" className="w-16 h-16 mb-2" />
        <p className="font-semibold">{userName}</p>
      </div>
    </div>
  );
}

export default Card;
