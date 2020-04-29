import React from "react";

import "./index.css";

export default class PostStatusFilter extends React.Component {
  buttons = [
    { name: "all", label: "Все" },
    { name: "like", label: "Посты с лайком" },
  ];
  render() {
    const { filter, onFilterSelect } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const active = filter === name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
