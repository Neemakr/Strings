let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer1);
console.log(answer2);
console.log(answer3);

let s = "Hello";
let s1 = 'Hi';
let s2 = `Hello World!`;
console.log(s, s1, s2);

//Accessing the characters of a string
console.log(s[2]);
console.log(s2.charAt(6));

//For a long statement use '+' or '\'
const message = 'This is a long message ' +
'that spans across multiple lines' + 
'in the code.';
const message2 = 'This is a long message \
that spans across multiple lines \
in the code';
console.log(message);
console.log(message2);

//Escape characters
console.log("Hi my Name is \'Neema'");
console.log('Hi my name is \"Neema"');
console.log("Demo of how a backslash \\ works")

//Length
console.log(answer1.length);

//Other escape sequences
// \n- new line
console.log("Hi\nHello")
// \t- Horizontal Tabular
console.log("Hello\t Hi");
// \v- vertical Tabular
console.log("Hi \v From Fam");
// \r- carriage return
console.log("thfg\r");

//Breaking the code
//This will produce an error, so the best way to break the line is-
// console.log("Hello"
// "world");
//Use \
console.log("Hello \
world");
console.log("Hello" +
"world");
//Cannot break a code line with backSlash\
// console.\
// log("hi");

//Strings as Objects
let a = "John";
let b = new String("John");

console.log(a == b);
console.log(a === b);

let c = new String("John");
console.log(b === c);