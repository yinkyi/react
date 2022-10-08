import React,{useState,useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
const AddUser = props=>{
    const enterUsernameRef = useRef('');
    const enterAgeRef = useRef('');

    // const [enterUsername,setEnterUsername]=useState('');
    // const [enterAge,setEnterAge]=useState('');

    const [errorMessage,setErrorMessage]=useState();
    const addUserHandler = (event)=>{
        event.preventDefault();
        let enterName=enterUsernameRef.current.value;
        let enterAge=enterAgeRef.current.value;

        if(enterAge.trim().length === 0 || enterName.trim().length === 0){
            setErrorMessage({
                "title":"Invalid Input",
                "message":"Please enter a valid name and age (non-empty values)."
            });
            return;
        }else if(+enterAge < 1){
            setErrorMessage({
                "title":"Invalid age",
                "message":"Please enter a valid age (>0)."
            });
            return;
        }        
        let UserData={
            "id":Math.random().toString(),
            "name":enterName,
            "age":enterAge
        }
        enterUsernameRef.current.value='';
        enterAgeRef.current.value ='';
        // setEnterUsername('');
        // setEnterAge('');
        props.onAddUser(UserData);
        
    }
    // const userNameChangeHandler = (event)=>{
    //     setEnterUsername(event.target.value);
    // };
    // const ageChangeHandler = (event)=>{
    //     setEnterAge(event.target.value);
        
    // };
    const errorHandler = (event)=>{
        setErrorMessage(null);
    }
    return(
        <React.Fragment>
            {errorMessage && <ErrorModel onConfirm={errorHandler} title={errorMessage.title} message={errorMessage.message}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>User Name</label>
                    <input id="username" type="text" ref={enterUsernameRef}/>
                    <label htmlFor='age' >Age (Years)</label>
                    <input id="age"  type="number" ref={enterAgeRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
        
        
    )
};
export default AddUser;
