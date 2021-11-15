import logo from './logo.svg';
import './App.css';
import ReducerCount from './Components/ReducerCount/ReducerCount';
import { useReducer, useState } from 'react';

const initialState = {count:0}
const reducer = (state,action) =>{

} 

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
    </div>    
    
  );
}

export default App;
