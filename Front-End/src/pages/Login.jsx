import { useCallback, useEffect, useState } from "react";
import CreateUser from "../components/login/CreateUserForm";
import { useLocation } from "react-router-dom";
import Login2 from "../components/login/LoginUser";
import { Toaster } from "sonner";
import Loading from "../components/Loading";

function Login() {
  const [createAcount, setCreateAcount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeForm = useCallback(() => {
    setCreateAcount((prev) => !prev);
  }, []);

  return (
    <div className="h-screen w-screen flex   content-start">
      <div className="flex w-1/2 content-center items-center justify-center space-y-5">
        <img
          src="../../public/images/login-working.jpeg"
          alt="working-image"
          className="w-full h-full"
        />
      </div>
      <div className="flex relative justify-center w-1/2 flex-col px-32">
        {!createAcount ? (
          <Login2 loading={setIsLoading} />
        ) : (
          <CreateUser changeForm={changeForm} loading={setIsLoading} />
        )}
        <button
          type="submit"
          className=" text-[#00551E] border-2 border-[#00551E] text-center py-2 font-semibold rounded-lg"
          onClick={changeForm}
        >
          {!createAcount ? "Registrarse" : "Login"}
        </button>
        {isLoading && <Loading />}
      </div>
      <Toaster richColors />
    </div>
  );
}

export default Login;
