import React from "react";

import "./index.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Mini Twitter</h1>
      <h2>
        <strong>{allPosts}</strong> Записи, из них понравилось &nbsp;
        <strong>{liked}</strong>
      </h2>
    </div>
  );
};

export default AppHeader;
