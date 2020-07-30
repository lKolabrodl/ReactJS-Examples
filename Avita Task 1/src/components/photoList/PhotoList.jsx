import React from "react";
import Photoitem from "../photoitem/Photoitem";

const PhotoList = ({ photos, handlePhoto }) => {
  return (
    <div className="Photo__list">
      <ul>
        {photos.map((photo) => (
          <Photoitem handlePhoto={handlePhoto} key={photo.id} photo={photo} />
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
