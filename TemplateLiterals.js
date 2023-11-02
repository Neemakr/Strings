//Using backticks
let name = "Jack";
console.log(`Hi ${name}!`);

console.log("Hi this is 'demo'");

//Multi-line
console.log(`Hi
This 
is 
a n
example
of 
string
templates 
using
back tits`)

//passing template literals as an argument to a function
function greet(name){
    console.log(`Hi ${name}`);
}
greet`Neema`;