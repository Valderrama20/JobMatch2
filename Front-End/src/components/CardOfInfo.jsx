function Card({ data }) {
  let { img, title, text } = data;
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt="grupo1" className="h-[250px]   my-5" />
      <h4 className="text-[#FF3D00] text-2xl font-bold ">{title}</h4>
      <p className="  text-center ">{text}</p>
    </div>
  );
}

export default Card;
