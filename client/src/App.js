import React from 'react';
import {Provider} from 'react-redux';

import Header from './components/Header';
import ArticlePage from './components/ArticlePage';
import AboutUsPage from './components/AboutUs';
import AddStoryPage from './components/AddStoryPage';
import LoginPage from './components/LoginPage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import store from './store';

function App() {
  return (
    <Router>
       <Provider store={store}>
         <Switch>
            <Route path="/" exact>
               <LoginPage />
            </Route>
         </Switch>

         <Switch>
            <Route path="/in">
               <Header />
            </Route>
         </Switch>
         <Switch>
            <Route path="/in" exact>
               <ArticlePage /> 
            </ Route>
            <Route path="/in/aboutus">
               <AboutUsPage />
            </ Route>
            <Route path="/in/addstory">
               <AddStoryPage />
            </Route>
         </Switch>
       </Provider>
    </Router>
  );
}

export default App;
