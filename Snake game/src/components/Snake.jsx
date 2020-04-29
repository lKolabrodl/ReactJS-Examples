import React from "react";

export default props => {
  return (
    <>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: dot[1] + "%",
          top: dot[0] + "%"
        };
        return <div className="snake-dot" key={i} style={style}></div>;
      })}
    </>
  );
};
