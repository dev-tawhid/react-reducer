import logo from './logo.svg';
import './App.css';
import ReducerCount from './Components/ReducerCount/ReducerCount';
import { useReducer, useState } from 'react';
import PatientManagement from './Components/PatientManagement/PatientManagement';



function App() {

  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>    
    
  );
}

export default App;
