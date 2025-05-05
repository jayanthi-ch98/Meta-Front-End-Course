import {useState} from "react";
const ControlledComponent = () => {
    const [name,setName]=useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Name:"+name)
        setName("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                     value={name} 
                     placeholder="Enter Name"
                     onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </fieldset>
        </form>
    )

}
export default ControlledComponent;