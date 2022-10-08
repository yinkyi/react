import { useState,useEffect,useCallback } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from 'react-router-dom';
import CommentsList from './CommentsList';
import LoadingSpinner from '../UI/LoadingSpinner';
const Comments = () => {
  const {sendRequest,status,data:commentListData}= useHttp(getAllComments);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const param = useParams();
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addCommentHandler=useCallback(()=>{
    sendRequest(param.quoteId)
  },[sendRequest,param.quoteId]);
  useEffect(()=>{
    sendRequest(param.quoteId)
  },[]);
  let comments;
  if(status === "pending"){
    comments =   <div className='centered'>
    <LoadingSpinner></LoadingSpinner>
  </div>; 
  }
  if(status==="completed" && (commentListData && commentListData.length>0)){
    comments = <CommentsList comments={commentListData}></CommentsList>
  }else if(status==="completed" && (!commentListData && commentListData.length === 0 )) {
    comments = <p>No comment yet!!</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={param.quoteId} onAddComment={addCommentHandler}/>}
      <p>Comments...</p>
      {comments}
    </section>
  );
};

export default Comments;
