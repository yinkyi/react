import classes from './ProfileForm.module.css';
import useHttp from '../../hooks/use-http';
import apiKey from '../../apiKey';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
const ProfileForm = () => {
  const history = useHistory();
  const token = useSelector(state=>state.auth.token);
  const {sendRequest,error,isLoading} = useHttp();
  const passwordInputRef = useRef('');

  const afterRequest=(data)=>{
    console.log(data);
    history.replace('/');
  }
  const onSubmitHandler=(event)=>{
    event.preventDefault();
    sendRequest({
      url:"https://identitytoolkit.googleapis.com/v1/accounts:update?key="+apiKey,
      method:"POST",
      body:{
        idToken:token,
        password:passwordInputRef.current.value,
        returnSecureToken:true
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
                
      },            
    },afterRequest.bind(null));
  }
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
