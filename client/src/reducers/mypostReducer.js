import {ADD_MY_POST, FETCH_MY_POSTS} from '../actions/types';

const initialState = {
   myposts: [],
}

export default function(state = initialState, action){
   switch(action.type){
      case ADD_MY_POST:
         return{
            ...state,
            myposts: [action.payload, ...state.myposts] 
         }
      case FETCH_MY_POSTS:
         return{
            myposts: action.payload
         }
      default:
         return state;
   }
}
