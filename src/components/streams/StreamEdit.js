import React,{Component} from "react"
import _ from "lodash"
import {connect} from "react-redux"
import {editStream,fetchStream} from "../../actions"
import StreamForm from "./StreamForm"

class StreamEdit extends Component{
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.streamId)
	}
	handleFormSubmit = (formValues) =>{
		//editStream aksiyon oluşturucusu 2 arguman istiyor birisi kayıta ait id diğeri ise değişecek değerler
		this.props.editStream(this.props.match.params.streamId,formValues)
	}
	 
	render(){
		//initialValues redux-form fonksiyonudur bir obje ister
		//StreamForm componentinin içindeki Field lara ait isimler ile eşleşmek zorundadır
		// ornegin initialValues = {{title:this.props.stream.title, description:this.props.stream.description}}
		//burada stream içindeki tüm bilgileri değiştirebildiğimiz için stream nesnesinin tamamını yollayabiliriz
		//örnek initialValues = {this.props.stream}
		//ancak tüm nesneyi yolladığımızda içinde değişmemesi gereken bilgileri de yollar
		//kullanıcı id si ve ya kayıta ait id gibi o yüzden lodash kütüphanesini import edip pick() fonksiyonunu kullanıyoruz
		//_.pick(nesne,'nesnede ulaşmak istediğimiz alanlar') bu fonksiyon o nesnenin bir örneğini oluşturur ve örnek nesneyi yollar
		//örnek initialValues = {_.pick(this.props.stream,'title','description')}

		if(!this.props.stream){
			return <div>Sayfa Yükleniyor...</div>
		}
		return(
			 <div>
			 	<h3>Yayın Düzenle</h3>
			 	<StreamForm 
				 	initialValues = {_.pick(this.props.stream,'title','description')}
				 	onSubmit={this.handleFormSubmit} 
				 />
			 </div>
		)
	}
}
 
const mapStateToProps =(state, ownProps) =>{
	return {stream: state.streams[ownProps.match.params.streamId]}

}
 

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit)