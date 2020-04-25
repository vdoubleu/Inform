import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

import "./ArticleDisplay.css";
import {ReactComponent as UpVote} from '../../images/like.svg';
import {ReactComponent as DownVote} from '../../images/like-2.svg';

class ArticleDisplay extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="card" id="card">
                  <div className="card-body">
                     <h1> Hello World </h1>
                       <h2> {this.props.currArticle.body} </h2> 
                  </div>
               </div>
            </div>
            <div className="row" id="bottom-bar">
               <div id="likes">
                  <UpVote className="arrow" />
                  <DownVote className="arrow" />
               </div>

               <button type="button" className="btn btn-light" data-toggle="modal" data-target="#shareModal" id="share-btn">
                  Share
               </button>

               <div className="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="shareModalTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                     <div className="modal-content">
                        <div className="modal-header">
                           <h5 className="modal-title" id="shareModalTitle"> Share </h5>
                           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true"> &times; </span>
                           </button>
                        </div>
                        
                        <div className="modal-body">
                           text body
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   currArticle: state.articles.items.length == 0? {body: "", title: "", id:0} : state.articles.items[state.articles.currentID]
})

export default connect(mapStateToProps) (ArticleDisplay);

