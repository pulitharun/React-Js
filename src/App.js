import EMPLOYEE from './employee';

function App() {
  const emp=[
    {id:'e1',name:'QWE',dob:new Date(1989,3,4),exp:6},
    {id:'e2',name:'QWER',dob:new Date(1992,7,16),exp:7},
    {id:'e3',name:'QWERT',dob:new Date(1988,9,12),exp:8},
    {id:'e4',name:'QWERTY',dob:new Date(1986,2,7),exp:9},
]


  return (
    <div>
    <EMPLOYEE emplo={emp}/>
    </div>
  );
}

export default App;