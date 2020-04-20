import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

class ArticleDisplay extends Component {
   render() {
      return (
         <div className="card">
            <div className="card-body">
               <h1> Hello World </h1>
               <h2> {this.props.currArticle.body} </h2> 
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   currArticle: state.articles.items.length == 0? {body: "", title: "", id:0} : state.articles.items[state.articles.currentID]
})

export default connect(mapStateToProps) (ArticleDisplay);

