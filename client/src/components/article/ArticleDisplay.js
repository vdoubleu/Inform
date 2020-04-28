import React from 'react';
import Opinion from './opinion/Opinion';
import {connect} from 'react-redux';
import ShareButton from './shareBtn/ShareButton';

import "./ArticleDisplay.css";

const ArticleDisplay = props => {
   return (
      <div className="container">
         <div className="row">
            <div className="card" id="card">
               <div className="card-body">
                  <h1> Hello World </h1>
                    <h3> {props.currArticle.body} </h3> 
               </div>
            </div>
         </div>
         <div className="row" id="bottom-bar">
            <Opinion id="likes"/>

            <ShareButton id="share-btn" />
         </div>
      </div>
   );
}

const mapStateToProps = state => ({
   currArticle: state.articles.items.length === 0? {body: "", title: "", id:0} : state.articles.items[state.articles.currentID]
})

export default connect(mapStateToProps) (ArticleDisplay);

