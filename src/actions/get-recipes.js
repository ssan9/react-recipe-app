const APP_ID = '8cb6adf8';
const APP_KEY = '7a3d78721af1f1ecdf1201a47ffee352';

export const TRACK_QUERY = 'TRACK_QUERY';
export const trackQuery = (query) => ({
	type: 'TRACK_QUERY',
	query
});

export const CHANGE_QUERY = 'CHANGE_QUERY';
export const changeQuery = (updatedQuery) => ({
	type: 'CHANGE_QUERY',
	updatedQuery
});

export const FETCH_GET_DATA_SUCCESS = 'FETCH_GET_DATA_SUCCESS';
export const fetchGetDataSuccess = (data) => {
	return ({
		type: FETCH_GET_DATA_SUCCESS,
		data
	});
};

export const FETCH_GET_DATA_FAILURE = 'FETCH_GET_DATA_FAILURE';
export const fetchGetDataFailure = error => ({
	type: FETCH_GET_DATA_FAILURE,
	error
});

export const fetchGetData = (q) => (dispatch, getState) => {
	return fetch(`https://api.edamam.com/search?q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=4&calories=591-722&health=alcohol-free`, {
		method: 'GET'
	})
	.then(res => res.json())
	.then((data) => dispatch(fetchGetDataSuccess(data.hits)))
	.catch(err => {
		dispatch(fetchGetDataFailure(err));
	});
};