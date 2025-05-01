import React from "react";

const MealsContext = React.createContext();
const initialmealsList = ["burger","pizza","pasta","noodles","chowmin"];
const MealsProvider=({children})=>{
    const [mealsList, setMealsList] = React.useState(initialmealsList);
    return(
        <>
        <h1>This is meals List Provider Context</h1>
        <MealsContext.Provider value={{mealsList}}>
            {children}
        </MealsContext.Provider>
        </>
    )

}
export const useMealsListContext=()=>React.useContext(MealsContext);

export default MealsProvider;