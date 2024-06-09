import { useEffect, useState } from "react";
import Form from "../components/profile/FormOfCreatePublication";
import { useAtom } from "jotai";
import { userAtom } from "../context/atoms";
import { useNavigate } from "react-router-dom";
import { fetchDataApi } from "../services/apiService";
import { methods } from "../utils/info";
import { Toaster, toast } from "sonner";
import Loading from "../components/Loading";
function Perfil() {
  const [editInfo, setEditInfo] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const [isLoading, setIsLoading] = useState(false);

  let [userLocal, setUserLocal] = useState({
    name: "",
    phone: "",
    availability: "",
    description: "",
    email: "",
    img: "",
    id: "",
  });

  useEffect(() => {
    if (!user) {
      navigation("/login");
      return;
    }
    updateUserLocal();
  }, [user]);

  const updateUserLocal = () => {
    let updateUserLocal = { ...userLocal };
    for (let key in user.user) {
      if (updateUserLocal[key] !== undefined) {
        updateUserLocal[key] = user.user[key];
      }
    }
    setUserLocal(updateUserLocal);
  };

  const chageEditInfo = () => setEditInfo((prev) => !prev);

  const updateUserApi = async () => {
    let putUser = await fetchDataApi(
      `/users/${userLocal.id}`,
      methods.PUT,
      userLocal
    );

    if (putUser.ok) {
      toast.success("Actualizado correctamente");
      setUser({ ...user, user: putUser.data });
    } else {
      toast.error("No se pudo actualizar tu usuario");
    }

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
        <div>
          <h3 className="text-[#004B19] font-semibold text-3xl mb-2">
            Publicaciones
          </h3>
          <div className="border min-h-[200px] rounded-md mb-2"></div>
          <div className="text-right">
            <button
              onClick={() => setOpenModal(true)}
              className="bgGreen1 text-white font-semibold py-2 px-4 rounded-md"
            >
              Crear publicacion
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <Form
          close={setOpenModal}
          userId={userLocal.id}
          loading={setIsLoading}
        />
      )}
      <Toaster richColors />
      {isLoading && <Loading />}
    </div>
  );
}

export default Perfil;
