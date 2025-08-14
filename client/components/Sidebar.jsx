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
import { Link, useLocation } from "react-router-dom";

const Hamburger = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="hidden sm:block sm:z-2 md:hidden">
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

  const location = useLocation();
  const basePath = location.pathname.split("/")[1] || "anime";

  return (
    <div>
      <Hamburger setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div
        className={`flex justify-around p-2 text-2xl text-[#116011] border-[#185a18] bg-black border-t-2 text-center h-[50px] w-screen sm:flex sm:flex-col sm:w-[50px] sm:border-none sm:h-[calc(100vh-60px)] sm:pt-[calc(20vh-30px)] sm:pb-[20vh] sm:justify-between sm:items-center sm:${
          sidebarOpen ? "block" : "hidden"
        } md:block md:bg-transparent md:flex`}
      >
        <Link
          to={`/${basePath}`}
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md"
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link
          to={`/${basePath}/trending`}
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md"
        >
          <FontAwesomeIcon icon={faFireFlameCurved} />
        </Link>
        <Link
          to={`/${basePath}/newReleases`}
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md"
        >
          <FontAwesomeIcon icon={faBolt} />
        </Link>
        <Link
          to={`/${basePath}/upcoming`}
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md"
        >
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </Link>
        <Link
          to="/settings"
          onClick={() => setSidebarOpen(false)}
          className="hover:bg-[#28a428] hover:text-black w-[50px] rounded-md "
        >
          <FontAwesomeIcon icon={faGear} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
