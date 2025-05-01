import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
  const { mealsList } = useMealsListContext();
  return (
    <>
      <h1>This is Meals List using Context API</h1>
      <ul>
        {mealsList.map((meal,index) => (
        <h2 key={index}>{meal}</h2>
        ))}
      </ul>
    </>
  );
};

export default MealsList;