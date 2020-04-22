import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Article from "./article/Article";
import ArticleDisplay from "./article/ArticleDisplay";

import "./ArticlePage.css";

const ArticlePage = props => {
   return(
      <div className="body">
         <div className="container">
            <div id="articlesTitle" className="row">
               Trending
            </div>
            <div className="row">
               <div className="col-sm">
                  <Article/>
               </div>
               <div className="col-sm">
                  <ArticleDisplay/>
               </div>
            </div>
         </div>
      </div>

   );
}

export default ArticlePage;
