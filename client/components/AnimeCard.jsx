import React from "react";
import { Link } from "react-router-dom";

const AnimeCard = ({ animeData }) => {
  return (
    <div>
      <Link className="h-[200px] w-[110px] bg-transparent rounded-md flex flex-col overflow-x-hidden text-center">
        <img src={animeData.image} className="h-[150px] w-full rounded-md" />
        <h1 className="pt-1 nunix-font text-white line-clamp-2">
          {animeData.title}
        </h1>
      </Link>
    </div>
  );
};

export default AnimeCard;
