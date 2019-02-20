import { combineReducers } from 'redux';
import getList from './state';

export default combineReducers({
	rickandmorty: getList
});
