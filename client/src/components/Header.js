import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Switch} from 'react-router-dom';

const Header = props =>{
   return (
      <div className="head">
         <div>
            <Link to="/" style={{textDecoration: 'none'}}>
               <div id="name">
                  <img id="logo" src={require("../images/logo.png")}/>
                  <h1 id="title"> INFORM </h1>
               </div>
            </Link>
         </div>

         <div className="curr-tab">
            <Switch>
               <Route path="/" exact>
                  <h1 className="currTab"> Feed </h1>
               </Route>
               <Route path="/aboutus" exact>
                  <h1 className="currTab"> About Us </h1>
               </Route>
               <Route path="/addstory" exact>
                  <h1 className="currTab"> Add Story </h1> 
               </Route>
            </Switch>
         </div>

         <div className="nav-buttons">
            <Link to="/"> 
               <button type="button" class="btn btn-outline-light"> Feed </button>
            </Link>
            <Link to="/aboutus"> 
               <button type="button" class="btn btn-outline-light"> About Us </button>
            </Link>
            <Link to="/addstory"> 
               <button type="button" class="btn btn-dark"> Add Story </button>
            </Link>
         </div>

      </div>
   );
}

export default Header;
