import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  //xs sm md lg
  return (
    <div className="grid grid-rows-2 h-[100px] sm:h-[60px] sm:text-[30px] sm:p-[10px] text-[20px] p-[5px] w-full sm:flex sm:justify-between sm:items-center bg-black text-[#28a428]">
      <div className="flex justify-between items-center">
        <div className="flex items-center w-[100px] mr-5">
          <FontAwesomeIcon icon={faCat} className="text-[#28a428]" />
          <h1 className="font-title">MeowFlix</h1>
        </div>

        <ul className=" hidden sm:flex list-none w-[300px] justify-between items-center">
          <li>
            <a href="#home">Anime</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#series">Series</a>
          </li>
        </ul>

        <button type="button sm:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      
      <div className="flex flex-row-reverse sm:flex-row items-center gap-2">
        <input
          type="search"
          className="text-[#bbeebb] text-[16px] px-[5px] border-b-2 border-[#28a428] bg-[#28a42840] w-40 h-8  focus:outline-none "
        />
        <button className="self-start">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[#28a428]"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
