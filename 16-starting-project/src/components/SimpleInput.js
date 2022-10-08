import useInput from '../hooks/user-input';
const SimpleInput = (props) => {
  const validateName = (value)=>{
    return value.trim() !== ""
  }
  const validatEmail = (value)=>{
    return value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }
  const {
        value:enterName,
        isValueValid:isNameValid,
        hasError:nameInputHasError,
        enterValueBlurHandler:enterNameBlurHandler,
        enterValueChangeHandler:enterNameChangeHandler,
        reset:resetName,
       } = useInput(validateName);
  const {
        value:enterEmail,
        isValueValid:isEmailValid,
        hasError:emailInputHasError,
        enterValueBlurHandler:enterEmailBlurHandler,
        enterValueChangeHandler:enterEmailChangeHandler,
        reset:resetEmail,
       } = useInput(validatEmail);
  



  let formisValid= false;
  if(isNameValid && isEmailValid){
    formisValid = true
  }
  // useEffect(()=>{
  //   if(isValidInput){
  //     console.log("input is valid")
  //   }
  // },[inputName])

  const submitFormHandler=(event)=>{
    event.preventDefault();
    // beforesubmitName();
    // beforesubmitEmail();
    if(!formisValid){
      return;
    }
    
    resetName();
    resetEmail();
  }
  

  return(
    <form onSubmit={submitFormHandler}>
      <div className={!nameInputHasError?'form-control':'form-control invalid'}>
        <label htmlFor='name'>Your Name</label>
        <input 
            type='text'
            id='name' 
            value={enterName} 
            onBlur ={enterNameBlurHandler}
            onChange={enterNameChangeHandler}/>
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={!emailInputHasError?'form-control':'form-control invalid'}>
        <label htmlFor='name'>Your Email</label>
        <input 
            type='email'
            id='email' 
            value={enterEmail} 
            onBlur ={enterEmailBlurHandler}
            onChange={enterEmailChangeHandler}/>
        {emailInputHasError && <p className='error-text'>Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
