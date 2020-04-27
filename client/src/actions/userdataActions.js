import {SET_DATA} from '../actions/types';

export const setData = data => dispatch => {
   dispatch({
      type: SET_DATA,
      payload: data
   })
}
