import {combineReducers} from "redux"
import authReducer from "./authReducer"
import streamsReducer from "./streamsReducer"
// buradaki reducer birden fazla redux-form reducerı kullanacağımız zaman karışıklık çıkmasın diye formReducer olarak import edilir
import {reducer as formReducer } from "redux-form"

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamsReducer
})