import EmployeeForm from "./EmployeeForm";
import './NewEmployee.css'

const NewEmployee = ({children}) => {
 return (
    <div className="new-employee">
        {children}
    </div>
 );   
}

export default NewEmployee;