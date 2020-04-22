import {ADD_MY_POST, FETCH_MY_POSTS} from '../actions/types';

const initialState = {
   myposts: [],
   newpost: {}
}

export default function(state = initialState, action){
   switch(action.type){
      case ADD_MY_POST:
         return{
            ...state,
            newpost: action.payload,
         }
      case FETCH_MY_POSTS:
         return{
            ...state,
            myposts: action.payload,
         }
      default:
         return state;
   }
}
