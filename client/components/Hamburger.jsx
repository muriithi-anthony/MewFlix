const Hamburger = ({ sethamburgerClicked }) => {
  return (
    <div className="absolute right-0 top-[40px] text-[16px] sm:text-6 sm:top-[60px] w-auto h-auto bg-[#28a428aa] flex flex-col text-black rounded-b-sm text-center overflow-hidden">
      <a
        href="#home"
        className="hover:bg-[#28a422cc] p-2 hover:w-full"
        onClick={() => sethamburgerClicked(false)}
      >
        Anime
      </a>
      <a
        href="#movies"
        className="hover:bg-[#28a422cc] p-2 hover:w-full"
        onClick={() => sethamburgerClicked(false)}
      >
        Movies
      </a>
      <a
        href="#series"
        className="hover:bg-[#28a422cc] p-2 hover:w-full"
        onClick={() => sethamburgerClicked(false)}
      >
        Series
      </a>
    </div>
  );
};

export default Hamburger;
