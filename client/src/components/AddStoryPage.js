import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStory from './addStory/AddStory';
import PastPosted from './addStory/PastPosted';

const AddStoryPage = props => {
   function sendData(e){

   }

   return(
      <div className="container">
         <div className="row">
            <div className="col">
               <AddStory />
            </div>
            <div className="col">
               <PastPosted />
            </div>
         </div>
      </div>
   );
}

export default AddStoryPage;
