let answer = prompt("what is your name");
if(typeof(answer)==='string'){
    var heading = document.createElement('h1')
    heading.innerText="Adding a heading elememnt";
    document.body.append(heading)
}