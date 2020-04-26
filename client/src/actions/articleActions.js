import {SET_CURR_ARTICLE, FETCH_ARTICLES, UPDATE_OPINION, FETCH_OPINION} from '../actions/types';

export const fetchArticles = () => dispatch => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(articles => dispatch({
            type: FETCH_ARTICLES,
            payload: articles
         })
      );
}

export const setCurrArticle = articleIndex => dispatch => {
   dispatch({
      type: SET_CURR_ARTICLE,
      payload: articleIndex
      })
}

export const updateOpinion = newOpinion => dispatch => {
   //fetch()
   //.then(opinion => 
   dispatch({
      type: UPDATE_OPINION,
      payload: newOpinion
   }) //);
}

export const fetchOpinion = articleID => dispatch => {
   //fetch()
   //.then(res->res.json())
   //.then(opinion => 
   dispatch({
      type: FETCH_OPINION,
      payload: articleID
   }) //);
}
