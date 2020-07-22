import React, { useEffect, useState } from "react";
import { getStory } from "../servise/servise";
import { mapTime } from "../utils/mapTime";
import Spinner from "../Spinner/Spinner";

const StoryItem = ({ id }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    getStory(id).then((data) => setStory(data));
  }, [id]);

  return (
    <>
      {id ? (
        <div className="col-12">
          <div className="blog-post">
            <h2 className="blog-post-title">{story.title}</h2>
            <p className="blog-post-meta">
              опубликовано {mapTime(story.time)} назад
              <br />
              <a target="_blank" href={story.url}>
                {story.by}
              </a>
            </p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StoryItem;
