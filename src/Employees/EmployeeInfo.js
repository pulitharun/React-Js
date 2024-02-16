import EmployeeDate from './EmployeeDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
import React, { useState } from 'react';

const EmployeeInfo = (props) => {
    //let name = props.name;
    const [name, setName] = useState(props.name);

    const clickHandler = () => {
        console.log('clicked..');
        setName('Changed..!');
    }

    return (
        <li>
            <Card className='employee-info'>
                <EmployeeDate date={props.date} />
                <div className="employee-info_description">
                    <h2>{name}</h2>
                    <div className="employee-info_expi">{props.expi}</div>
                </div>
            </Card>
        </li>
    )
}
export default EmployeeInfo;