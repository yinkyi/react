import React, { useState,useEffect, useReducer,useContext,useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from "../UI/Input/Input";
const emailReducer =(prevState,action)=>{
  if(action.type === "USER_INPUT"){
    return {value:action.val,isValid:action.val.includes('@')};
  }
  if(action.type === "INPUT_BLUR"){
    return {value:prevState.value,isValid:prevState.value.includes('@')};
  }
  return {value:'',isValid:false};
}
const passwordReducer=(prevState,action)=>{
  if(action.type === "USER_INPUT"){
    return {value:action.val,isValid:action.val.trim().length > 6};
  }
  if(action.type === "INPUT_BLUR"){
    return {value:prevState.value,isValid:prevState.value.trim().length > 6};
  }
  return {value:'',isValid:false};
}

const Login = (props) => {
  const ctx = useContext(AuthContext);
  const emailRef=useRef();
  const passwordRef=useRef();
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
   const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail]=useReducer(emailReducer,{value:'',isValid:null});
  const [passwordState,dispatchPassword]=useReducer(passwordReducer,{value:'',isValid:null});

  const {isValid:emailIsValid} = emailState;
  const {isValid:passwordIsValid} = passwordState;
  useEffect(()=>{
     const identity = setTimeout(()=>{
      //  console.log(emailState.value.trim().length>6,emailState.value.includes('@'), passwordState.value.trim().length > 6);
      setFormIsValid(
        emailIsValid && passwordIsValid
      )
     },500)
     return(()=>{
       console.log("cleanup");
       clearTimeout(identity);
     })
  },[emailIsValid,passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT",val:event.target.value});
    //setEnteredEmail(event.target.value);

  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"USER_INPUT",val:event.target.value});
    //setEnteredPassword(event.target.value);

  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"INPUT_BLUR"});
    //setEmailIsValid(emailState.value.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({action:"INPUT_BLUR"});
    //setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
      emailRef.current.focus();
    }else{
      passwordRef.current.focus();
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       
          <Input
            ref={emailRef}
            type="email"
            id="email"
            label="E-mail"
            isValid={emailIsValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        
        <Input
            ref={passwordRef}
            type="password"
            id="password"
            label="Password"
            isValid={passwordIsValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
         
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
