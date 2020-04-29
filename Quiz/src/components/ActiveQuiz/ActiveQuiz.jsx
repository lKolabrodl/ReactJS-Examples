import React from "react";
import "./ActiveQuiz.css";
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => (
  <div className="ActiveQuiz">
    <p className="Question">
      <span>
        <strong>2.&nbsp;</strong>
        {props.question}
      </span>
      <small>
        {props.answerNumber} из {props.quizLength}
      </small>
    </p>

    <ul>
      <AnswerList
        answers={props.answers}
        onAnswerClickHandler={props.onAnswerClickHandler}
        answerState={props.answerState}
      />
    </ul>
  </div>
);
export default ActiveQuiz;
