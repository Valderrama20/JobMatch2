import { useState } from "react";
import { cancel } from "../../utils/icons";
import { categorys, methods, zonas_caba } from "../../utils/info";
import AutocompleteComponent from "../Map/Autocomplete";
import { fetchDataApi } from "../../services/apiService";
import { toast } from "sonner";

export default function Form({ close, userId, loading }) {
  let [form, setForm] = useState({
    latitude: 0,
    longitude: 0,
    description: "",
    category: "",
    zone: "",
    userId: userId,
  });

  const changeInput = (e) => {
    let { value, name } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createPublication = async (e) => {
    loading(true);
    e.preventDefault();

    let createPost = await fetchDataApi("/publications", methods.POST, form);
    if (createPost.ok) {
      toast.success("Publicacion creada");
      loading(false);
      close();
    } else {
      loading(false);
      toast.error("Algo salio mal");
    }
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center ">
      <form
        onSubmit={createPublication}
        className="z-40 flex flex-col bg-white px-10 py-5 w-1/2 space-y-2 rounded-lg"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-[#004B19]">
            Crear publicación
          </h2>

          <img src={cancel} alt="cancelIcon" onClick={() => close(false)} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="zone" className="font-semibold mt-4">
            Zona
          </label>
          <select
            onChange={changeInput}
            name="zone"
            id="zone"
            className=" bgGray p-2 rounded-md"
            required
          >
            <option value="">Seleccione una zona</option>
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
            onChange={changeInput}
            name="description"
            id="description"
            className="bgGray p-2  outline-none min-h-20 rounded-md"
            placeholder="Ej: Expertos en cont..."
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="direction" className="font-semibold">
            Direccion
          </label>
          <AutocompleteComponent setForm={setForm} form={form} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="font-semibold">
            Categoria
          </label>

          <select
            onChange={changeInput}
            name="category"
            id="category"
            className="bgGray p-2 mb-5"
            required
          >
            <option value="">Seleccione una categoria</option>
            {categorys.map((e) => {
              return <option value={e.category}>{e.category}</option>;
            })}
          </select>
        </div>
        <button className=" bgGreen1 text-white font-medium text-lg py-2 rounded-md">
          Publicar
        </button>
      </form>
      <div className="fixed inset-0 bg-black opacity-40 z-30"></div>
    </div>
  );
}
