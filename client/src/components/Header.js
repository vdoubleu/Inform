import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Switch} from 'react-router-dom';

const Header = props =>{
   return (
      <div className="head">
         <div className="container">
            <div className="row">
               <div className="col-xl">
                  <Link to="/" style={{textDecoration: 'none'}}>
                     <img id="logo" src={require("../images/logo.png")}/>
                     <h1 id="title"> INFORM </h1>
                  </Link>
               </div>
               <div className="col-lg">
                  <Switch>
                     <Route path="/" exact>
                        <h1 className="currTab"> Home </h1>
                     </Route>
                     <Route path="/aboutus" exact>
                        <h1 className="currTab"> About Us </h1>
                     </Route>
                     <Route path="/addstory" exact>
                        <h1 className="currTab"> Add Story </h1> 
                     </Route>
                  </Switch>
               </div>
               <div className="col-">
                  <Link to="/"> 
                     <button type="button" class="btn btn-outline-light"> Home </button>
                  </Link>
                  <Link to="/aboutus"> 
                     <button type="button" class="btn btn-outline-light"> About Us </button>
                  </Link>
                  <Link to="/addstory"> 
                     <button type="button" class="btn btn-dark"> Add Story </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
