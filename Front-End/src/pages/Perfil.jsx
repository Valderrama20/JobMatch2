import { useEffect, useState } from "react";
import Form from "../components/profile/FormOfCreatePublication";
import { useAtom } from "jotai";
import { publicationsAtom, userAtom } from "../context/atoms";
import { useNavigate } from "react-router-dom";
import { fetchDataApi } from "../services/apiService";
import { methods } from "../utils/info";
import { Toaster, toast } from "sonner";
import Card from "../components/CardOfPublication";
import Loading from "../components/Loading";
function Perfil() {
  const [editInfo, setEditInfo] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const [publications, setPublications] = useAtom(publicationsAtom);

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

    setUserLocal(user.user);
  }, [user]);


  const chageEditInfo = () => setEditInfo((prev) => !prev);

  const updateUserBack = async () => {
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

  const deletePublication = async (id) => {
    setIsLoading(true);
    let deletePb = await fetchDataApi(`publications/${id}`, methods.DELETE);
    deletePb.ok
      ? (setPublications((prev) => prev.filter((e) => e.id !== id)),
        toast.success("Publicacion eliminada"))
      : toast.error("No se pudo eliminar");
    setIsLoading(false);
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
            onClick={!editInfo ? chageEditInfo : updateUserBack}
            className="bgGreen1 text-white font-semibold py-2 px-4 rounded-md"
          >
            {!editInfo ? "Editar Informacion" : "Guardar cambios"}
          </button>
        </div>
        <div>
          <h3 className="text-[#004B19] font-semibold text-3xl mb-2">
            Publicaciones
          </h3>
          <div className="container py-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-100">Categoria</th>
                  <th className="py-2 px-4 bg-gray-100">Zona</th>
                  <th className="py-2 px-4 bg-gray-100">Descripcion</th>
                  <th className="py-2 px-4 bg-gray-100">Calificación</th>
                  <th className="py-2 px-4 bg-gray-100">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {publications.map((pb) => {
                  if (pb.user.id === userLocal.id) {
                    return (
                      <tr key={pb.id} className="border-b">
                        <td className="py-2 px-4">
                          <span className="block text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mb-1 text-center">
                            {pb.category}
                          </span>
                        </td>
                        <td className="py-2 px-4 text-center">{pb.zone}</td>
                        <td className="py-2 px-2">
                          {pb.description.slice(0, 60) + "..."}
                        </td>
                        <td className="py-2 px-4 flex items-center justify-center">
                          {5}
                          <svg
                            className="w-4 h-4 text-green-700 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545-4.754-4.634 6.572-.955L10 0l2.938 5.956 6.572.955-4.754 4.634 1.122 6.545z" />
                          </svg>
                        </td>
                        <td className="py-2 px-4 text-center">
                          {/* <button className="details-button bgGreen1 text-white py-1 px-3 rounded mr-2">
                           Detalles
                           </button> */}
                          <button
                            onClick={() => deletePublication(pb.id)}
                            className="details-button font-bold bg-red-500 text-white py-1 px-3 rounded "
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-right">
          <button
            onClick={() => setOpenModal(true)}
            className="bgGreen1 text-white font-semibold py-2 px-4 rounded-md"
          >
            Crear publicacion
          </button>
        </div>
      </div>
      {openModal && (
        <Form
          close={setOpenModal}
          user={userLocal}
          loading={setIsLoading}
          setPublications={setPublications}
        />
      )}
      <Toaster richColors />
      {isLoading && <Loading />}
    </div>
  );
}

export default Perfil;
