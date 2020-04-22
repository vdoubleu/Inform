import {combineReducers} from 'redux';
import articleReducer from './articleReducer';
import mypostReducer from './mypostReducer';

export default combineReducers({
   articles: articleReducer,
   myposts: mypostReducer
});
