import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import Modal from "../Modal"
import history from "../../history"
import {deleteStream,fetchStream} from "../../actions"

//Modal windows with react
class StreamDelete extends Component{
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.streamId)	
	}
	 
	//styling bozulmasın diye React.Fragment kullanılır bu komut Dom içine bişey render etmez
    // bu komut <> </> ile aynıdır ama invalid jsx olarak algılanabileceği için <React.Fragment> </React.Fragment> kullanılır
	renderActions(){
		const id = this.props.match.params.streamId
		return (
			<React.Fragment>
				<button 
					onClick={() => this.props.deleteStream(id)} 
					className="ui negative button"> Evet 
				</button>
				<Link to="/" className="ui primary button"> Hayır </Link>
			</React.Fragment>
		)
	}
	render(){
		
		return(
			<div>
				<Modal 
					headerText={"Yayını Sil"} 
					actions={this.renderActions()}
					onClick={() => history.push("/")}
				/>
			</div>
		)
	}
}

const mapStateToProps =(state, ownProps) =>{
	return {stream: state.streams[ownProps.match.params.streamId]}

}
 

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete)