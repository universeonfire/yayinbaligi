import streams from "../apis/streams"
import {SIGN_IN, SIGN_OUT, CREATE_STREAM ,FETCH_STREAMS, FETCH_STREAM ,DELETE_STREAM, EDIT_STREAM} from "./types"
import history from "../history"

export const signIn =(userId) =>{
	return{
		type: SIGN_IN,
		payload: userId
	}
}
export const signOut = () =>{
	return{
		type: SIGN_OUT
	}
}
export const createStream = (formValues) =>{
	return async (dispatch, getState) =>  {
		//kullanıcı id sini almak için getState fonksiyonunu kullanırız
		const {userId} = getState().auth
		const response = await streams.post('/streams', {...formValues, userId})

		dispatch({type: CREATE_STREAM, payload: response.data})
		//kullanıcı ana sayfaya yönlendirilir ---history.js----
		history.push('/')
	}
}
export const deleteStream = (id) =>{
	return async(dispatch) => {
		await streams.delete(`/streams/${id}`)

		dispatch({type: DELETE_STREAM, payload: id})
		//kullanıcı ana sayfaya yönlendirilir ---history.js----
		history.push('/')
	}
}
export const editStream = (id, formValues) =>{
	return async(dispatch) =>{
		//rest-ful yapısında put komutu kayıda ait tüm alanları günceller kayıta ait id hariç
		//Örnek const response = await streams.put(`/streams/${id}`,formValues)
		//ancak sadece belli alanları düzenlemek istedğimiz zaman patch komutunu kullanırız
		const response = await streams.patch(`/streams/${id}`,formValues)

		dispatch({type: EDIT_STREAM, payload: response.data})
		//kullanıcı ana sayfaya yönlendirilir ---history.js----
		history.push('/')
	}

}
export const fetchStream = (id) =>{
	return async(dispatch) => {
		const response = await streams.get(`/streams/${id}`)

		dispatch({type: FETCH_STREAM, payload: response.data})
	}

}
export const fetchStreams = () =>{
	return async (dispatch) =>{
		const response = await streams.get('/streams')

		dispatch({type: FETCH_STREAMS, payload: response.data})
	}
}
