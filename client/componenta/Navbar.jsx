import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="h-[60px] w-screen flex justify-between items-center bg-black text-[#28a428] p-[10px] text-[30px]">
      <div className="flex items-center w-[100px] mr-5">
        <FontAwesomeIcon icon={faCat} className="text-[#28a428]" />
        <h1 className="font-title">MeowFlix</h1>
      </div>
      
      <ul className="list-none flex w-[300px] justify-between items-center" >
        <li><a href="#home">Anime</a></li>        
        <li><a href="#movies">Movies</a></li>
        <li><a href="#series">Series</a></li>

      </ul>
      <div className="flex items-center gap-2">
        <input type="search" className="text-[#bbeebb] text-[16px] px-[5px] border-b-2 border-[#28a428] bg-[#28a42840] w-40 h-8  focus:outline-none "/>
        <button className="w-1/4">
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
