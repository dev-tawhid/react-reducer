import React, { useReducer, useState } from 'react';

const initialState = {count:10}
const reducer = (state,action) =>{
    console.log(state,action);
    switch (action.type){
        case 'INCREMENT':
            return  {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1};
        default: return state;
    }
} 
const ReducerCount = () => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
 

    return (
        <div>
            <h2>Count :{state.count}</h2>
           
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
        </div>
    );
};

export default ReducerCount;