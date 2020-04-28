import {SET_DATA} from '../actions/types';

export const setData = idToken => dispatch => {
   const data = {stuff: "hello"}

   dispatch({
      type: SET_DATA,
      payload: data
   })
}
