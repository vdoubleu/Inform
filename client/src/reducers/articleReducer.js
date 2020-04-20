import {SET_CURR_ARTICLE, FETCH_ARTICLES} from '../actions/types';

const initialState = {
   items: [],
   currentID: 0
}

export default function(state = initialState, action) {
   switch(action.type){
      case SET_CURR_ARTICLE:
         return{
            ...state,
            currentID: action.payload,
         }
      case FETCH_ARTICLES:
         return {
            ...state,
            items: action.payload,
         }
      default:
         return state;
   } 
}
