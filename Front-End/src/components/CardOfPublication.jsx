import { favorite, mail, call, star } from "../utils/icons";

function Card({ data, focus, openDetails }) {
  let { description, zone, category, userData, style, _id } = data;
  let { name, img } = userData;

  return (
    <div
      className={`m-5 mt-0 flex items-end space-x-3 cursor-pointer ${style}`}
    >
      <div className="w-full">
        <div className="w-full" onClick={() => focus(_id)}>
          <img src={img} alt="" className="h-30 w-30 pb-2 " />
          <span className="font-medium text-[10px] px-2 py-0.5 bg-[#179e443e] text-[#004B19] rounded-full">
            {category}
          </span>
          <div className="flex justify-between ">
            <div className=" font-bold text-xl">{name}</div>
            <div className="flex items-center">
              5.0 <img src={star} alt="" className="ml-1" />
            </div>
          </div>
          <p className="font-medium text-base leading-3">{zone}</p>
          <p className="leading-4 py-2">{description}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm font-semibold flex space-x-2">
            <button
              className="bg-[#004B19] text-white   px-3 py-1.5 rounded-lg flex items-center "
              onClick={() => openDetails(_id)}
            >
              <img src={mail} alt="" className="w-5 h-5 " />
              Detalles
            </button>
            <button
              className="font-semibold text-[#004B19] bg-transparent border
                             border-[#004B19] rounded-lg px-10 flex items-center"
              onClick={() => console.log("Llamar")}
            >
              <img src={call} alt="" className="w-5 h-5 -ml-1" />
              Llamar
            </button>
          </div>
          <img src={favorite} alt="" className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export default Card;
