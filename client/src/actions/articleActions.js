import {SET_CURR_ARTICLE, FETCH_ARTICLES, UPDATE_OPINION, FETCH_OPINION} from '../actions/types';

export const fetchArticles = () => dispatch => {
   fetch('http://0.0.0.0:8080/VictorW/InformAPI/1.0.0/article?start=1&maxAmount=50')
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
   fetch('http://0.0.0.0:8080/VictorW/InformAPI/1.0.0/opinion', {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(newOpinion)
   })
   .then( 
   dispatch({
      type: UPDATE_OPINION,
      payload: newOpinion.value
   }));
}

export const fetchOpinion = opinionData => dispatch => {
   var url = new URL("http://0.0.0.0:8080/VictorW/InformAPI/1.0.0/opinion")
   url.search = new URLSearchParams(opinionData).toString();

   fetch(url)
   .then(res=>res.json())
   .then(out => 
   dispatch({
      type: FETCH_OPINION,
      payload: out.opinion[0]  
   }));
}
