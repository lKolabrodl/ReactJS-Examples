import React from "react";

const Weather = props => {
  return (
    <React.Fragment>
      {props.city ? (
        <ul>
          <li>
            Город:
            <p>
              {props.city}, {props.country}
            </p>
          </li>
          <li>
            Температура: <p>{props.temp} &#8451;</p>
          </li>
          <li>
            Ощущение как: <p>{props.tempFeels} &#8451;</p>
          </li>
          <li>
            Рассвет: <p>{props.sunrise}</p>
          </li>
          <li>
            Зака: <p>{props.sunset}</p>
          </li>
          <li>
            Давление: <p>{props.pressure} </p>
          </li>
        </ul>
      ) : null}
      <ul>
        <li className="error">
          <p>{props.error}</p>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Weather;
