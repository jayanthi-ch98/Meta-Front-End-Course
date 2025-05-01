import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {
    const { mealsList } = useMealsListContext();
    return (
        <>
            <h1>This is Counter using Context API</h1>
            <h2>No of Meals: {mealsList.length}</h2>
        </>
    );
};

export default Counter;