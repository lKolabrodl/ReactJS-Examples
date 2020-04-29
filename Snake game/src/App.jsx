import React, { Component } from "react";
import "./App.css";
import Snake from "./components/Snake";
import Food from "./components/Food";

const getRandomCoord = () => {
  let min = 1;
  let max = 98;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  snakeDots: [
    [0, 0],
    [0, 2]
  ],
  direction: "RIGHT",
  speed: 200,
  food: getRandomCoord()
};

class App extends Component {
  state = initialState;

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }
  componentDidUpdate() {
    this.checkBoprders();
    this.checkCollapsed();
    this.checkFood();
  }

  onKeyDown = e => {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 38:
        return this.setState({ direction: "UP" });
      case 40:
        return this.setState({ direction: "DOWN" });
      case 37:
        return this.setState({ direction: "LEFT" });
      case 39:
        return this.setState({ direction: "RIGHT" });
      default:
        break;
    }
  };

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case "DOWN":
        head = [head[0] + 2, head[1]];
        break;
      case "UP":
        head = [head[0] - 2, head[1]];
        break;
      case "RIGHT":
        head = [head[0], head[1] + 2];
        break;
      case "LEFT":
        head = [head[0], head[1] - 2];
        break;
      default:
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({ snakeDots: dots });
  };

  checkBoprders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.gameOver();
    }
  }

  checkCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];

    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.gameOver();
      }
    });
  }

  checkFood() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[1] === food[0] && head[0] === food[1]) {
      this.setState({
        food: getRandomCoord()
      });
      this.enlargeSnake();
      this.speedIn();
      console.log("РАСТИ");
    }
  }

  speedIn() {
    if (this.state.speed > 10) {
      this.setState({ speed: this.state.speed - 10 });
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({ snakeDots: newSnake });
  }

  gameOver() {
    alert("Игра окончена, змея вышла за пределы игровой зоны");
    this.setState(initialState);
  }

  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots} />
        <Food dot={this.state.food} />
      </div>
    );
  }
}

export default App;
