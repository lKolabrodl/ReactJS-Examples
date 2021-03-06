import React from "react";

import "./index.css";

export default class PostAddForm extends React.Component {
  state = {
    text: "",
    textError: "",
  };

  checkEmptyStr = (value) => {
    if (value) {
      this.setState({
        textError: "Поле не должно быть пустым",
      });
    } else {
      this.setState({
        textError: "",
      });
      return true;
    }
  };

  onValueChange = (e) => {
    this.setState({
      text: e.target.value,
    });
    this.checkEmptyStr(e.target.value === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    if (this.checkEmptyStr(this.state.text === "")) {
      this.props.onAdd(this.state.text);
    }
    this.setState({
      text: "",
    });
  };

  render() {
    const { text, textError } = this.state;
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Напиши свои мысли"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={text}
        />
        <span className="error">{textError}</span>
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    );
  }
}
