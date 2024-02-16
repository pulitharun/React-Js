import { useState, useContext } from "react";
import Card from "../UI/Card";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeInfo from "./EmployeeInfo";
import "./Expenses.css";
import EmployeeList from "./EmployeeList";
import { EmployeeContext } from "./employee-context";
import { useSelector } from "react-redux";

const Employees = (props) => {

    // const expenseCtx = useContext(ExpenseContext);
    // THIS FUCNTION WILL BE EXECUTED BY REACT REDUX WHEN YOU USE useSELECTOR
    // ReactREdux will automatically sets subscription for this component.
    const infos = useSelector(state => state.infos);

    const [filteredYear, setFilteredYear] = useState("2019");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredEmployees = infos.filter(employee => {
        return employee.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="employees">
            <EmployeeFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <EmployeeList infos={filteredEmployees} />
        </Card>
    )
}
export default Employees;