import { useAtom } from "jotai";
import { countAtom } from "../context/atoms";

function Landing() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div className=" bg-black flex w-screen h-screen justify-center items-center ">
      <div className=" text-white text-center">
        <h1 className="text-3xl">Hola mundo!!</h1>
        <h2>{count}</h2>
        <button
          className="border py-1 px-6 my-2 rounded-full hover:bg-white hover:text-black
                     transition-colors duration-200"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Incrementar
        </button>
      </div>
    </div>
  );
}

export default Landing;
