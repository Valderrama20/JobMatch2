import axios from "axios";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../../context/atoms";
import { apiUrl } from "../../utils/info";

export default function Login() {
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
    e.preventDefault();
    try {
      let response = await axios.post(`${apiUrl}/users/login`, form);
      setUser(response.data);
      navigate("/");
    } catch (error) {
      alert("Algo salio mal");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={loginUser}
      className="flex mb-2 flex-col content-center items-center justify-center"
    >
      <div className=" w-full flex flex-col content-center justify-start space-y-3 h-full">
        <h1 className="text-black font-bold text-center  text-3xl">JOBMATCH</h1>
        <input
          type="email"
          placeholder="Username"
          className="bgGray border-0 rounded-md outline-noneh h-10 px-2 outline-gray-200"
          name="email"
          value={form.email}
          onChange={changeInput}
          required
        />
        <input
          type="password"
          placeholder="Password"
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
