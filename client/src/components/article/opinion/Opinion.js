import React from 'react';
import {updateOpinion, fetchOpinion} from '../../../actions/articleActions';
import {connect} from 'react-redux';

import "./Opinion.css";
import {ReactComponent as UpVote} from '../../../images/like.svg';
import {ReactComponent as DownVote} from '../../../images/like-2.svg';

const Opinion = props => {
   function upClick(e){
      e.preventDefault();
      if(props.opinion === 1)
         props.updateOpinion(0);
      else
         props.updateOpinion(1);
   }

   function downClick(e){
      e.preventDefault();
      if(props.opinion === -1)
         props.updateOpinion(0);
      else
         props.updateOpinion(-1);
   }

   return(
      <div>
         <UpVote className={props.opinion === 1? "arrow-clicked arrow" : "arrow"} onClick={upClick}/>
         <DownVote className={props.opinion === -1? "arrow-clicked arrow" : "arrow"} onClick={downClick}/>
      </div>
   );
}

const mapStateToProps = state => ({
   opinion: state.articles.opinion
})

export default connect(mapStateToProps, {updateOpinion, fetchOpinion}) (Opinion);
