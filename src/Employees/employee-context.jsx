import { createContext, useReducer, useState } from 'react'

export const EmployeeContext = createContext({
    infos: [],
    onSaveEmployeeData: () => { },
});

function employeeReducer(state, action) {
    const updatedEmployees = [...state]

    if(action.type === 'ADD_EMPLOYEE') {
        const employeeData = {
            ...action.payload,
            id: Math.random().toString()
          };
        updatedEmployees.push(employeeData)
    }

    if(action.type === 'REMOVE_EMPLOYEE') {
        // logic to remove employee
    }
    return updatedEmployees;
}

export default function EmployeeContextProvider({ children }) {

    const DUMP_EMPLOYEES = [
        { id: 'e1', name: 'qwe', expi: 8, date: new Date(2020, 4, 25) },
        { id: 'e2', name: 'qwer', expi: 7, date: new Date(2019, 5, 12) },
        { id: 'e3', name: 'qwert', expi: 4, date: new Date(2023, 6, 6) },
        { id: 'e4', name: 'qwerty', expi: 5, date: new Date(2021, 3, 19) },
    ];

    const [employees, dispatch] = useReducer(employeeReducer, DUMP_EMPLOYEES);

    //const [employees, setEmployees] = useState(DUMP_EMPLOYEES);

    const addEmployeeHandler = employee => {
        dispatch(
            {
                type: 'ADD_EMPLOYEE',
                payload: employee
            }
        );
    }

    const contextValue = {
        infos: employees,
        onSaveEmployeeData: addEmployeeHandler
      };


      return <EmployeeContext.Provider value={contextValue}>
            {children}
      </EmployeeContext.Provider>
}