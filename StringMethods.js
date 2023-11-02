//Slice
let text = "extracts a part of a string and returns the extracted part in a new string.The method takes 2 parameters: start position, and end position (end not included)."
let part = text.slice(1,18);
console.log(part);

let fruits = "Apple, Banana, Pineapple";
console.log(fruits.slice(7,13));

//If we omit the second index, it will start from 5th index and will print till the end
console.log(fruits.slice(5));

//If we have given the negative number, it will count from the last index/end of the string, (-12, -6) => the first index is excluded
console.log(fruits.slice(-12,-6))
console.log(fruits.slice(-7))

//Substring()- The difference is that start and end values less than 0 are treated as 0 in substring()
console.log(fruits.substring(-4,7));
console.log(fruits.substring(7,-1));

//Substr()- The difference is that the second parameter specifies the length of the extracted part.
console.log(fruits.substr(4,3));
console.log(fruits.substr(7));
console.log(fruits.substr(-5,-2));

//Replace
let text1 = "Please visit Microsoft and Microsoft";
let newText = text1.replace("Microsoft", "W3Schools");
console.log(newText);
let newText3 = text1.replaceAll("Microsoft", "GFhc");
console.log(newText3);

//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
let text2 = "Please visit Microsoft!";
let newText2 = text2.replace("MICROSOFT", "W3Schools");