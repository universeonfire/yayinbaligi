import React,{Component} from "react"
import {connect} from "react-redux"
import {signIn,signOut} from "../actions"
class GoogleAuth extends Component{
	
	componentDidMount(){
		window.gapi.load("client:auth2", () => {
			window.gapi.client.init({
				clientId: '281196508636-2db185vohrekb0stplqqpaoj34eth899.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance()
				this.onAuthChange(this.auth.isSignedIn.get())
				this.auth.isSignedIn.listen(this.onAuthChange)
			})
		})
		
	}
	handleSignOut = () =>{
		this.auth.signOut()
	}
	handleSignIn = () =>{
		this.auth.signIn()
	}
	onAuthChange = (isSignedIn) => {
		if(isSignedIn){
			this.props.signIn(this.auth.currentUser.get().getId())
		}else{
			this.props.signOut()
		}
	}
	renderAuthButton(){
		if(this.props.isSignedInx === null){
			return null
		}else if(this.props.isSignedInx){
			return (
				<button className="ui red google button" onClick={this.handleSignOut} >
				<i className ="google icon" />
					Çıkış Yap
				</button>
			)
		}else{
			return(
				<button className="ui blue google button" onClick={this.handleSignIn} >
				<i className="google icon" />
					Giriş Yap
				</button>
			)
		}
	}
	render(){
		return(
			<div>{this.renderAuthButton()}</div>
		)
	}

}

const mapStateToProps = (state) =>{
	return {isSignedInx: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)