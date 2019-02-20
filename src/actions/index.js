import axios from 'axios';
import { LIST_RESPONSE, EPISODE_RESPONSE } from '../constants';
const API_URL = 'https://rickandmortyapi.com/api';

function get(query, opt) {
	if (typeof opt === 'object') {
		return axios.get(`${API_URL}/${query}/`, { params: opt });
	} else {
		return axios.get(`${API_URL}/${query}/${opt}`);
	}
};

export function getCharacter(opt) {
	return dispatch => {
		return get('character', opt).then(response => {
			dispatch({ type: LIST_RESPONSE, payload: response.data });
			return response.data;
		});
	}
};

export function getEpisode(opt) {
	return dispatch => {
		return get('episode', opt).then(response => {
			dispatch({ type: EPISODE_RESPONSE, payload: response.data });
		});
	}
};
