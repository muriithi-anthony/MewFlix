import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import axios from "axios";

const DetailsPage = ({ category }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const baseUrl = "http://localhost:5001";
  const url = `${baseUrl}/${category}/${id}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);

        setDetails({
          metaData: data.details[0],
          info: data.details[1],
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
    console.log(details);
  }, [url]);

  return (
    <div>
      <DetailsCard details={details} />
    </div>
  );
};

export default DetailsPage;
