import {SET_CURR_ARTICLE, FETCH_ARTICLES, UPDATE_OPINION, FETCH_OPINION} from '../actions/types';

const initialState = {
   items: [],
   currentID: 0,
   opinion: 0
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
      case UPDATE_OPINION:
         return{
            ...state,
            opinion: action.payload,
         }
      case FETCH_ARTICLES:
         return{
            ...state,
            opinion: action.payload,
         }
      default:
         return state;
   } 
}
