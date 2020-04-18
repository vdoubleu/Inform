import React from 'react';
import './App.css';

import Article from './components/Article';
import ArticleDisplay from './components/ArticleDisplay.js';

function App() {
  return (
    <div style={{backgroundImage: 'url(' + require('./images/background.jpg') + ')'}}>
      <header> INFORM </header>


       <div class="container">
          <div class="row">
            <div class="col-sm">
               <Article/>
            </div>
            <div class="col-sm">
               <ArticleDisplay/>
            </div>
          </div>
       </div>
    </div>
  );
}

export default App;
