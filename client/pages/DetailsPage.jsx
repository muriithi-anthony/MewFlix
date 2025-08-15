import React from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";

const DetailsPage = ({ category }) => {
  const { id } = useParams();
  return (
    <div>
      <DetailsCard endpoint={`${category}/${id}`} />
    </div>
  );
};

export default DetailsPage;
