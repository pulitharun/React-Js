import { useState } from 'react';
import './ExpenseForm.css'

import { useContext } from 'react';
import { ExmployeeContext } from './employee-context';
import { useDispatch } from 'react-redux';

const EmployeeForm = (props) => {

   // const { onSaveEmployeeData } = useContext(EmployeeContext);
   const dispatch = useDispatch();

    const [enteredName, setEnteredName] = useState('');
    const [enteredExpi, setEnteredExpi] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const expiChangeHandler = (event) => {
        setEnteredExpi(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const employeeData = {
            name: enteredName,
            expi: enteredExpi,
            date: new Date(enteredDate)
        }

        //console.log(employeeData);
        // props.onSaveEmployeeData(employeeData);
        //onSaveEmployeeData(employeeData);
        dispatch({type:"ADD_EMPLOYEE", payload: employeeData});

        setEnteredName('');
        setEnteredExpi('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-employee__controls">
                <div className="new-employee__control">
                    <label>Name</label>
                    <input type="text" onChange={nameChangeHandler} value={enteredName} />
                </div>


                <div className="new-employee__control">
                    <label>Expi</label>
                    <input type="number" min ="2"  max= "9" onChange={expiChangeHandler} value={enteredExpi} />
                </div>

                <div className="new-employee__control">
                    <label>Date</label>
                    <input type="date" min="2018-12-31" max="2023-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>

            <div className="new-employee__controls">
                <button type="submit" > Add Employee </button>
            </div>
        </form>
    );
}

export default EmployeeForm;