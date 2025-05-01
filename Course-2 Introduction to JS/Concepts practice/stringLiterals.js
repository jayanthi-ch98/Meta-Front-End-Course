
//Traditional string notation gives errror when writing multiline strings
// var noMultilineString="Welcome to the practice of s
// tring literals in Javascript"

//String Literal allowed multi line strings
var MultilineString=`Welcome to the practice of s
tring literals in Javascript`


/* interpolation allowed in string literals*/
let check=`normal string is being written`;
let fix=`writing string to be used for interpolations`

console.log(`${check} checking strings are merged easily or not ${fix}`)