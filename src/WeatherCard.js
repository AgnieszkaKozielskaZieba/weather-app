import React,{Component} from "react"
import "./WeatherCard.css"

class WeatherCard extends Component{
	render(){
		let {valid_date,wind_spd,wind_dir,temp,
			max_temp,min_temp,app_max_temp,app_min_temp,
			pop,precip,snow,weather,clouds}=this.props.weatherData
		return(<div className="WeatherCard">
			<img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt=""/>
			<p>{valid_date}</p>
			<p>Wind speed: {wind_spd}</p>
			<p>Wind direction: {wind_dir}</p>
			<p>Avarage temperature: {temp}</p>
			<p>Max temperature: {max_temp}</p>
			<p>Min temperature: {min_temp}</p>
			<p>Feels like max temperature: {app_max_temp}</p>
			<p>Feels like min temperature: {app_min_temp}</p>
			<p>Probability of Precipitation: {pop}%</p>
			<p>Accumulated liquid equivalent precipitation: {precip}</p>
			<p>Snow: {snow}</p>
			<p>Clouds: {clouds}</p>
			</div>)
	}
}
export default WeatherCard