import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../actions/mypostActions';

import './AddStory.css';

const AddStory = props => {
   const [postTitle, setPostTitle] = useState("");
   const [postArticle, setPostArticle] = useState("");

   function sendData(e){
      if(postTitle != "" && postArticle != ""){
         const newPost = {
            title: postTitle,
            body: postArticle
         } 

         props.addPost(newPost); 
      }
   }


   return(
      <form id="input-form">
         <div className="form-group"> 

            <div id="first-row">
               <label htmlFor="title" className="inputLabel"> Title </label>

               <div className="dropdown" id="catagory-dropdown">
                 <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Catagory
                 </a>

                 <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                   <a className="dropdown-item" href="#">some catagory</a>
                   <a className="dropdown-item" href="#">some more catagory</a>
                   <a className="dropdown-item" href="#">Urgent</a>
                 </div>
               </div>
            </div>

            <input type="text" name="title" id="postTitle" className="form-control" onChange={(e) => setPostTitle(e.target.value)} />
         </div>

         <div className="form-group">
            <label htmlFor="article" className="inputLabel"> Story </label>
            <textarea type="text" id="postArticle" name="article" className="form-control" rows="3" onChange={(e) => setPostArticle(e.target.value)} />
         </div>

         <button type="button" className="btn btn-primary" id="submit-btn" onClick={sendData}> 
            +
         </button>
      </form>
   );
}

export default connect(null, {addPost})(AddStory);
