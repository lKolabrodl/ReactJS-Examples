import React from "react";
import "./AnswerList.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = props => (
  <ul className="AnswerList">
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          answer={answer}
          key={index}
          onAnswerClickHandler={props.onAnswerClickHandler}
          answerState={props.answerState ? props.answerState[answer.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswerList;
