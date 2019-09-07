import React,{Component} from "react"

class InputForm extends Component{
	constructor(props){
		super(props)
		this.state={
			cityInput:"",
			countryInput:""
		}
		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}

	handleChange(e){
		e.preventDefault()
		this.setState({[e.target.name]:e.target.value})
	}

	handleSubmit(e){
		e.preventDefault()
		e.target.reset()
		let city=this.state.cityInput
		let country=this.state.countryInput
		this.props.onSubmit(city,country)
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
		      <label htmlFor="cityInput">City</label>
		      <input type="text" id="cityInput" name="cityInput" onChange={this.handleChange}/>
		      <label htmlFor="countryInput">Country</label>
		      <input type="text" id="countryInput" name="countryInput" onChange={this.handleChange}/>
		      <button type="submit">Get weather!</button>
		    </form>
			)
	}
}

export default InputForm