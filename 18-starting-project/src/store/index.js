// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';
const store = configureStore({
    reducer:{counter:counterReducer,auth:authReducer}
})



export default store;
// const counterReducer = (state={counter:0},action) =>{
//     if(action.type=="increment"){
//         return{
//             counter:state.counter+1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type=="increase"){
//         return{
//             counter:state.counter+action.amount,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type=="decrement"){
//         return{
//             counter:state.counter-1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type=="toggle"){
//         return{
//             counter:state.counter,
//             showCounter:!state.showCounter
//         }
//     }
//     return state;
    
// }

// const store = createStore(counterSlice.reducer);

// export default store;



//const counterSubscriber = ()=>{
//     const latest_state = store.getState();
//     console.log(latest_state);
// }

// store.subscribe(counterSubscriber);
// store.dispatch({type:"increment"});
// store.dispatch({type:"decrement"}); 