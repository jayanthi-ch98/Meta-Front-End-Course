function divide(a,n){
    if(n==0){
        console.log("inside zero")
        throw new Exception("Invalid number to be divided")
    }
    else {
        return a/n
    }
}
try{
    console.log(divide(2,0))
}catch(err){
    console.log("Divide by zero exception",err)
}
console.log("but program executed")
typeof(a) == "number"