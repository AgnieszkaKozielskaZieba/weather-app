import React, {Component} from 'react';
import './App.css';
import InputForm from "./InputForm"
import WeatherCard from "./WeatherCard"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cityID:null,
      country:"",
      weatherData:[]
    }
    this.handleInput=this.handleInput.bind(this)
    // this.handleCityChange=this.handleCityChange.bind(this)
  }




  async handleInput(cityID){   
      await this.setState({cityID})
      console.log(this.state)

      // fetch('https://api.weatherbit.io/v2.0/forecast/daily?city_id='+this.state.cityID+'&key=368ea17afb564018a3442eb0ad158ea8')  
      // .then(res=>res.json()) // Convert data to json
      // .then(data=>this.setState({...this.state, weatherData:data},()=>console.log(this.state)))

  }

  

  render(){
    // let {weatherData}=this.state
    // let weatherOutput=null
    // console.log(weatherData)
    // if(weatherData.data&&weatherData.data.length>0){
    //   weatherOutput=weatherData.data.map((d,i)=><WeatherCard key={i} weatherData={d}/>)
    // }
     return (
      <div className="App">
        <InputForm onSubmit={this.handleInput}/>
      </div>
    ); 
  }

}

export default App;
