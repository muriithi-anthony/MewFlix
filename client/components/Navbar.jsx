import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

import React from "react";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerClicked, sethamburgerClicked] = useState(false);
  const btnOneRef = useRef();
  const btnTwoRef = useRef();

  useEffect(() => {
    const handleDropDown = (e) => {
      if (
        !btnOneRef.current.contains(e.target) &&
        !btnTwoRef.current.contains(e.target)
      )
        sethamburgerClicked(false);
    };
    window.addEventListener("click", handleDropDown);
    return () => window.removeEventListener("click", handleDropDown);
  }, []);

  return (
    <div className="grid grid-rows-2 h-[100px] sm:h-[60px] sm:text-[30px] sm:p-[10px] text-[20px] p-[5px] w-full sm:flex sm:justify-between sm:items-center bg-black text-[#28a428]">
      <div className="flex justify-between items-center md:w-[66%]">
        <div className="flex items-center w-[100px] sm:w-[20%] mr-5">
          <FontAwesomeIcon icon={faCat} className="text-[#28a428]" />
          <h1 className="font-title">MeowFlix</h1>
        </div>

        <ul className=" hidden md:flex md:self-center list-none w-[300px] justify-between lg:ml-10 items-center">
          <li>
            <Link to="/">Anime</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
        </ul>

        <button
          ref={btnOneRef}
          type="button"
          onClick={() => sethamburgerClicked((prev) => !prev)}
          className="sm:hidden md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {hamburgerClicked ? (
        <Hamburger sethamburgerClicked={sethamburgerClicked} />
      ) : (
        ""
      )}

      <div className="flex justify-center sm:flex-row-reverse items-start sm:items-center gap-2">
        <button
          ref={btnTwoRef}
          type="button"
          onClick={() => sethamburgerClicked((prev) => !prev)}
          className="hidden sm:inline md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button className="self-start">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[#28a428]"
          />
        </button>
        <input
          type="search"
          className="text-[#bbeebb] text-[16px] px-[5px] border-b-2 border-[#28a428] bg-[#28a42840] sm:w-40 h-8 w-[80%]  focus:outline-none "
        />
      </div>
    </div>
  );
};

export default Navbar;
