import React from 'react';

const AboutUsPage = props => {
   return(
      <div className="container">
         <div className="row">
            <div>
               <h1 id="aboutUsTitle"> Who are we? </h1>
               <p id="aboutUsText"> testing testing 123 </p>
            </div>
         </div>
        
         <div className="row">
            <div className="col">
               <h3> V </h3>
               <p> personal info stuff </p>
            </div>
            <div className="col">
               <h3> S </h3>
               <p> more personal info stuff </p>
            </div>
         </div>

      </div>
   );
}

export default AboutUsPage;
