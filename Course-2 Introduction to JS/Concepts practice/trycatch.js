function divide(a,n){
    if(n==0){
        console.log("inside zero")
         throw new Exception("Invalid number to be divided")
        //  throw new Exception()

    }
    else {
        return a/n
    }
}
try{
    console.log(divide(2,0))
}catch(err){
    console.log(err.name+":"+err.message)
}
console.log("but program executed")
typeof(a) == "number"