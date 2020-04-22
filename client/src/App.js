import React from 'react';
import {Provider} from 'react-redux';

import Header from './components/Header';
import ArticlePage from './components/ArticlePage';
import AboutUsPage from './components/AboutUs';
import AddStoryPage from './components/AddStoryPage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import store from './store';

function App() {
  return (
    <Router>
       <Provider store={store}>
         <Header />

         <Switch>
            <Route path="/article" exact>
               <ArticlePage /> 
            </ Route>
            <Route path="/aboutus">
               <AboutUsPage />
            </ Route>
            <Route path="/addstory">
               <AddStoryPage />
            </Route>
         </Switch>

       </Provider>
    </Router>
  );
}

export default App;
