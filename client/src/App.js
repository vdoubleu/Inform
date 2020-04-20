import React from 'react';
import './App.css';
import {Provider} from 'react-redux';

import Article from './components/Article';
import ArticleDisplay from './components/ArticleDisplay';

import store from './store';

function App() {
  return (
    <Provider store={store}>
       <div style={{backgroundColor: '#333333'}}>
         <header> INFORM </header>


          <div className="container">
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
    </Provider>
  );
}

export default App;
