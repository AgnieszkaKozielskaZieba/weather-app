import React, {Component} from 'react';
import WeatherCard from "./WeatherCard"
import "./WeatherDisplay.css"

class WeatherDisplay extends Component{
	render(){
		let {weatherData}=this.props
	    let weatherOutput=null
	    let title=null
	    if(weatherData.data&&weatherData.data.length>0){
	    	title=<h1>{weatherData.city_name}, {weatherData.country_code}</h1>
	    	weatherOutput=weatherData.data.map((d,i)=><WeatherCard key={i} weatherData={d}/>)
	    }

		return(
			<div className="WeatherDisplay">
			{title}
			{weatherOutput}
			</div>
			)
	}
}

export default WeatherDisplay