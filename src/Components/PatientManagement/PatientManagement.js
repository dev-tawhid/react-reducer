import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../Reducer/PatientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    // console.log(state);
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(nameRef.current.value);
        dispatch({
            type : 'ADD_PATIENT',
            name : nameRef.current.value,
            id : state.patients.length
    })
    nameRef.current.value = '';
    }
    return (
        <div>
            <h2>Patient Management : {state.patients.length} </h2>
            <form onSubmit={handleSubmit} action="">
                <input ref={nameRef}  type="text" />
            </form>
            {state.patients.map(pt => <li onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id}) } key={pt.id} >{pt.name}</li>)}
        </div>
    );
};

export default PatientManagement;