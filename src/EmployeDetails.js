import EMPLOYEDATE from './employeedate';



function EMPLOYEDETAILS(props){

    return(
     <div>
            <div className='Employee-details'></div>
                 <div><h2>{props.name}</h2></div>
                 <EMPLOYEDATE date={props.dob}/>
                 <div>{props.exp}</div>
    </div>
    );
}
export default EMPLOYEDETAILS
