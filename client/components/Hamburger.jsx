import { Link } from "react-router-dom";

const Hamburger = ({ sethamburgerClicked }) => {
  return (
    <div className="absolute right-0 top-[40px] text-[16px] sm:text-6 sm:top-[60px] w-auto h-auto bg-[#28a428aa] flex flex-col text-black rounded-b-sm text-center overflow-hidden">
      <Link
        to="/"
        className="hover:bg-[#28a422cc] p-2 hover:w-full"
        onClick={() => sethamburgerClicked(false)}
      >
        Anime
      </Link>

      <Link
        to="/movies"
        className="hover:bg-[#28a422cc] p-2 hover:w-full"
        onClick={() => sethamburgerClicked(false)}
      >
        Movies
      </Link>

      <Link
        to="/series"
        className="hover:bg-[#28a422cc] p-2 hover:w-full"
        onClick={() => sethamburgerClicked(false)}
      >
        Series
      </Link>
    </div>
  );
};

export default Hamburger;
