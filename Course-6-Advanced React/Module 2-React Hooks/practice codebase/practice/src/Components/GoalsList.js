const GoalsList=(props)=>{
const {form}=props;
return(
    <ul>
        {form.map((item)=>{
            return(
                <li key={item.name}>
                    <p>{item.name} by {item.by}</p>
                </li>
            )
        })}
    </ul>
)
}
export default GoalsList;