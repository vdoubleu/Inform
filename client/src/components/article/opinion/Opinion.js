import React, {useEffect} from 'react';
import {updateOpinion, fetchOpinion} from '../../../actions/articleActions';
import {connect} from 'react-redux';

import "./Opinion.css";
import {ReactComponent as UpVote} from '../../../images/like.svg';
import {ReactComponent as DownVote} from '../../../images/like-2.svg';

const Opinion = props => {

   useEffect(() => {
      props.fetchOpinion({"user": props.user, "articleId": (props.currArticle + 1)});
   }, [props.currArticle]);

   function upClick(e){
      e.preventDefault();
      if(props.opinion === 1)
         props.updateOpinion({"value": 0, "id": (props.currArticle + 1), "user": props.user});
      else
         props.updateOpinion({"value": 1, "id": (props.currArticle + 1), "user": props.user});
   }

   function downClick(e){
      e.preventDefault();
      if(props.opinion === -1)
         props.updateOpinion({"value": 0, "id": (props.currArticle + 1), "user": props.user});
      else
         props.updateOpinion({"value": -1, "id": (props.currArticle + 1), "user": props.user});
   }

   return(
      <div>
         <UpVote className={props.opinion === 1? "arrow-clicked arrow" : "arrow"} onClick={upClick}/>
         <DownVote className={props.opinion === -1? "arrow-clicked arrow" : "arrow"} onClick={downClick}/>
      </div>
   );
}

const mapStateToProps = state => ({
   opinion: state.articles.opinion,
   currArticle: state.articles.currentID,
   user: state.userdata.data
})

export default connect(mapStateToProps, {updateOpinion, fetchOpinion}) (Opinion);
