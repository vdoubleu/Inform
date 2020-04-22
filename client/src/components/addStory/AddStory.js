import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './AddStory.css';

const AddStory = props => {
   function sendData(e){

   }


   return(
      <form>
         <div className="form-group">
            <label for="title" className="inputLabel"> Title </label>
            <input type="text" name="title" id="title" class="form-control" />
         </div>

         <div className="form-group">
            <label for="article" className="inputLabel"> Story </label>
            <textarea type="text" id="article" name="article" class="form-control" rows="3" />
         </div>

         <button type="button" className="btn btn-primary"> 
            Post
         </button>
      </form>
   );
}

export default AddStory;
