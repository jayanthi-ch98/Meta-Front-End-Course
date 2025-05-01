function Button(){
    const clickHandler=()=>{
        console.log("Button Clicked");
    }
    const hoverHandler=()=>{
        console.log("Button Hovered");
    }
    return(
        <>
        <button onClick={clickHandler}>Button Click</button>
        <button onMouseOver={hoverHandler}>Mouse over</button>
        
        </>
    )
}
export default Button;