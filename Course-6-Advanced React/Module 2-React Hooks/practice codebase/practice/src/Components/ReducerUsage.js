import {useReducer} from 'react'
const ReducerUsage=()=>{

    const reducer = (state,action)=>{
        if(action.type==='buy_groceries'){return {money : state.money-10000}}
        if(action.type==='earn_money'){return {money : state.money+70000}}
        if(action.type==='pay_rent'){return {money : state.money-20000}}



    }
    const initialstate = {money:70000}
    const [state,dispatch]=useReducer(reducer,initialstate);
    return(
        <div>
            <h1>Wallet : {state.money}</h1>
            <div>
                <button onClick={()=>dispatch({type:'buy_groceries'})}>Buy Groceries</button>
                <button onClick={()=>dispatch({type:'earn_money'})}>Salary Credited</button>
                <button onClick={()=>dispatch({type:'pay_rent'})}>Pay Rent</button>
            </div>
        </div>
    )
}
export default ReducerUsage;