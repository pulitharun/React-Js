import './EmployeeDate.css'

const EmployeeDate =  (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className='employee-date'>
                <div className='employee-date__month'>{month}</div>
                <div className='employee-date__year'>{year}</div>
                <div className='employee-date__day'>{day}</div>
            </div>
    );
}

export default EmployeeDate;