import { useState } from "react";
import { methods } from "../../utils/info";
import { fetchDataApi } from "../../services/apiService";
import { Toaster, toast } from "sonner";

export default function CreateUser({ changeForm, loading }) {
  let [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    img: "",
    rating: 0,
    password: "",
    description: "",
  });

  const changeInput = (e) => {
    let { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const createUser = async (e) => {
    e.preventDefault();
    loading(true);
    let userData = { ...form };
    userData.img = `https://ui-avatars.com/api?name=${userData.name}&background=004B19&color=fff&rounded=true&size=48`;

    let newUser = await fetchDataApi("/users", methods.POST, userData);
    if (newUser.ok) {
      changeForm();
      loading(false);
      toast.success("Usuario creado");
    } else {
      loading(false);
      toast.error("Algo salio mal");
    }
  };

  return (
    <div className="flex flex-col  w-full mb-2 space-y-6 bg-white rounded-lg  ">
      <h2 className="text-3xl font-bold text-center text-gray-900">JOBMATCH</h2>
      <form className="space-y-2 flex flex-col" onSubmit={createUser}>
        <input
          id="name"
          name="name"
          value={form.name}
          placeholder="Nombre"
          onChange={changeInput}
          className="bgGray border-0 rounded-md outline-noneh h-10 px-2 outline-gray-200"
          required
        />
        <input
          id="email"
          name="email"
          value={form.email}
          placeholder="Email"
          type="email"
          onChange={changeInput}
          className="bgGray border-0 rounded-md outline-noneh h-10 px-2 outline-gray-200"
          required
        />
        <input
          id="phone"
          name="phone"
          value={form.phone}
          placeholder="Phone"
          type="tel"
          onChange={changeInput}
          className="bgGray border-0 rounded-md outline-noneh h-10 px-2 outline-gray-200"
          required
        />
        <input
          id="password"
          name="password"
          value={form.password}
          placeholder="Password"
          type="Password"
          onChange={changeInput}
          className="bgGray border-0 rounded-md outline-noneh h-10 px-2 outline-gray-200"
          required
        />
        <button
          type="submit"
          className="bgGreen1 text-white text-center py-2 font-semibold rounded-lg outline-gray-200"
        >
          Crear usuario
        </button>
      </form>
    </div>
  );
}
