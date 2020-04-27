import React from 'react';
import GoogleLogin from 'react-google-login';
import {useHistory} from 'react-router-dom';

import "./LoginPage.css";


const LoginPage = props => {
   const history = useHistory();

   const responseGooglePass = response => {
      history.push("/in");
   }

   const responseGoogleFail = response => {
      alert("Login Fail");
   }

   return(
      <div id="center"> 
         <div className="card" id="outline-box">
            <h1 id="login-title"> INFORM </h1>
            <div>
               <GoogleLogin
                  clientId="634844156460-s94q5vibjs6pqcphls5pfh4sia0me213.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGooglePass}
                  onFailure={responseGoogleFail}
                  cookiePolicy={'single_host_origin'}
               />
            </div>
            <img id="login-logo" src={require("../images/logo.png")} alt="logo" />
         </div>
      </div>
   );
}

export default LoginPage;
