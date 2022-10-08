import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import classes from './NewCommentForm.module.css';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const {sendRequest,status,error}= useHttp(addComment);
  
  
  const {quoteId,onAddComment}=props;
  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({
      quoteId:quoteId,
      commentData:{
        text:commentTextRef.current.value
      }
    })
    // optional: Could validate here

    // send comment to server
  };
  useEffect(()=>{
    if(status === "completed" && !error){
      //getCommentList(param.quoteId);
      commentTextRef.current.value="";
      onAddComment();
    }
  },[status,error,onAddComment])
  if(error){
    return <p className="centered focused">{error}</p>
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
