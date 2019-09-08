import React,{Component} from "react"
import CityInputForm from "./CityInputForm"
import CountryInputForm from "./CountryInputForm"

class InputForm extends Component{
	constructor(props){
		super(props)
		this.state={
			cities:[],
			selCities:null,
			cityInput:"",
			cityID:null
		}
		// this.handleChange=this.handleChange.bind(this)
		this.handleCitySubmit=this.handleCitySubmit.bind(this)
		this.handleCityID=this.handleCityID.bind(this)
	}

	componentDidMount(){
		let cities=require("./cities_full.json")
		this.setState({...this.state, cities})
	}

	async handleCitySubmit(cityInput){
		await this.setState({cityInput})
		let selCities=this.state.cities.filter(c=>c.city_name===this.state.cityInput)
		if (selCities.length>0){
			let cityID=selCities[0].id
			this.setState({cityID})
		}
		this.setState({selCities})
	}

	handleCityID(cityID){
		this.setState({cityID})
	}

	render(){
		var possibleCountries=null
		var confirmButton=null
		if(this.state.selCities){
			possibleCountries=<p>Sorry, I don't know this city.</p>;
			if(this.state.selCities.length>0){
				possibleCountries=<CountryInputForm onChange={this.handleCityID} selCities={this.state.selCities}/>
				confirmButton=<button onClick={()=>this.props.onSubmit(this.state.cityID)}>Get weather!</button>
		}
		}
		return(
			<div>
			<CityInputForm onSubmit={this.handleCitySubmit}/>
			{possibleCountries}
			{confirmButton}
			</div>
			)
	}
}

export default InputForm