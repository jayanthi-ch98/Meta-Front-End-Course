import { useRef, useState } from "react";
function Form(){

    const [form,setForm]=useState(
        {firstName:"Jayanthi",lastName:"Challagundla",email:"jayanthi0c@gmail.com"}
    )
    const inputEl=useRef(null);
    function handleClick(){
        inputEl.current.focus();
    }


    function handleSubmit(e){
        e.preventDefault();
        console.log("form Submitted")
        // setForm({firstName:"",lastName:"",email:""})
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label>FirstName:</label>
            <input type="text"  value={form.firstName} onInput={(e)=>setForm({...form,firstName:e.target.value})}/>
            
            </div>
            <br></br>
              <div><label>LastName:</label>
            <input type="text"  value={form.lastName} onInput={(e)=>setForm({...form,lastName:e.target.value})}/>
            </div>
            <br></br>
            <div>
              <label>Email:</label>
            <input type="text" value={form.email} ref={inputEl} onInput={(e)=>setForm({...form,email:e.target.value})}/>
            </div>
            <br></br>
            <button type="submit" onClick={handleClick}>Submit</button>
        </form>
    )
}
export default Form;