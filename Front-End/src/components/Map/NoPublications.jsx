import error from "../../../public/images/444.png";
export default function NoPublications() {
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center">
      <img src={error} alt="sinPublicaciones" className="h-[400px] " />
      <h1 className="text-3xl font-bold text-[#257341]">
        No hay publicaciones en esta Categoria
      </h1>
    </div>
  );
}
