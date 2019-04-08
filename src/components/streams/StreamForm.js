import React,{Component} from "react"
import {Field, reduxForm} from "redux-form"

class StreamForm extends Component{

	handleFormSubmit = (formValues) =>{
		//stream form componentinin kullanılıdığı yerden gelen propsun içindeki onsubmit fonksiyonu
		this.props.onSubmit(formValues)
	}
	renderError({error, touched}){
		if(touched && error){
			return(
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			)
		} 
	}
	renderInput = (formProps) =>{
		const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`
		return (
			<div className={className}>
				<label>{formProps.label}</label>
				<input {...formProps.input} autoComplete="off"/> 
				{this.renderError(formProps.meta)}
			</div>
		)
	}
	render(){
		return(
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
				<Field name="title" label="Başlık" component={this.renderInput} />
				<Field name="description" label="Tanım" component={this.renderInput} />
				<button className="ui button primary">Kaydet</button>
			</form>
		)
	}
}
const validate = (formValues) =>{
	const errors = {}
	if(!formValues.title){
		errors.title = "Başlık Gir Okuz"
	}
	if(!formValues.description){
		errors.description = "Tanım yapmamışsın Sığır"
	}
	return errors
} 

export default reduxForm({
	form: 'streamForm',
	validate: validate
})(StreamForm)

