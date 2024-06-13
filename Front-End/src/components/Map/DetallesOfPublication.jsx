import {
  alarm,
  star,
  phone,
  mail2,
  chat,
  cancel,
  mail,
} from "../../utils/icons";
function Details({ closeDetails, details }) {
  let { zone, user, description, category } = details;
  let { name, img, phone: phone2, email, availability, rating } = user;

  // const calculateRating = (arr) => {
  //   if (arr.length < 1) return 0;
  //   return Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);
  // };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, "_blank");
  };
  console.log(details);
  return (
    <div className=" flex top-0 absolute h-screen w-screen items-center justify-center -ml-10   ">
      <div className=" relative w-full  mx-10 bg-white rounded-xl p-3  z-50  ">
        <button onClick={closeDetails} className="absolute font-bold right-5">
          <img src={cancel} alt="cancel" />
        </button>
        <div className=" flex ml-12">
          <div>
            <img
              src={
                img
                  ? img
                  : `https://ui-avatars.com/api?name=${name}&background=004B19&color=fff&rounded=true`
              }
              alt=""
              className="h-12 w-12 mx-2 "
            />
          </div>
          <div>
            <span className="text-white text-[10px] px-2 py-0.5 bg-[#004B19]  rounded-full">
              {category}
            </span>
            <h3 className="text-2xl text-[#004B19] font-bold">{name}</h3>
            <p className=" text-lg text-[#206136] font-semibold leading-6">
              Descripcion:
            </p>
            <p className="leading-4 text-sm mb-1 w-[600px] break-words">
              {description}
            </p>
            <div className="flex items-center ">
              <img src={alarm} alt="alarm" className="h-6" />
              <p className="text-lg font-medium text-[#00551E]">
                Disponibilidad: {availability}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#004B19] h-0.5"></div>
        <div className=" text-xl mb-2 pl-28">
          <p className="text-[#004B19] font-bold">Datos de Contacto:</p>
          <div className="flex items-center space-x-1">
            <img src={phone} alt="phone" className="h-4" />
            <p>Tel: {phone2}</p>
          </div>
          <div className="flex items-center space-x-1">
            <img src={mail2} alt="mail2" className="h-5" />
            <p>Email: {email}</p>
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
              <span className="text-4xl font-medium ">{rating}/5</span>
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
                  {`(${rating} calificaciones)`}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleEmailClick(email)}
              className="flex  items-center font-semibold text-lg  px-6 py-1 rounded-md bg-[#00551E] text-white"
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
