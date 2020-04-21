import React from 'react';
import './App.css';
import {Provider} from 'react-redux';

import ArticlePage from './components/ArticlePage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import store from './store';

function App() {
  return (
    <Router>
       <Provider store={store}>
         <div className="head">
            <img id="logo" src={require("./images/logo.png")}/>
            <h1 id="title"> INFORM </h1>
         </div>

         <Switch>
            <Route path="/article">
               <ArticlePage /> 
            </ Route>
         </Switch>

       </Provider>
    </Router>
  );
}

export default App;
