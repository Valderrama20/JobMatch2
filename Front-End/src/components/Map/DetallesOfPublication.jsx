import { star } from "../../utils/icons";
function Details({ closeModal, details }) {
  let { zone, userData, description } = details;
  let { name, img, phone, mail, availability, rating } = userData;

  const calculateRating = (arr) => {
    return Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);
  };

  return (
    <div className="w-full absolute inset-x-0 ">
      <div className=" bg-white rounded-xl p-3 w-[410px] box2 mx-auto">
        <button onClick={closeModal} className="font-bold">
          X
        </button>
        <div className=" flex justify-center">
          <img src={img} alt="name" className="h-28 w-28" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{name}</h3>
        </div>
        <p className="text-lg ">{zone}</p>
        <div>
          <p className=" text-lg leading-6">Descripcion:</p>
          <p className="leading-4 text-sm">{description}</p>
        </div>
        <div className="font-medium text-xl">
          <p>Tel: {phone}</p>
          <p>Email: {mail}</p>
          <p className="text-lg text-[#00551E]">
            Disponibilidad: {availability}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[#00551E] text-2xl">
            Opiniones sobre {name.split(" ")[0]}
          </h4>
          <div className="flex space-x-2 ">
            <span className="text-4xl font-semibold ">
              5/{calculateRating(rating)}
            </span>
            <div className="relative flex items-center">
              <div className="flex ">
                {[1, 2, 3, 4, 5].map(() => {
                  return <img src={star} alt="star" className=" px-1 " />;
                })}
              </div>
              <p className="left-4 absolute -bottom-2 text-sm font-medium text-[#00000078]">
                {`(${rating.length} calificaciones)`}
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
