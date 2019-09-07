import React, {Component} from 'react';
import './App.css';
import InputForm from "./InputForm"
import WeatherCard from "./WeatherCard"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      city:"",
      country:"",
      weatherData:[]
    }
    this.handleInput=this.handleInput.bind(this)
    this.handleCityChange=this.handleCityChange.bind(this)
  }

  handleCityChange(city)


  async handleInput(city,country){   
      await this.setState({city,country})

      fetch('https://api.weatherbit.io/v2.0/forecast/daily?city='+this.state.city+'&key=368ea17afb564018a3442eb0ad158ea8')  
      .then(res=>res.json()) // Convert data to json
      .then(data=>this.setState({...this.state, weatherData:data}))

  }

  

  render(){
    let {weatherData}=this.state
    let weatherOutput=null
    console.log(weatherData)
    if(weatherData.data&&weatherData.data.length>0){
      weatherOutput=weatherData.data.map((d,i)=><WeatherCard key={i} weatherData={d}/>)
    }
     return (
      <div className="App">
        <InputForm onSubmit={this.handleInput} onCityChange={this.handleCityChange}/>
        <h2>{this.state.weatherData.city_name}, {this.state.weatherData.country_code}</h2>
        {weatherOutput}
      </div>
    ); 
  }

}

export default App;
