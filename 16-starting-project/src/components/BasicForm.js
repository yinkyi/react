import useInput from "../hooks/user-input";
const BasicForm = (props) => {
  const {
    value:enterFirstName,
    isValueValid:isFirstNameValid,
    hasError:firstNameInputHasError,
    enterValueBlurHandler:enterFirstNameBlurHandler,
    enterValueChangeHandler:enterFirstNameChangeHandler,
    reset:resetFirstName,
   } = useInput((value)=>{return value.trim() !== ""});
   const {
    value:enterLastName,
    isValueValid:isLastNameValid,
    hasError:lastNameInputHasError,
    enterValueBlurHandler:enterLastNameBlurHandler,
    enterValueChangeHandler:enterLastNameChangeHandler,
    reset:resetLastName,
   } = useInput((value)=>{return value.trim() !== ""});
  const {
    value:enterEmail,
    isValueValid:isEmailValid,
    hasError:emailInputHasError,
    enterValueBlurHandler:enterEmailBlurHandler,
    enterValueChangeHandler:enterEmailChangeHandler,
    reset:resetEmail,
   } = useInput((value)=>{return value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)});

   let formisValid = false;
   if(isLastNameValid && isFirstNameValid && isEmailValid){
    formisValid = true;
   }
   const submitFormHandler=(event)=>{
    event.preventDefault();
    // beforesubmitName();
    // beforesubmitEmail();
    if(!formisValid){
      return;
    }
    
    resetFirstName();
    resetLastName();
    resetEmail();
  }
  return (
    <form onSubmit={submitFormHandler}>
      <div className={!firstNameInputHasError?'form-control':'form-control invalid'}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input 
              type='text' 
              id='firstName' 
              value={enterFirstName} 
              onChange={enterFirstNameChangeHandler}
              onBlur={enterFirstNameBlurHandler}
          />
          {firstNameInputHasError && <p className='error-text'>First Name must not be empty</p>}
        </div>
        <div className={!lastNameInputHasError?'form-control':'form-control invalid'}>
          <label htmlFor='name'>Last Name</label>
          <input 
              type='text' 
              id='lastName' 
              value={enterLastName} 
              onChange={enterLastNameChangeHandler}
              onBlur={enterLastNameBlurHandler}
          />
           {lastNameInputHasError && <p className='error-text'>Last Name must not be empty</p>}
        </div>
      </div>
      <div className={!emailInputHasError?'form-control':'form-control invalid'}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
            type='email'
            id='email' 
            value={enterEmail} 
            onBlur ={enterEmailBlurHandler}
            onChange={enterEmailChangeHandler}/>
        {emailInputHasError && <p className='error-text'>Email must be valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
