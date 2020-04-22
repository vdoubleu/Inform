import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/mypostActions';

import './PastPosted.css';

const PastPosted = props => {

   useEffect(() => {
      props.fetchPosts();
   }, []);

   const postItems = props.myPosts.map(post => (
      <button key={post.id} id={post.id} type="button" className="list-group-item list-group-item-action postButtons">
         <h5> {post.title} </h5>
         <p> {post.body} </p>
      </button>
   ));
   return(
      <div>
         <div className="list-group" id="pastPostList">
            {postItems}
         </div>
      </div>
   );
}

const mapStateToProps = state => ({
   myPosts: state.myposts.myposts
})

export default connect(mapStateToProps, {fetchPosts})(PastPosted);
