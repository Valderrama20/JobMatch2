import { favorite, mail, call, star } from "../utils/icons";

let userCard = () => console.log("in profile");
function Card({ data, focus, openDetails, allInfo = true }) {
  let { description, zone, category, user, style, id } = data;
  let { name, img, phone } = user;

  const handleWhatsAppClick = (number) => {
    window.open(`https://wa.me/+54${number}`, "_blank");
  };
  return (
    <div
      className={`m-5 mt-0  items-center  flex space-x-2 cursor-pointer ${style}`}
    >
      {allInfo && (
        <img
          src={
            img
              ? img
              : `https://ui-avatars.com/api?name=${name}&background=004B19&color=fff&rounded=true`
          }
          alt="userImg"
          className="h-20 w-20  "
          onClick={() => focus(id)}
        />
      )}
      <div className="w-full">
        <div className="w-full" onClick={() => focus(id)}>
          <span className="font-medium text-[10px] px-2 py-0.5 bg-[#179e443e] text-[#004B19] rounded-full">
            {category}
          </span>
          {allInfo && (
            <div className="flex justify-between ">
              <div className=" font-bold text-xl">{name}</div>
              <div className="flex items-center">
                5.0 <img src={star} alt="" className="ml-1 h-6" />
              </div>
            </div>
          )}
          <p className="font-medium text-base leading-4 ">{zone}</p>
          <p className="leading-4 py-2 w-[480px] break-words">
            {description.slice(0, 50) + "..."}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm font-semibold flex space-x-2">
            <button
              className="bg-[#004B19] text-white   px-3 py-1.5 rounded-lg flex items-center "
              onClick={() => openDetails(id)}
            >
              Detalles
            </button>
            <button
              className="font-semibold text-[#004B19] bg-transparent border
                             border-[#004B19] rounded-lg px-10 flex items-center"
              onClick={() => handleWhatsAppClick(phone)}
            >
              <img src={call} alt="" className="w-5 h-5 -ml-1" />
              whatsapp
            </button>
          </div>
          {/* <img src={favorite} alt="" className="h-5 w-5" /> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
