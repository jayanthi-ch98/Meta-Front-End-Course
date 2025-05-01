const array=[0,10,20,30,60,70,49.31]

//working with for-each on arrays

array.forEach((element,index)=>{console.log(`${index}:${element}`)});


//working with filter
let newarray=array.filter((element)=>{
    return element>30
})
console.log(`In filter function${newarray}`);
console.log(array)


//working with map
let newarray1=array.map((element)=>{
    return element*element;
})
console.log(`In map function${newarray1}`);
console.log(array)