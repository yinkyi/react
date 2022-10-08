import { useState,useRef } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './AuthForm.module.css';
import useHttp from '../../hooks/use-http';
import apiKey from '../../apiKey';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
const AuthForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const {sendRequest,error,isLoading} = useHttp();
  const emailInputRef = useRef('');
  const passwordInputRef = useRef('');
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const afterRequest = (data)=>{
    if(isLogin){
      const expirationTime=new Date((new Date().getTime()+(+data.expiresIn*1000)));
      dispatch(authActions.login({
        token:data.idToken,
        expiredTime:expirationTime.toISOString()
      })); 
      
      history.replace('/profile');
    
    }else{
      console.log(data);
    }
    
  }
  const onSubmitHandler = (event)=>{
      event.preventDefault();
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
      let url ="";
      if(isLogin){
         url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+apiKey;
       
      }else{
         url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+apiKey;
        
      }
      sendRequest({
        url:url,
        method:"POST",
        body:{
          email,
          password,
          returnSecureToken:true
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
                
        },            
      },afterRequest.bind(null));
      

  };
  if(error){
    console.log(error);
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={onSubmitHandler}>
        { error &&  <div className={classes.control}>
          <p className= {`centered ${classes.error}`} >{error}</p>
        </div>}
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordInputRef} required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
