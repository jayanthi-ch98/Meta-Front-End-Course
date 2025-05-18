import React from 'react';
 const Counter=()=>{
	const [count,setCount]=React.useState(0);
	return(
	<div>
        <h1>Counter:{count}</h1>
	<button onClick={()=>setCount(prevcount=>prevcount+1)}>counter increase</button>
	<button onClick={()=>setCount(prevcount=>prevcount-1)}>counter decrease</button>
	</div>
    )
	
 }
 export default Counter;
 