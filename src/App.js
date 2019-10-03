import React, { Component } from "react";
import "./App.css";
import InputForm from "./InputForm";
import WeatherDisplay from "./WeatherDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityID: null,
      weatherData: [],
      lat: null,
      lon: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleInputByCoords = this.handleInputByCoords.bind(this);
    // this.handleCityChange=this.handleCityChange.bind(this)
  }

  async handleInput(cityID) {
    await this.setState({ cityID });

    fetch("https://api.weatherbit.io/v2.0/forecast/daily?city_id=" + this.state.cityID + "&key=862274aa0c2e4c11b4e2c94cef7ddc92")
      .then(res => res.json()) // Convert data to json
      .then(data => this.setState({ ...this.state, weatherData: data }))
      .catch(err => console.log(err));
  }

  async handleInputByCoords(lat, lon) {
    await this.setState({ lat, lon });

    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${this.state.lat}&lon=${this.state.lon}&key=862274aa0c2e4c11b4e2c94cef7ddc92`)
      .then(res => res.json()) // Convert data to json
      .then(data => this.setState({ ...this.state, weatherData: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <InputForm onSubmit={this.handleInput} onCoordsSubmit={this.handleInputByCoords} />
        <WeatherDisplay weatherData={this.state.weatherData} />
      </div>
    );
  }
}

export default App;
