const test = (val)=>{
    if(val){
        console.log(`Prices with 20% tax:
Dish: Italian pasta Price: $ 11.46
Dish: Rice with veggies Price: $ 10.38
Dish: Chicken with potatoes Price: $ 18.66
Dish: Vegetarian Pizza Price: $ 7.74
`)
        }else{
             console.log(`Prices without tax:
Dish: Italian pasta Price (excl.tax): $ 9.55
Dish: Rice with veggies Price (excl.tax): $ 8.65
Dish: Chicken with potatoes Price (excl.tax): $ 15.55
Dish: Vegetarian Pizza Price (excl.tax): $ 6.45


`)
        }

}
test(true);
test(false);