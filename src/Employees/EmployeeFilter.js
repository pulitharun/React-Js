import './ExpenseFilter.css'

const EmployeeFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return(
        <div className="employees-filter">
            <div className="employees-filter__control" >
                <label> Filter by year :</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2024'> 2024</option>
                    <option value='2023'> 2023</option>
                    <option value='2022'> 2022</option>
                    <option value='2021'> 2021</option>
                    <option value='2020'> 2020</option>
                    <option value='2019'> 2019</option>
                </select>
            </div>
        </div>
    )

}

export default EmployeeFilter;