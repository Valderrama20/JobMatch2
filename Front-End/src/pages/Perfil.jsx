import { useState } from "react";

function Perfil() {
  let [infoUser, setInfoUser] = useState({});
  let [editInfo, setEditInfo] = useState(false);

  const chageEditInfo = () => {
    setEditInfo((prev) => !prev);
  };
  return (
    <div className="bgGradient ">
      <div className="py-10 mx-20 ">
        <div className="relative flex space-x-2 mb-16">
          <img
            src={`https://ui-avatars.com/api?name=jose-Garcia&background=004B19&color=fff&rounded=true`}
            alt="userImg"
            className="h-14 w-14"
          />
          <div>
            <h2 className="text-[#004B19] font-semibold text-3xl">Mi Perfil</h2>
            <p className="text-[#272727] font-semibold leading-3">
              Email: lautaror@procrew.ar
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
              disabled={!editInfo}
            />
            <input
              type="text"
              placeholder="Telefono"
              className="w-full border rounded-md p-2"
              disabled={!editInfo}
            />
            <input
              type="text"
              placeholder="Disponibilidad"
              className="w-full border rounded-md p-2"
              disabled={!editInfo}
            />
          </div>

          <textarea
            placeholder="Descripcion"
            className="border w-full p-2 rounded-md"
            disabled={!editInfo}
          />
        </div>
        <div className="text-right">
          <button
            onClick={chageEditInfo}
            className="bgGreen1 text-white font-semibold py-2 px-4 rounded-md"
          >
            {!editInfo ? "Editar Informacion" : "Guardar cambios"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
