const redux = require('redux');

const counterReducer = (state={counter:0},action)=>{
    if(action.type == "increment"){
        return {
            counter:state.counter+1
        }
    }
    if(action.type == "decrement"){
        return {
            counter:state.counter-1
        }
    }
    return state;
    
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () =>{
    const latest_state = store.getState();
    console.log(latest_state);
}

store.subscribe(counterSubscriber);

store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});
