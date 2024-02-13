import EMPLOYEDATE from './employeedate';



function EMPLOYEDETAILS(props){

    return(
        <div>
        <div className='Employee-details'>
        <div className='Employee-details-dob'>
        <EMPLOYEDATE date={props.dob}/>
        </div>
        <div><h2>{props.name}</h2></div>
        <div className='Employee-details-exp'>{props.exp}</div>
        
    </div>
        </div>
    );
}
export default EMPLOYEDETAILS