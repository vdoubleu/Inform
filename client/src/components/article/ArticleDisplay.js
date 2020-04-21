import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

import "./ArticleDisplay.css";
import {ReactComponent as UpArrow} from '../../images/up-chevron.svg';
import {ReactComponent as DownArrow} from '../../images/drop-down-arrow.svg';

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
            <div className="row">
               <div className="col-sm">
                  <UpArrow className="arrow" />
               </div>
               <div className="col-sm">
                  <DownArrow className="arrow" />
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

