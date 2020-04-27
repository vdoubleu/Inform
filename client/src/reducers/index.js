import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import mypostReducer from './mypostReducer';
import userdataReducer from './userdataReducer';

export default combineReducers({
   articles: articleReducer, 
   myposts: mypostReducer,
   userdata: userdataReducer
});
