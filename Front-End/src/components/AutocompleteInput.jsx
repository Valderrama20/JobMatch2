import { useAutoAnimate } from "@formkit/auto-animate/react";
import React, { useState } from "react";
import { categorys } from "../utils/info";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const [parent] = useAutoAnimate();
  const [filter, setFilter] = useState([]);
  const suggestions = categorys;
  const navigate = useNavigate();

  const filterSuggestions = (e) => {
    let { value } = e.target;
    value = value.toLowerCase();
    if (value === "") {
      setFilter([]);
      return;
    }
    let filtered = suggestions.filter((suggestion) => {
      return suggestion.category.toLowerCase().includes(value) ? true : false;
    });
    setFilter(filtered);
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full bg-[#FFF]  py-2 border-2 rounded-md  text-[#625F5F]">
        <input
          type="text"
          placeholder="qué servicio necesitas para tu casa hoy? Ej: Carpintero"
          className="border-0 outline-none bg-transparent  w-6/12 px-3"
          onChange={filterSuggestions}
        />
      </div>

      <ul
        ref={parent}
        className={`absolute bg-white w-full text-lg rounded-md  ${
          filter.length > 0 ? "p-2 my-1 border-2" : ""
        }`}
      >
        {filter.map((e) => {
          return (
            <li
              className="flex items-center cursor-pointer"
              onClick={() => navigate(`map/${e.category}`)}
            >
              <img src={e.icon} alt={e.category} className="h-5  pr-2" />
              {e.category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
