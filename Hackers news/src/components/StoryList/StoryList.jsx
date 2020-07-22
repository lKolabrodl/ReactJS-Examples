import React from "react";
import StoryItem from "../StoryItem/StoryItem";
import Spinner from "../Spinner/Spinner";

const StoryList = ({ id }) => {
  return (
    <div className="container">
      <div className="row">
        {id.length === 0 ? (
          <Spinner />
        ) : (
          <>
            {id.map((item) => (
              <StoryItem key={item} id={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default StoryList;
