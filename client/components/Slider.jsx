import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Slider = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slide = slides[currentIndex];
  const location = useLocation();
  const category = location.pathname || "/";

  return (
    <div>
      <div>
        <Link
          to={`${category}${slide?.link}`}
          className="w-screen relative max-w-screen sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl flex justify-center items-center p-2 overflow-hidden "
        >
          <img
            className="w-[80%] h-[30vh] rounded-md sm:h-[70vh] md:h-[50vh]"
            src={slide?.image}
          />
          <div className="absolute bottom-5 w-full text-center sm:text-xl text-white text-shadow-md/50 text-shadow-[#28a428]">
            {slide?.title}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
