import { combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';


const rootReducer = combineReducers({ counterReducer });

export default rootReducer;