import { FETCH_STREAMS, FETCH_STREAM, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM } from "../actions/types"
import _ from "lodash"

export default (state={}, action) =>{
	switch(action.type){
		case FETCH_STREAMS:
			// lodash mapKeys fonksiyonu gelen dizine ait bir bilgiyi alıp onları objeye dönüştürür
			//arr = [meyve: elma, meyve: armut] --- -.mapKeys(arr,'meyve') --- {elma:{meyve:elma},armut:{meyve:armut}}
			return {...state, ..._.mapKeys(action.payload,'id')}
		case FETCH_STREAM:
			// [action.payload.id]: key interpolation -- action.payload ise değer
			return {...state, [action.payload.id]: action.payload}
		case CREATE_STREAM:
			return {...state, [action.payload.id]: action.payload}
		case EDIT_STREAM:
			return {...state, [action.payload.id]: action.payload}
		case DELETE_STREAM:	
		//lodash omit fonksiyonu
			return _.omit(state, action.payload)
		default:
			return state
	}
}