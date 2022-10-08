import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';
const animationTiming = {
    enter:400,
    exit:1000
}
const modal = (props) => {    
    // const cssClasses=['Modal',props.show == "entering"?'ModelOpen':
    //                  (props.show == "exited"?'ModelClose':null)];
    //classNames={fade-slide}
     console.log(props.show);
    return(
        <CSSTransition
        in={props.show}
        timeout={animationTiming} 
        mountOnEnter
        unmountOnExit
        classNames={{
            enter: '',
            enterActive: 'ModelOpen',
            exit: '',
            exitActive: 'ModelClose',
           }}
        >          
            <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.close}>Dismiss</button>
            </div> 
        </CSSTransition>
        
    )
};

export default modal;