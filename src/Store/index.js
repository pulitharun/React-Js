import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'


const DUMP_EMPLOYEES = [
    { id: 'e1', name: 'qwe', expi: 8, date: new Date(2020, 4, 25) },
    { id: 'e2', name: 'qwer', expi: 7, date: new Date(2019, 5, 12) },
    { id: 'e3', name: 'qwert', expi: 4, date: new Date(2023, 6, 6) },
    { id: 'e4', name: 'qwerty', expi: 5, date: new Date(2021, 3, 19) },
];

const initialState = {infos: DUMP_EMPLOYEES}
const employeeSlice = createSlice({
    name : 'employee',
    initialState : initialState,
    reducers: {
        addEmployee(state,action){
            const employeeData = {
                ...action.payload,
                id: Math.random().toString()
              };
            state.infos.push(employeeData)

        },
        removeEmployee(state,action){ }
    }
})

export const sendEmployeeData = (employeeData) => {
    return async (dispatch) => {
        const sendRequest = async() => {
            const response = await fetch('https://employees-173cf-default-rtdb.firebaseio.com/employee.json', {
                method: 'PUT',
                body : JSON.stringify(employeeData)
                });
                if (!response.ok){
                    throw new Error('Sending employee data failed');
                }
        };

        try {
            await sendRequest();
        } catch (error){
            console.log(error);
        }
    };
}

const employeeStore = configureStore({
    reducer : employeeSlice.reducer
})
export default employeeStore;
export const employeeActions = employeeSlice.actions;