import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import classes from "./ErrorModel.module.css";
import Button from "./Button";

const BackDrop = props =>{
    return (
        <div  className={classes.backdrop} onClick={props.onConfirm} />
    )
}
const ModelDiv = props=>{
    return(
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    )
}
const ErrorModel = props =>{

    return(
        <React.Fragment>
          {ReactDom.createPortal(<BackDrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop-root'))}
          {ReactDom.createPortal(<ModelDiv
                                    title={props.title}
                                    message={props.message}
                                    onConfirm={props.onConfirm}/>,document.getElementById('overlay-root'))}    
            
            
        </React.Fragment>
        
    )
}
export default ErrorModel;