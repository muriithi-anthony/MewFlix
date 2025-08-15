import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailsCard = ({ endpoint }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    const baseUrl = "http://localhost:5001";
    const url = `${baseUrl}${endpoint}`;

    const getDetails = async () => {
      try {
        const { data } = axios.get(url);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getDetails();
  }, []);
  return (
    <div>
      <div className="h-full fixed overflow-y-auto p-2 w-screen sm:absolute sm:top-[60px] sm:left-[50px] sm:h-full sm:w-[calc(100vw - 50px)] sm:pr-[60px] sm:overflow-x-hidden">
        {endpoint}
      </div>
    </div>
  );
};

export default DetailsCard;
