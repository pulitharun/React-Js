import EmployeeInfo from "./EmployeeInfo";
import './EmployeeList.css'

const EmployeeList = props => {

    if (props.infos.length === 0) {
        return <h2 className="employee-list__fallback">Found No Employees</h2>
    }
    return (
        <ul className="employee-list">
            {
                props.infos.map((employee) => (<EmployeeInfo 
                    key={employee.id} 
                    name={employee.name} 
                    expi={employee.expi} 
                    date={employee.date} />))
            }
        </ul>
    )
}
export default EmployeeList;