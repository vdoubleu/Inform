import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchArticles, setCurrArticle} from '../../actions/articleActions';
import $ from 'jquery';

import './Article.css'; 

class Article extends Component {
   componentDidMount() {
      this.props.fetchArticles();
      console.log(this.props.articles);
   }


   btnClick = (e) => {
      var btn;

      if($(e.target).parent("button").length === 1)
         btn = $(e.target).parent("button");
      else
         btn = $(e.target);

      this.props.setCurrArticle(btn[0].id - 1);
   }

   render() {
      const articleItems = this.props.articles.reverse().map(article => (
         <button key={article.id} id={article.id} type="button" className="list-group-item list-group-item-action articleButtons" onClick={this.btnClick.bind(this)}>
            <h5> {article.title} </h5>
            <p> {article.body} </p>
         </button>
      ));

      return (
         <div>
            <div className="list-group" id="articleList">
              {articleItems}
            </div>
         </div>
      )
   }
}

Article.propTypes = {
   fetchArticles: PropTypes.func.isRequired,  
   articles: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
   articles: state.articles.items
})

export default connect(mapStateToProps, {fetchArticles, setCurrArticle})(Article);
