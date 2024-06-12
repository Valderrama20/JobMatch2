import { useState } from "react";
import Card from "./CardOfInfo";
import { infoOfApp } from "../utils/info";
import { next2, back2 } from "../utils/icons";

function Carrusel({}) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let items = infoOfApp.map((e) => <Card data={e} />);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="flex relative ">
      <div className="overflow-hidden w-full">
        <div
          className=" flex transition-transform duration-500 ml-[28%] "
          style={{ transform: `translateX(-${currentIndex * 65}%) ` }}
        >
          {items.map((e, i) => {
            return (
              <div
                key={i}
                className={`w-[65%] flex-shrink-0 ${
                  currentIndex !== i && "transform scale-50"
                } transition-transform`}
              >
                {e}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center space-x-2 mt-5">
          {items.map((_, i) => {
            return (
              <div
                key={i}
                className={`h-4 w-4 border rounded-full ${
                  currentIndex === i && "bg-green-800"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="absolute inset-0 flex">
        <div className={`h-full w-1/2 back `} onClick={prev}></div>
        <div className="h-full w-1/2 next" onClick={next}></div>
      </div>
    </div>
  );
}

export default Carrusel;
