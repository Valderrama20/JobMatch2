import { cancel } from "../../utils/icons";
import { categorys, zonas_caba } from "../../utils/info";
import AutocompleteComponent from "../Map/Autocomplete";

export default function Form() {
  return (
    <div className="absolute inset-0 flex justify-center items-center ">
      <form
        action=""
        className="z-50 flex flex-col bg-white px-10 py-5 w-1/2 space-y-2 rounded-lg"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-[#004B19]">
            Crear publicación
          </h2>

          <img src={cancel} alt="cancelIcon" className="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="zone" className="font-semibold mt-4">
            Zona
          </label>
          <select name="zone" id="zone" className=" bgGray p-2 rounded-md">
            {zonas_caba.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-semibold">
            Descripcion
          </label>
          <textarea
            name="description"
            id="description"
            className="bgGray p-2  outline-none min-h-20 rounded-md"
            placeholder="Ej: Expertos en cont..."
          ></textarea>
        </div>
        <div>
          <label htmlFor="direction" className="font-semibold">
            Direccion
          </label>
          <AutocompleteComponent />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="font-semibold">
            Categoria
          </label>
          <select name="category" id="category" className="bgGray p-2 mb-5">
            {categorys.map((e) => {
              return <option value={e.category}>{e.category}</option>;
            })}
          </select>
        </div>
        <button className=" bgGreen1 text-white font-medium text-lg py-2 rounded-md">
          Publicar
        </button>
      </form>
      <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
    </div>
  );
}
