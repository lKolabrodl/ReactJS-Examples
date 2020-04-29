import React, { Component } from "react";
import "./App.css";

const winnerLine = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default class App extends Component {
  state = {
    sqares: Array(9).fill(null),
    count: 0,
  };

  clickHandler = (e) => {
    const data = e.target.getAttribute("data");
    const currentState = this.state.sqares;

    if (currentState[data]) {
      return;
    }
    currentState[data] = this.state.count % 2 === 0 ? "x" : "0";

    this.setState({
      sqares: currentState,
      count: this.state.count + 1,
    });
    this.isWinner();
  };

  isWinner = () => {
    const s = this.state.count % 2 === 0 ? "x" : "0";

    for (let i = 0; i < 8; i++) {
      let line = winnerLine[i];
      if (
        this.state.sqares[line[0]] === s &&
        this.state.sqares[line[1]] === s &&
        this.state.sqares[line[2]] === s
      ) {
        alert("Вы виграли");
        setTimeout(() => {
          this.setState({ sqares: Array(9).fill(null), count: 0 });
        }, 1000);
      }
    }
  };

  render() {
    const { sqares } = this.state;

    return (
      <div className="tic-tac-toe">
        {sqares.map((sqare, i) => (
          <div
            className="ttt-grid"
            key={i}
            data={i}
            onClick={this.clickHandler}
          >
            {sqares[i]}
          </div>
        ))}
      </div>
    );
  }
}
