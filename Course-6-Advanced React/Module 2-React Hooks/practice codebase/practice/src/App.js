import logo from './logo.svg';
import './App.css';
import GoalsList from './Components/GoalsList';
import GoalForm from './Components/GoalForm';
import { useState } from 'react';
import ReducerUsage from './Components/ReducerUsage';

function App() {
  const [form,setForm]=useState([])
  return (
    <div className="App">
       {/* <h1>Add goals to be completed</h1>
      <main>
        <GoalForm form={form} setForm={setForm}/>
        <GoalsList form={form}/>
      </main> */}

      {/* code to use useReducer hook */}
      <ReducerUsage/>
    </div>
  );
}

export default App;
