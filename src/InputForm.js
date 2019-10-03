import React, { Component } from "react";
import "./InputForm.css";

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cities: [],
			selCities: [],
			cityInput: "",
			cityID: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCoordsSubmit = this.handleCoordsSubmit.bind(this);
		this.handleCityInput = this.handleCityInput.bind(this);
		this.handleCountryChange = this.handleCountryChange.bind(this);
	}

	componentDidMount() {
		let cities = require("./cities_full.json");
		this.setState({ ...this.state, cities });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.cityID);
		this.setState({ selCities: [], cityInput: "", cityID: null });
		e.target.reset();
	}

	handleCoordsSubmit(e) {
		e.preventDefault();
		navigator.geolocation.getCurrentPosition(position => this.props.onCoordsSubmit(position.coords.latitude, position.coords.longitude));
	}

	async handleCityInput(e) {
		e.preventDefault();
		await this.setState({ [e.target.name]: e.target.value });
		if (this.state.cities.some(c => c.city_name.toUpperCase() === this.state.cityInput.toUpperCase())) {
			let selCities = this.state.cities.filter(c => c.city_name.toUpperCase() === this.state.cityInput.toUpperCase());
			let cityID = selCities[0].id;
			this.setState({ selCities, cityID });
		}
	}

	handleCountryChange(e) {
		e.preventDefault();
		this.setState({
			cityID: e.target.options[e.target.selectedIndex].value
		});
	}

	render() {
		let locationButton = null;
		if ("geolocation" in navigator) {
			locationButton = (
				<form className="locationField">
					<div className="inputField">
						<button onClick={this.handleCoordsSubmit}>My location</button>
					</div>
					<div className="inputField">
						<p>OR</p>
					</div>
				</form>
			);
		} else {
			console.log("no geolocation");
		}

		var possibleCountries = <option>---</option>;
		if (this.state.selCities.length > 0) {
			possibleCountries = this.state.selCities.map((c, i) => (
				<option key={i} value={c.id}>
					{c.country_code}, {c.state_name}
				</option>
			));
		}

		var possibleCitiesOptions = null;
		if (this.state.cityInput.length > 0) {
			let possibleCities = this.state.cities.filter(c => c.city_name.toUpperCase().startsWith(this.state.cityInput.toUpperCase()));
			let citiesSet = new Set(
				possibleCities
					.map(c => c.city_name)
					.sort()
					.slice(0, 50)
			);
			possibleCitiesOptions = [...citiesSet].map((c, i) => <option key={i}>{c}</option>);
		}

		return (
			<header>
				{locationButton}
				<form onSubmit={this.handleSubmit}>
					<div className="inputField">
						<label htmlFor="cityInput">City</label>
						<input type="text" list="cities" name="cityInput" value={this.state.cityInput} onChange={this.handleCityInput} />
						<datalist id="cities">{possibleCitiesOptions}</datalist>
					</div>
					<div className="inputField">
						<label htmlFor="countryInput">Country</label>
						<select name="countryInput" onChange={this.handleCountryChange}>
							{possibleCountries}
						</select>
					</div>
					<button type="submit">Get weather!</button>
				</form>
			</header>
		);
	}
}

export default InputForm;
