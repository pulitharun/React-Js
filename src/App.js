import logo from './logo.svg';
import './App.css';
import EmployeeInfo from './Employees/EmployeeInfo';
import Employees from './Employees/Employees';
import NewEmployee from './Employees/NewEmployee';
import { useEffect, useState } from 'react';
import EmployeeForm from './Employees/EmployeeForm';
import { EmployeeContext } from './Employees/employee-context';
import EmployeeContextProvider from './Employees/employee-context';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { sendEmployeeData } from './Store';


const App = () => {

  const infos = useSelector(state => state.infos);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(sendEmployeeData(infos))
    },
    [infos, dispatch]
  );

  return (
    <EmployeeContextProvider >
      <div>
        <NewEmployee>
          <EmployeeForm />
        </NewEmployee>
        <Employees />
      </div>
    </EmployeeContextProvider>
  );
}
export default App;
