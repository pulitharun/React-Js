import EMPLOYEDETAILS from './EmployeDetails';
import './employee.css'

function EMPLOYEE(props){

    return(
    <div className='employee'>
    <h1>Employee Details</h1>
      <EMPLOYEDETAILS name={props.emplo[0].name} dob={props.emplo[0].dob} exp={props.emplo[0].exp}></EMPLOYEDETAILS>
      <EMPLOYEDETAILS name={props.emplo[1].name} dob={props.emplo[1].dob} exp={props.emplo[1].exp}></EMPLOYEDETAILS>
      <EMPLOYEDETAILS name={props.emplo[2].name} dob={props.emplo[2].dob} exp={props.emplo[2].exp}></EMPLOYEDETAILS>
      <EMPLOYEDETAILS name={props.emplo[3].name} dob={props.emplo[3].dob} exp={props.emplo[3].exp}></EMPLOYEDETAILS>
    </div>

    );
}
export default EMPLOYEE;