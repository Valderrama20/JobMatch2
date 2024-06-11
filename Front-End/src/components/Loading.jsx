import { useEffect } from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="absolute inset-0  flex justify-center items-center  bg-black opacity-40 z-50">
      <ReactLoading type="spin" color="green" height={"60px"} width={"60px"} />
    </div>
  );
}
