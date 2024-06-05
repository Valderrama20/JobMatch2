import { Link } from "react-router-dom";

function Card({ data }) {
  let { icon, category } = data;
  return (
    <Link to={`/map/${category}`}>
      <div className="flex flex-col box items-center bg-[#FAFAFA] h-[180px] w-[180px] rounded-xl space-y-3 m-2 ">
        <div className="h-4/6 flex items-end ">
          <img src={icon} alt="icon" />
        </div>
        <div className="h-2/6 text-center text-[#222325]">
          <p>{category}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
