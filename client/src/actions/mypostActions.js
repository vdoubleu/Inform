import {ADD_MY_POST, FETCH_MY_POSTS} from '../actions/types';

export const fetchPosts = author => dispatch => {
   fetch('http://0.0.0.0:8080/VictorW/InformAPI/1.0.0/article?start=1&maxAmount=50&author=' + author)
   .then(res=>res.json())
   .then(articles => dispatch({
         type: FETCH_MY_POSTS,
         payload: articles
      })
   );
};

export const addPost = postData => dispatch => {
   fetch('http://0.0.0.0:8080/VictorW/InformAPI/1.0.0/article', {
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
