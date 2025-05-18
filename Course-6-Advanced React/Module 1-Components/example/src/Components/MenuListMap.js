import data from "../Data/data";
const MenuListMap = () => {
    // return (
    //     <>
    //      <ul>
    //   {data.map((item) => {
    //     return (
    //       <>  
    //     <li key={item.id}>
    //     <h3>{item.title}</h3>
    //     <p><img src={item.image} alt={item.name} height="240" width="240"/></p>
    //     <p>{item.description}</p>
    //     <p>Price : {item.price}</p>
    //     </li>
    //     <br></br>

    //     </>
    //   );
    //   })}
    //  </ul>
    //     </>
    // )

const desserts = [
 {
 title: 'Chocolate Cake',
 description: 'Chocolate cake is a cake flavored with melted chocolate',
 calories: 500,
 }
];

const newDesserts = desserts.map((dessert) => {
return{
 title: dessert.title.toUpperCase(),
 ...dessert,
 kCal: dessert.calories / 1000,
 };
})
console.log(newDesserts);
}
export default MenuListMap