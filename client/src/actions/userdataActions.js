import {SET_DATA} from '../actions/types';

export const setData = name => dispatch => {
   dispatch({
      type: SET_DATA,
      payload: name
   })
}
