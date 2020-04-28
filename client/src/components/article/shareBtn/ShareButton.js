import React from 'react';

import {ReactComponent as FacebookIcon} from '../../../images/facebook.svg';
import {ReactComponent as TwitterIcon} from '../../../images/icons8-twitter.svg';

import "./ShareButton.css";

const ShareButton = props => {
   const twitterClick = e => {

   }

   const facebookClick = e => {

   }

   return(
      <div>
         <button type="button" className="btn btn-light" data-toggle="modal" data-target="#shareModal"> Share </button>

         <div className="modal fade" id="shareModal" tabIndex="-1" role="dialog" aria-labelledby="shareModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="shareModalTitle"> Share </h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"> &times; </span>
                     </button>
                  </div>
                  
                  <div className="modal-body">
                     <FacebookIcon className="share-icon" onClick={twitterClick} />
                     <TwitterIcon className="share-icon" onClick={facebookClick} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ShareButton;
