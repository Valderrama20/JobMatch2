import { alarm, star, phone, mail2, chat, cancel } from "../../utils/icons";
function Details({ closeDetails, details }) {
  let { zone, userData, description, category } = details;
  let { name, img, phone: phone2, mail, availability, rating } = userData;

  const calculateRating = (arr) => {
    return Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);
  };

  const handleEmailClick = (mail) => {
    window.open(`mailto:${mail}`, "_blank");
  };

  return (
    <div className=" flex top-0 absolute h-screen w-screen items-center justify-center -ml-10   ">
      <div className=" relative w-full  mx-10 bg-white rounded-xl p-3  z-50  ">
        <button onClick={closeDetails} className="absolute font-bold right-5">
          <img src={cancel} alt="cancel" />
        </button>
        <div className="border-b-2 border-[#004B19] flex">
          <div>
            <img src={img} alt={name} className="h-28 w-28" />
          </div>
          <div>
            <span className="text-white text-[10px] px-2 py-0.5 bg-[#004B19]  rounded-full">
              {category}
            </span>
            <h3 className="text-2xl text-[#004B19] font-bold">{name}</h3>
            <p className=" text-lg text-[#206136] font-semibold leading-6">
              Descripcion:
            </p>
            <p className="leading-4 text-sm mb-1">{description}</p>
            <div className="flex items-center ">
              <img src={alarm} alt="alarm" className="h-6" />
              <p className="text-lg font-medium text-[#00551E]">
                Disponibilidad: {availability}
              </p>
            </div>
          </div>
        </div>
        <div className=" text-xl mb-2 pl-28">
          <p className="text-[#004B19] font-bold">Datos de Contacto:</p>
          <div className="flex items-center space-x-1">
            <img src={phone} alt="phone" className="h-4" />
            <p>Tel: {phone2}</p>
          </div>
          <div className="flex items-center space-x-1">
            <img src={mail2} alt="mail2" className="h-5" />
            <p>Email: {mail}</p>
          </div>
        </div>
        <div className="pl-28">
          <p className="text-xl font-bold text-[#004B19]">Galeria de fotos</p>
          {/* Fotos */}
        </div>

        <div className="pl-28">
          <h4 className="font-bold text-[#00551E] text-xl">
            Opiniones sobre {name.split(" ")[0]}
          </h4>
          <div className=" flex justify-between items-center">
            <div className="flex">
              <span className="text-4xl font-medium ">
                5/{calculateRating(rating)}
              </span>
              <div className="relative">
                <div className="flex ">
                  {[1, 2, 3, 4, 5].map((_, i) => {
                    return (
                      <img
                        src={star}
                        alt="star"
                        className=" px-1 h-5 "
                        key={i}
                      />
                    );
                  })}
                </div>
                <p className="left-3.5 absolute text-sm font-medium text-[#00000078]">
                  {`(${rating.length} calificaciones)`}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleEmailClick(mail)}
              className="flex  items-center font-medium text-lg  px-6 rounded-lg bg-[#00551E] text-white"
            >
              Pedir Cotizacion
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bg-black opacity-40 inset-0 z-40 "></div>
    </div>
  );
}

export default Details;
