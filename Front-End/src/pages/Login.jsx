import { googleIcon } from "../../public/svg";

function Login() {
  return (
    <div className="w-screen h-screen">
      <div className="flex w-screen h-full content-start">
        <div className="flex w-1/2 content-center items-center justify-center space-y-5">
          <img
            src="../../public/images/login-working.jpeg"
            alt="working-image"
            className="w-full h-full"
          />
        </div>
        <div className="flex w-1/2 h-full flex-col content-center items-center justify-center">
          <div className="px-32 w-full flex flex-col content-center justify-start space-y-3 h-full">
            <h1 className="text-black font-bold text-center py-24 text-3xl">
              JOBMATCH
            </h1>
            <input
              type="text"
              placeholder="Username"
              className="bgGray border-0 rounded-md outline-noneh h-10 px-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="bgGray border-0 rounded-md outline-none px-2 h-10"
            />
            <button className="bgGreen1 text-white text-center py-2 font-semibold rounded-lg">
              Postulate
            </button>
            <button className="flex items-center justify-center space-x-4 pt-8">
              <div className="h-8 w-8">{googleIcon}</div>
              <p>Ingresar con Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
