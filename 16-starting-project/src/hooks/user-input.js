import { act } from '@testing-library/react';
import {useReducer} from 'react';

let initialInputState = {
    value:'',
    isTouch:false
}
const inputReducer = (state,action) =>{
    if(action.type == "INPUT"){
        return {value:action.value,isTouch:state.isTouch};
    }
    if(action.type == "BLUR"){
        return {value:state.value,isTouch:true};
    }
    if(action.type == "RESET"){
        return {isTouch:false,value:''};
    }
    return initialInputState;
}
const useInput = (validateValue)=>{
    const [inputState,dispatch]=useReducer(inputReducer,initialInputState);

    const isValueValid = validateValue(inputState.value);
    const hasError = !isValueValid && inputState.isTouch?true:false; 

    const enterValueChangeHandler = (event)=>{
        dispatch({type:'INPUT',value:event.target.value});
      }
      const enterValueBlurHandler = (event)=>{
        dispatch({type:'BLUR',value:true});
  
      }
   
    const reset = ()=>{
        dispatch({type:'RESET'});
    }
    return{
        reset,isValueValid,hasError,value:inputState.value,enterValueBlurHandler,enterValueChangeHandler
    }
}
export default useInput;