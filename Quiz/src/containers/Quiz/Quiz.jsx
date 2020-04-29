import React from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/ActiveQuiz/FinishedQuiz/FinishedQuiz";

class Quiz extends React.Component {
  state = {
    result: {},
    activeQuistion: 0,
    answerState: null,
    isFinished: false,
    quiz: [
      {
        question: "Какого цвета небо",
        rightAnwserId: 2,
        id: 1,
        answers: [
          { text: "темное", id: 1 },
          { text: "синие", id: 2 },
          { text: "зеленые", id: 3 },
          { text: "другое", id: 4 }
        ]
      },
      {
        question: "2+2*2?",
        rightAnwserId: 2,
        id: 2,
        answers: [
          { text: "44", id: 1 },
          { text: "6", id: 2 },
          { text: "8", id: 3 },
          { text: "да", id: 4 }
        ]
      },
      {
        question: "Тебе понравились вопросы?",
        rightAnwserId: 2,
        id: 3,
        answers: [
          { text: "да", id: 1 },
          { text: "нет", id: 2 }
        ]
      }
    ]
  };

  onAnswerClickHandler = anwerId => {
    if (this.state.answerState) {
    }

    const question = this.state.quiz[this.state.activeQuistion];
    const result = this.state.result;
    if (question.rightAnwserId === anwerId) {
      if (!result[question.id]) {
        result[question.id] = "succsess";
      }

      if (this.isQuizFinished()) {
        console.log("finished");
        this.setState({
          answerState: { [anwerId]: "succsess" },
          isFinished: true
        });
      } else {
        this.setState({
          answerState: { [anwerId]: "succsess" },
          result: result
        });
        const timeout = window.setTimeout(() => {
          this.setState({
            activeQuistion: this.state.activeQuistion + 1,
            answerState: null
          });

          window.clearTimeout(timeout);
        }, 500);
      }
    } else {
      result[question.id] = "error";

      this.setState({
        answerState: { [anwerId]: "error" },
        result: result
      });
    }
  };
  isQuizFinished() {
    return this.state.activeQuistion + 1 === this.state.quiz.length;
  }
  onReturn = () => {
    this.setState({
      result: {},
      activeQuistion: 0,
      answerState: null,
      isFinished: false
    });
  };
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Пройдите опрос </h1>

          {this.state.isFinished ? (
            <FinishedQuiz
              result={this.state.result}
              quiz={this.state.quiz}
              onReturn={this.onReturn}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuistion].answers}
              question={this.state.quiz[this.state.activeQuistion].question}
              onAnswerClickHandler={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuistion + 1}
              answerState={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
