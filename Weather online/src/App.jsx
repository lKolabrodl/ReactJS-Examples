import React from "react";
import Info from "./components/info";
import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = "8eac5cac921e783ce5d10971051114ce";

class App extends React.Component {
  gettingWeather = async e => {
    e.preventDefault();
    const cityName = e.target.elements.city.value;

    if (cityName) {
      const API_URL = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      const data = await API_URL.json();

      if (data.cod === "404") {
        this.setState({
          error: "Неправильное название города"
        });
        return;
      }

      let sunsetInSec = data.sys.sunset;
      let sunriseInSec = data.sys.sunrise;

      let sunseDate = new Date(sunsetInSec * 1000);
      let sunriseDate = new Date(sunriseInSec * 1000);

      let timeSunset = sunseDate.toLocaleTimeString();
      let timeSunrise = sunriseDate.toLocaleTimeString();

      this.setState({
        temp: Math.round(data.main.temp),
        tempFeels: Math.round(data.main.feels_like),
        city: data.name,
        country: data.sys.country,
        sunrise: timeSunrise,
        sunset: timeSunset,
        pressure: data.main.pressure,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города"
      });
    }
  };

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  };

  render() {
    return (
      <main>
        <div className="weather__info">
          <Info />
        </div>
        <div className="weather__input">
          <Form gettingWeather={this.gettingWeather} />
          <div className="weather__input__result">
            <Weather
              temp={this.state.temp}
              tempFeels={this.state.tempFeels}
              city={this.state.city}
              country={this.state.country}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
              pressure={this.state.pressure}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
