function DessertsList(props) {
  // const { data } = props;
  // const filtereddata = (data.filter((item) => item.calories <= 500));
  // filtereddata.sort((a,b)=>a.calories-b.calories)
  return (
    <ul>
      {/* {filtereddata.map((item => {
        return (
          <li>{item.name}-{item.calories} cal</li>
      )
    }))}
   */}

   {
    props.data.filter((item)=> {return item.calories<=500}).sort((a,b)=>{return a.caloties-b.calories}).map((item)=>{
      return <li>{item.name}-{item.calories} cal</li>
    })
   }
    </ul>
  );
}

export default DessertsList;
