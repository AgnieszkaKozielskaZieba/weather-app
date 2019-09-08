import React,{Component} from "react"

class CityInputForm extends Component{
	constructor(props){
		super(props)
		this.state={
			cityInput:""
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
		this.props.onSubmit(this.state.cityInput)
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="cityInput">City</label>
		    	<input type="text" id="cityInput" name="cityInput" onChange={this.handleChange}/>
			</form>
			)
	}
}
export default CityInputForm
