import React,{Component} from "react"
import {connect} from "react-redux"
import {createStream} from "../../actions"
import StreamForm from "./StreamForm"

class StreamCreate extends Component{
	handleFormSubmit = (formValues) =>{
		this.props.createStream(formValues)
	}
	 
	render(){
		return(
			 <div>
			 	<h3>Yayın Oluştur</h3>
			 	<StreamForm onSubmit={this.handleFormSubmit} />
			 </div>
		)
	}
}
 
 

export default connect(null,{createStream})(StreamCreate)