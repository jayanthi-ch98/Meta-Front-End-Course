
var string = "Some text before [{||}] and some after";
console.log(string.match(/\[\{\|\|\}\]/)? "match found:"+string.match(/\[\{\|\|\}\]/)[0]:null );

