import React,{Component} from "react"
import "./WeatherCard.css"

class WeatherCard extends Component{
	render(){
		let {valid_date,wind_spd,wind_dir,temp,
			max_temp,min_temp,app_max_temp,app_min_temp,
			pop,precip,snow,weather,clouds}=this.props.weatherData
		return(<div className="WeatherCard">
			<h4 className="date">{valid_date}</h4>
			<img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt=""/>
			<h1 className="maintemp">{temp} °C</h1>
			<p className="temp">{min_temp}°C - {max_temp}°C</p>
			<p>Wind speed: {Math.round(+wind_spd*3.6)} km/h</p>
			<div className="precip">
			<p>Precipitation: {pop}%</p>
			<p>Rain: {Math.round(precip*10)/10} mm</p>
			<p>Snow: {Math.round(snow*10)/10} mm</p>
			</div>
			<p>Clouds: {clouds}%</p>
			</div>)
	}
}
export default WeatherCard