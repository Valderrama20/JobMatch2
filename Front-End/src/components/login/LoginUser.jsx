import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../../context/atoms";
import { fetchDataApi } from "../../services/apiService";
import { methods } from "../../utils/info";
import { toast } from "sonner";

export default function Login({ loading }) {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);

  let [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    let { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const loginUser = async (e) => {
    loading(true);
    e.preventDefault();
    let loginUser = await fetchDataApi("/users/login", methods.POST, form);
    if (loginUser.ok) {
      setUser(loginUser.data);
      navigate("/");
    } else {
      loading(false);
      toast.error("Tu contraseña o email esta mal");
    }
  };

  return (
    <form
      onSubmit={loginUser}
      className="flex mb-2 flex-col content-center items-center justify-center "
    >
      <div className=" w-full flex flex-col content-center justify-start space-y-3 h-full">
        <h1 className="text-black font-bold text-center  text-3xl">JOBMATCH</h1>
        <input
          type="email"
          placeholder="Email"
          className="bgGray border-0 rounded-md outline-noneh h-10 px-2 outline-gray-200"
          name="email"
          value={form.email}
          onChange={changeInput}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="bgGray border-0 rounded-md  px-2 h-10 outline-gray-200"
          name="password"
          value={form.password}
          onChange={changeInput}
          required
        />
        <button
          type="submit"
          className="bgGreen1 text-white text-center py-2 font-semibold rounded-lg"
        >
          Ingresar
        </button>
      </div>
    </form>
  );
}
