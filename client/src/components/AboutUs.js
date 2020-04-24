import React from 'react';
import "./AboutUs.css";

const AboutUsPage = props => {
   return(
      <div className="container">
         <div className="row" id="aboutUsTitle">
         Who are we?
         </div>
         <div className="row">
            <div className="card" id="aboutUsBody">
               <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </div>
            </div>
         </div>
         <div className="row" id="info">
            <div>
               <h3> V </h3>
               <p> personal info stuff </p>
            </div>
            <div>
               <h3> S </h3>
               <p> more personal info stuff </p>
            </div>
         </div>

      </div>
   );
}

export default AboutUsPage;
