import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
    

class Article extends Component {
   constructor(props){
      super(props);
      this.state = {
         articles: []
      }
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data => this.setState({articles: data}));
   }

   render() {
      const articleItems = this.state.articles.map(article => (
         <button key={article.id} type="button" class="list-group-item list-group-item-action" style={{margin: 10, opacity:0.5}}>
            <h5> {article.title} </h5>
            <p> {article.body} </p>
         </button>
      ));

      return (
         <div>
            <div class="list-group">
            {articleItems}
            </div>
         </div>
      )
   }
}


export default Article;
