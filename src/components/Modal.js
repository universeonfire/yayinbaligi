import React from "react"
//Modal normal react hiyerarşisini takip etmeyecek ve direk body nin child elementi olarak görüntüleneceği için
//ReactDom u import ediyoruz ve createPortal fonksiyonunu kullanıyoruz bu fonksiyon 2 argümana ihtiyaç duyar
//1. si göstereceğimiz ögeler 2. si nerede göstereceğimiz
//2. arguman için index.html içinde modal ismine sahip bir div oluşturduk 
//eger bir elemente event eklenir ise o elementin child elementleri de etkilenir bu yüzden
//onClick={(e)=> e.stopPropagation()} komutunu kullanırız
import ReactDOM from "react-dom"

const Modal = (props) =>{
	const text = props.headerText
	return ReactDOM.createPortal(
		<div onClick={props.onClick} className="ui dimmer modals visible active">
		
			<div onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active">
				<div className="header">
					{text}
				</div>
				<div className="content">
					Kaydı Silmek İstediğinize Emin Misiniz?
				</div>
				<div className="actions">
					 {props.actions}
				</div>
				
			</div>
		</div>, 
		document.getElementById("modal")
	) 
}

export default Modal