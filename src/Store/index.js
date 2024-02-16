import {createStore} from 'redux';


const DUMP_EMPLOYEES = [
    { id: 'e1', name: 'qwe', expi: 8, date: new Date(2020, 4, 25) },
    { id: 'e2', name: 'qwer', expi: 7, date: new Date(2019, 5, 12) },
    { id: 'e3', name: 'qwert', expi: 4, date: new Date(2023, 6, 6) },
    { id: 'e4', name: 'qwerty', expi: 5, date: new Date(2021, 3, 19) },
];

const employeeReducer = (state= {infos: DUMP_EMPLOYEES}, action) => {
    const updatedEmployees = [...state.infos]

    if(action.type === 'ADD_EMPLOYEE') {
        const employeeData = {
            ...action.payload,
            id: Math.random().toString()
          };
        updatedEmployees.push(employeeData)
        return {infos:  updatedEmployees}
    }

    if(action.type === 'REMOVE_EMPLOYEE') {
        // logic to remove employee
    }
    return state;
}

const employeeStore = createStore(employeeReducer);

export default employeeStore;