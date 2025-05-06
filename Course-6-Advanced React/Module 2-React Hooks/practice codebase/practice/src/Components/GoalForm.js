import { useState } from "react";
const GoalForm=(props)=>{
const {form,setForm}=props;
  const [goals,setGoals]=useState({name:"",by:""});
  const handleAdd=(e)=>{
    e.preventDefault();
    setGoals({name:"",by:""});
    setForm([...form,goals]);
  }
    const changeHandler=(e)=>{
    setGoals({...goals,[e.target.name]:e.target.value})
  }
  return(
    <form>
        <fieldset>
            <label>Goal:</label>
            <input type="text" name="name" value={goals.name} placeholder="Goal" onChange={changeHandler}/>
             <label>By:</label>
            <input type="text" name="by" value={goals.by} placeholder="by" onChange={changeHandler}/>
        </fieldset>
        <button  onClick={handleAdd}>Add</button>
    </form>
  )
}
export default GoalForm;