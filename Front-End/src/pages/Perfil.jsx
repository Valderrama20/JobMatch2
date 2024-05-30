function Perfil() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col h-full w-1/3 min-w-[360px] justify-center mx-auto">
        <div className="flex flex-col items-center w-full space-y-3">
          <div className="flex flex-col w-full text-[#257341]">
            <p>Bienvenido a JobMatch</p>
            <p>Selecciona la opcion que mas describa tu situacion</p>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex flex-col box items-center bg-[#FAFAFA] h-[160px] w-[160px] rounded-xl space-y-3 m-2 ">
              <div className="h-2/6 text-center text-[#222325]">
                <p>description</p>
              </div>
              <div className="h-4/6 flex items-end">
                <img src="../../public/icons/carpinteria.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col box items-center bg-[#FAFAFA] h-[160px] w-[160px] rounded-xl space-y-3 m-2 ">
              <div className="h-2/6 text-center text-[#222325]">
                <p>description</p>
              </div>
              <div className="h-4/6 flex items-end">
                <img src="../../public/icons/cerrajeria.png" alt="" />
              </div>
            </div>
          </div>
          <button className="bgGreen1 text-white text-center py-2 font-semibold rounded-lg w-full">
            Postulate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
