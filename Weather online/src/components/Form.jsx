import React from "react";

const Form = props => {
  return (
    <React.Fragment>
      <form onSubmit={props.gettingWeather}>
        <input type="text" name="city" placeholder="город" />
        <button>Получить погоду</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
