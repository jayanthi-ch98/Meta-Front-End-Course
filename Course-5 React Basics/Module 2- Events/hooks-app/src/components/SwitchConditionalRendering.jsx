const SwitchConditionalRendering=()=>{
    let date = new Date();
    let day = date.toLocaleString("en-us",{weekday:"long"});
    let time=date.getTime();
    let condition = (time>6 && time<12);

    switch(day){
        case (day.toLowerCase() === "monday"):
            return <h6>5 more days to go</h6>
        case (day.toLowerCase() === "tuesday"):
            return <h6>4 more days to go</h6>
       case (day.toLowerCase() === "wednesday"):
            return <h6>3 more days to go</h6>
       case (day.toLowerCase() === "thursday"):
            return <h6>2 more days to go</h6>
       case (day.toLowerCase() === "friday"):
            return <h6>yayy! tomorrow is weekend</h6>
      default: return <h6>Take a chill pill and relax</h6>
    }
    // condition? return <h2>Have have had you breakfast?</h2> : return <h2>Have you had your dinner?</h2>
}
export default SwitchConditionalRendering;