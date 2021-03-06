import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/mypostActions';

import './PastPosted.css';

const PastPosted = props => {

   useEffect(() => {
      props.fetchPosts(props.authorName);
   }, []);


   const postItems = props.myPosts.reverse().map(post => (
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
   myPosts: state.myposts.myposts,
   authorName: state.userdata.data
});

export default connect(mapStateToProps, {fetchPosts})(PastPosted);
