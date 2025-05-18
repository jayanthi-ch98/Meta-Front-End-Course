const car={
    color:"blue"
}
// const sportsCar = Object.create(car);
const sportscar = car;
sportsCar.speed="fast";
// console.log(sportsCar);
console.log(Object.getPrototypeOf(sportsCar).color)
console.log(sportsCar.color)


for(key in sportsCar){
    console.log("in in",key,":",sportsCar[key])
}
for(key of Object.keys(sportsCar)){
    console.log(key,":",sportsCar[key]);
}
