import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStoryPage = props => {
   return(
      <div>
        <div className="container">
            <div className="form-group">
               <label for="titleInput" id="storyTitleLabel"> Title </label>
               <input type="text" class="form-control" />
            </div>

            <div className="form-group">
               <label for="textInput" id="storyTextLabel"> Story </label>
               <textarea type="text" class="form-control" rows="3" />
            </div>

            <button type="button" className="btn btn-primary"> 
               Post
            </button>
        </div>
      </div>
   );
}

export default AddStoryPage;
