import {SET_CURR_ARTICLE, FETCH_ARTICLES} from '../actions/types';

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
