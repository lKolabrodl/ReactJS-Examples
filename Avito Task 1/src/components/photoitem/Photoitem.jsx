import React, { useState } from "react";
import Spinner from "../spinner/Spinnner";
const Photoitem = ({ photo, handlePhoto }) => {
  const [imageStatus, setImageStatus] = useState(false);

  const handleImageLoaded = () => {
    setImageStatus(!imageStatus);
  };

  return (
    <li className="Photoitem" onClick={() => handlePhoto(photo.id)}>
      {imageStatus ? null : <Spinner />}
      <img onLoad={handleImageLoaded} src={photo.url} alt={photo.id} />
    </li>
  );
};

export default Photoitem;
