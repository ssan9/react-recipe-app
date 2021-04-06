import {
	CHANGE_QUERY,
	FETCH_GET_DATA_SUCCESS,
	FETCH_GET_DATA_FAILURE 
} from '../actions/get-recipes';

const initialState = {
	q: '',
	error: null
};

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case CHANGE_QUERY:
			return {
				...state,
				q: action.query.target.value
			}
		case FETCH_GET_DATA_SUCCESS:
			return {
				...state,
				q: action.data
			}
		case FETCH_GET_DATA_FAILURE:
			return {
				...state,
				error: action.error
			}
		default:
			return state;
	}
}