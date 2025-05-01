var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log("key", ":", key)
}
// for(var key of clothingItem){
//      console.log(key)
// }

for(var key in clothingItem){
    console.log(key)
}