import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div>
      <div className="mt-[-150px]">
        <FontAwesomeIcon icon={faYinYang} spin className="text-3xl my-auto" />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
