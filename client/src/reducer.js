import {combineReducers} from 'redux';
import articleReducer from './articleReducer';

export default combineReducers({
   artiles: articleReducer 
});
