import React,{Component} from "react"
import {connect} from "react-redux"
import {fetchStream} from "../../actions"

class StreamShow extends Component{
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.streamId)
	}
	render(){
		 
		if(!this.props.stream){
			return <div>Sayfa Yükleniyor...</div>
		}
		const {title,description} = this.props.stream
		return(
			 <div>
			 	<h1>Yayın İzle</h1>

			 	<h2>{title}</h2>
			 	<h5>{description}</h5>
			 </div>
		)
		 
	}
}
const mapStateToProps =(state, ownProps) =>{
	return {stream: state.streams[ownProps.match.params.streamId]}

}
export default connect(mapStateToProps,{fetchStream})(StreamShow)