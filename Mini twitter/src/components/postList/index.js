import React from "react";
import PostListItem from "../postListItem";

import "./index.css";

const PostList = ({ posts, onDelete, onImportant, onLike }) => {
  const items = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={id}>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onImportant={() => onImportant(id)}
          onLike={() => onLike(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{items}</ul>;
};

export default PostList;
