import React from "react";
import "./FinishedQuiz.css";

const FinishedQuiz = props => {
  const succsessCount = Object.keys(props.result).reduce((total, key) => {
    if (props.result[key] == "succsess") {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className="FinishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          return (
            <li key={index}>
              <strong>{index + 1}.&nbsp;</strong>
              {quizItem.question}
              {props.result[quizItem.id] === "succsess" ? (
                <div className="icon-succsess">&#10004;</div>
              ) : (
                <div className="icon-error">&#10008;</div>
              )}
            </li>
          );
        })}

        <p>
          Правильно {succsessCount} из {props.quiz.length}
        </p>
        <div className="btn">
          <button onClick={props.onReturn}>повторить</button>
        </div>
      </ul>
    </div>
  );
};

export default FinishedQuiz;
