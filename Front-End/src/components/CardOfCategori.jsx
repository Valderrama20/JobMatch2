import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <Link to={"/map"}>
      <div className="flex flex-col box items-center bg-[#FAFAFA] h-[160px] w-[160px] rounded-xl space-y-3 m-2 ">
        <div className="h-4/6 flex items-end">
          <img src={data.icon} alt="" />
        </div>
        <div className="h-2/6 text-center text-[#222325]">
          <p>{data.category}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
