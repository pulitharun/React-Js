import EmployeeForm from "./EmployeeForm";
import './NewExpense.css'

const NewEmployee = ({children}) => {
 return (
    <div className="new-employee">
        {children}
    </div>
 );   
}

export default NewEmployee;