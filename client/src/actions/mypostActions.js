import {ADD_MY_POST, FETCH_MY_POSTS} from '../actions/types';

export const fetchPosts = () => dispatch => {
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json())
   .then(articles => dispatch({
         type: FETCH_MY_POSTS,
         payload: articles
      })
   );
};

export const addPost = postData => dispatch => {
   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
   })
   .then(res => res.json())
   .then(post =>
      dispatch({
         type: ADD_MY_POST,
         payload: post
      }));
};
