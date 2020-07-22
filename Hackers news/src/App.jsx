import React, { useState, useEffect } from "react";
import StoryList from "./components/StoryList/StoryList";
import { getStoryIds } from "./components/servise/servise";
import Pagination from "./components/Pagination/Pagination";

import "./index.css";

const App = () => {
  const [id, setId] = useState([]);

  const [currenPage, setCurrenPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);

  const indexLastPost = currenPage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;
  const currenPosts = id.slice(indexFirstPost, indexLastPost);

  const selectNumber = (item) => {
    setCurrenPage(item);
  };

  useEffect(() => {
    if (id.length !== 0) {
      return;
    }
    getStoryIds().then((data) => setId(data));
  }, [id]);

  return (
    <>
      <StoryList id={currenPosts} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={id.length}
        selectNumber={selectNumber}
      />
    </>
  );
};

export default App;
