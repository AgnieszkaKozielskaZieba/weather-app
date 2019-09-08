import React, {Component} from "react"

class CountryInputForm extends Component{
	constructor(props){
		super(props)
		this.state={
			cityID:null
		}
		this.handleChange=this.handleChange.bind(this)
	}

	async handleChange(e){
		e.preventDefault()
		await this.setState({cityID:e.target.options[e.target.selectedIndex].value})
		this.props.onChange(this.state.cityID)
	}

	render(){

		let {selCities}=this.props
		let optionCities=selCities.map((c,i)=><option key={i} value={c.id}>{c.country_code}, {c.state_name}</option>)
		return(
			<form>
				<label htmlFor="CountryInput">
				Which country do you mean?
				</label>
				<select autoFocus onChange={this.handleChange} name="CountryInput">
					{optionCities}
				</select>
			</form>
			)
	}
}
export default CountryInputForm