import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../actions/mypostActions';

import './AddStory.css';

const AddStory = props => {
   const catArr = ["Catagory", "option 1", "option 2", "option 3"];

   const [postTitle, setPostTitle] = useState("");
   const [postArticle, setPostArticle] = useState("");
   const [postCat, setPostCat] = useState(catArr[0]);

   function sendData(e){
      if(postTitle !== "" && postArticle !== ""){
         const newPost = {
            title: postTitle,
            body: postArticle,
            category: postCat,
            author: props.userData.name,
            time: (new Date).getTime()
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
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="catDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {postCat} </button>
                  <div className="dropdown-menu" aria-labelledby="catDropdownMenu">
                     <button className="dropdown-item" type="button" onClick={()=>setPostCat(catArr[1])}>{catArr[1]}</button>
                     <button className="dropdown-item" type="button" onClick={()=>setPostCat(catArr[2])}>{catArr[2]}</button>
                     <button className="dropdown-item" type="button" onClick={()=>setPostCat(catArr[3])}>{catArr[3]}</button>
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

const mapStateToProps = state => ({
   userData: state.userdata.data
})

export default connect(mapStateToProps, {addPost})(AddStory);
