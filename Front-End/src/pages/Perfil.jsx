import { useEffect, useState } from "react";
import Form from "../components/profile/FormOfCreatePublication";
import { useAtom } from "jotai";
import { userAtom } from "../context/atoms";
import axios from "axios";
import { apiUrl } from "../utils/info";
function Perfil() {
  let [infoUser, setInfoUser] = useState({});
  let [editInfo, setEditInfo] = useState(false);
  let [userLocal, setUserLocal] = useState({
    name: "",
    phone: "",
    availability: "",
    description: "",
    email: "",
    img: "",
    id: "",
  });

  let [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    let updateUserLocal = { ...userLocal };
    for (let key in user.user) {
      if (updateUserLocal[key] !== undefined) {
        updateUserLocal[key] = user.user[key];
      }
    }
    setUserLocal(updateUserLocal);
  }, [user]);

  const chageEditInfo = () => {
    setEditInfo((prev) => !prev);
  };
  const updateUserApi = async () => {
    const headers = {
      Authorization: `Bearer ${user.token}`,
    };
    try {
      let update = await axios.put(
        `${apiUrl}/users/${userLocal.id}`,
        userLocal,
        {
          headers,
        }
      );
      console.log({ ...user, user: update.data });
      setUser({ ...user, user: update.data });
    } catch (error) {}

    chageEditInfo();
  };

  const changeInput = (e) => {
    let { value, name } = e.target;
    setUserLocal((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="bgGradient ">
      <div className="py-10 mx-20 ">
        <div className="relative flex space-x-2 mb-16">
          <img src={userLocal.img} alt="userImg" className="h-14 w-14" />
          <div>
            <h2 className="text-[#004B19] font-semibold text-3xl">Mi Perfil</h2>
            <p className="text-[#272727] font-semibold leading-3">
              Email: {userLocal.email}
            </p>
          </div>
          <button className="absolute right-0">x</button>
        </div>
        <div className="flex space-x-2 mb-2">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border rounded-md p-2 "
              onChange={changeInput}
              name="name"
              value={userLocal.name}
              disabled={!editInfo}
            />
            <input
              type="text"
              placeholder="Telefono"
              value={userLocal.phone}
              onChange={changeInput}
              name="phone"
              className="w-full border rounded-md p-2"
              disabled={!editInfo}
            />
            <input
              type="text"
              placeholder="Disponibilidad"
              value={userLocal.availability}
              onChange={changeInput}
              name="availability"
              className="w-full border rounded-md p-2"
              disabled={!editInfo}
            />
          </div>

          <textarea
            placeholder="Descripcion"
            value={userLocal.description}
            onChange={changeInput}
            name="description"
            className="border w-full p-2 rounded-md"
            disabled={!editInfo}
          />
        </div>
        <div className="text-right">
          <button
            onClick={!editInfo ? chageEditInfo : updateUserApi}
            className="bgGreen1 text-white font-semibold py-2 px-4 rounded-md"
          >
            {!editInfo ? "Editar Informacion" : "Guardar cambios"}
          </button>
        </div>
      </div>
      {/* <Form /> */}
    </div>
  );
}

export default Perfil;
