const ConditionalComponent=()=>{
    let day = new Date().getDay();
    return(
        (day>0 && day<5)? "Weekday":"Weekend"
    )

}
export default ConditionalComponent;