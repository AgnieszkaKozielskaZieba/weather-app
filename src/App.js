import React, {Component} from 'react';
import './App.css';
import InputForm from "./InputForm"
import WeatherDisplay from "./WeatherDisplay"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cityID:null,
      weatherData:[]
    }
    this.handleInput=this.handleInput.bind(this)
    // this.handleCityChange=this.handleCityChange.bind(this)
  }




  async handleInput(cityID){   
      await this.setState({cityID})

      fetch('https://api.weatherbit.io/v2.0/forecast/daily?city_id='+this.state.cityID+'&key=862274aa0c2e4c11b4e2c94cef7ddc92')  
      .then(res=>res.json()) // Convert data to json
      .then(data=>this.setState({...this.state, weatherData:data}))
      .catch(err=>console.log(err))

  }

  

  render(){
     return (
      <div className="App">
        <InputForm onSubmit={this.handleInput}/>
        <WeatherDisplay weatherData={this.state.weatherData}/>
      </div>
    ); 
  }

}

export default App;
