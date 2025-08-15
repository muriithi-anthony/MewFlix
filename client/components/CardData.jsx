import React from "react";
import { Link, useLocation } from "react-router-dom";

const AnimeCard = ({ data = {} }) => {
  const location = useLocation();
  const category = location.pathname || "/";

  return (
    <div>
      <Link
        to={`${category}${data?.link}`}
        className="h-[200px] w-[110px] mb-4 bg-transparent rounded-md flex flex-col  text-center"
      >
        <img src={data?.image} className="h-[150px] w-full rounded-md" />
        <h1 className="pt-1 nunix-font text-white line-clamp-2 text-shadow-md/50 text-shadow-[black]">
          {data?.title}
        </h1>
      </Link>
    </div>
  );
};

export default AnimeCard;
