import Counter from './Counter'
import './App.css';
import {useState} from 'react';

function App() {
  const date = new Date();
  const time = date.getHours() + ':' + date.getMinutes() ;

  
  const [day, setDay]=useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2020);
  const changeDay = (value) => {
    setDay(day + value);
  };
  const changeMonth = (value) => {
    setMonth(month + value);
  };
  const changeYear = (value) => {
    setYear(year + value);
  };



  
  return (
    <div className="App">
      <header className="App-header">
       <Counter Time={time} Day={day} changeDay={changeDay} Month={month} changeMonth={changeMonth} Year={year} changeYear={changeYear}/>
      </header>
    </div>
  );
}

export default App;
