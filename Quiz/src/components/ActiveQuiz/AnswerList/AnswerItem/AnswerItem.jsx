import React from "react";
import "./AnswerItem.css";

const AnswerItem = props => {
  const className = ["AnswerItem"];
  if (props.answerState) {
    className.push(props.answerState);
  }

  return (
    <li
      className={className.join(" ")}
      onClick={() => props.onAnswerClickHandler(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
