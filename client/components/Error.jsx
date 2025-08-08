import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Error = ({ error }) => {
  return (
    <div>
      <div className="flex mt-[-150px] border rounded-sm border-2 p-2 border-[#28a428]">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="text-red-500 text-3xl"
        />
        <p className="ml-2">{`${error}!`}</p>
      </div>
    </div>
  );
};

export default Error;
