import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFireFlameCurved,
  faGear,
  faBolt,
  faArrowTrendUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hamburger = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="hidden sm:block md:hidden">
      <button
        type="button"
        className={`text-3xl p-2 text-[#28a428] ${
          sidebarOpen ? "hidden" : "inline"
        }`}
        onClick={() => setSidebarOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} className="hover:text-[#1c2c1c]" />
      </button>
    </div>
  );
};

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Hamburger setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div
        className={`flex justify-around p-2 text-2xl text-[#116011] border-[#185a18] bg-black border-t-2 text-center h-[50px] w-screen sm:flex sm:flex-col sm:w-[50px] sm:border-none sm:h-[calc(100vh-60px)] sm:pt-[calc(20vh-30px)] sm:pb-[20vh] sm:justify-between sm:items-center sm:${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md"
        >
          <FontAwesomeIcon  icon={faHome} />
        </Link>
        <Link
          to="/trending"
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md"
        >
          <FontAwesomeIcon  icon={faFireFlameCurved} />
        </Link>
        <Link
          to="/newReleases"
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md"
        >
          <FontAwesomeIcon  icon={faBolt} />
        </Link>
        <Link
          to="/upcoming"
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md"
        >
          <FontAwesomeIcon  icon={faArrowTrendUp} />
        </Link>
        <Link
          to="/settings"
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md "
        >
          <FontAwesomeIcon  icon={faGear} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
