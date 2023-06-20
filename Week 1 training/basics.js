// Basics
// JavaScript borrows most of its syntax from Java, C, and C++, but it has also been influenced by Awk, Perl, and Python.

// JavaScript is case-sensitive and uses the Unicode character set. For example, the word वस्तु (which means "thing" in Hindi) could be used as a variable name.
const वस्तु = "Thing";

// the variable früh is not the same as Früh because JavaScript is case sensitive.

// In JavaScript, instructions are called statements and are separated by semicolons (;).

// A semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they must be separated by semicolons.

// It is considered best practice, however, to always write a semicolon after a statement, even when it is not strictly needed. This practice reduces the chances of bugs getting into the code.

// The source text of JavaScript script gets scanned from left to right, and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments, or whitespace. (Spaces, tabs, and newline characters are considered whitespace.)

// Declaration
let int = 1;
let string = "Hello, world!";
let float = true;
var str = "Hello, world!";

// printing
console.log(int + " " + string + " " + float + " " + str + " " + वस्तु);

// declaration and initialization
let x;
x = 42;

// scope declaration

// global scope declaration
var y = 1;

// function and block scope declaration
function scope() {
  var y = 2;
  console.log(y);
}
scope(); // local scope declaration
console.log(y); // global scope declaration

if (float) {
  var y = 5;
}
console.log(y); // y is 5

//   Hoisted Variable
console.log(z === undefined); // true
var z = 3;

(function () {
  console.log(z); // undefined
  var z = "local value";
})();

// Const just provide protection in re-assignment not mutation of arrays
// const global = 32;
// global = 31; // cant be declared

const city = [
  "City 1",
  "City 2",
  "City 3",
  "City 4",
  "City 5",
  "City 6",
  "City 7",
  "City 8",
];
city.push("City 2");
console.log(city);
// Data structure and type definitions

// Parse Integer
let integer = "101";
console.log(parseInt(integer + 3.32));

// Parse Float
console.log(parseFloat(integer + 3.32));

// Uptill: Converting strings to numbers

// array empty string
let arr = [, 1, , 3];
console.log(arr.length);
console.log(arr);

const myList = [
  "home",
  +"school", // this line will not be displayed
  "hospital",
];

console.log(myList);

// String literals
console.log(
  "break lines \n Null Bytes \b Form Feed \f carriage return \r tab \t vertical tab \n\v Single Apostrophe ' double Apostrophe \" BackSlash \\"
);

// JavaScript Blocks

var blk = 2;
{
  var blk = 3; //block doesn't effect var scope
}

console.log(blk); //3

// An if statement looks like this:

if (blk == 3) {
  console.log("Blk is correct");
} else {
  console.log("Blk is wrong");
}

// elif statement looks like this

if (blk == 4) {
  console.log("statement1");
} else if (blk == 5) {
  console.log("statement2");
} else if (blk == 3) {
  console.log("statement3");
} else {
  console.log("statementLast");
}

function checkData() {
  form1 = document.getElementById("form1");
  input1 = document.getElementById("input1");
  if (document.form1.input1.value.length === 3) {
    return true;
  } else {
    alert(
      `Enter exactly three characters. ${document.form1.input1.value} is not valid.`,
    );
    return false;
  }
}

// Switch between statements
switch (int) {
  case 1:
    console.log("statements1");
    break;
  case 2:
    console.log("statements2");
    break;
  default:
    console.log("statementsDefault");
}

let fruitType = ['Apples', 'Oranges', 'Bananas', 'Cherries','Mangoes','Papayas'];

switch (fruitType[4]) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");

// Exception handling

// throw
// throw "Error2"; // String type
// throw 42; // Number type
// throw true; // Boolean type
// throw {
//   toString() {
//     return "I'm an object!";
//   },
// };

// try and catch
function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (months[mo]) {
    return months[mo];
    console.log(months[mo]);
  } else {
    throw new Error("InvalidMonthNo"); // throw keyword is used here
  }
}
try {
  // statements to try
  let monthName1 = getMonthName(12); // function couldn't throw exception
  console.log(monthName1);
  let monthName = getMonthName(myMonth); // function could throw exception
  console.log(monthName);
} catch (e) {
  monthName = "unknown";
  console.log(e.message); // pass exception object to error handler (i.e. your own function)
}

// This will print finally block statement
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    console.log(e);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false


console.log();

// For loop Patterns
// left side of pattern 
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
let itteration = 10;
let star = "";
for (let i = 0; i < itteration; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);

console.log("\n");

// For loop Patterns
// left side of pattern 
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********

let star2 = "";
for (let i = 0; i < itteration; i++) {

  for (let j = 0; j < i; j++) {
    star2 += " ";
  }
  for (let j = 0; j < i; j++) {
    star2 += "*";
  }
  
  star2 += "\n";
}

console.log(star2);

console.log("\n");


// left side number pattern
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
let numb = 0;
for (let i = 1; i < itteration; i++) {
  for (let j = 0; j < i; j++) {
    numb += i;
  }
  numb += "\n";
}

console.log(numb);

console.log("\n");


// Left side pattern number
let numb2 = 0;
for (let i = 2; i < itteration; i++) {
  for (let j = 1; j < i; j++) {
    numb2 += j;
  }
  numb2 += "\n";
}

console.log(numb2);

console.log("\n");


//left side number
// 1
// 23
// 456
// 78910
let numb3=0;
let c=1
for (let i = 1; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    
    numb3 += c;
    c++;
  }
  
  numb3 += "\n";
}

console.log(numb3);




// pyhton code
// import string 

// lowercase = string.ascii_lowercase
// uppercase = string.ascii_uppercase

// name = "I_Am_CoDer_AnD_My_naMe_is ZaKaULLah"

// upperlist=[i for i in uppercase] 
// lowerlist=[i for i in lowercase]

// alpa1 = zip(upperlist,lowerlist)
// alpa2 = zip(lowerlist,upperlist)
// # print(list(alpa1))
// # print(list(alpa2))

// rev = dict(alpa1)
// print(rev)
// rev.update(dict(alpa2))
// rev.update({'_':'.'})

// print(name.translate(str.maketrans(rev)))



// for loop

let array = ["Sheep", "Mango", "Hello", "Hail", 5];
for (let i = 0; i < array.length; i++) {
  const elements = array[i];
  console.log(elements);
}

// for..in function

const object = {
  Name: "Ivan",
  age: 20,
  sex: "male",
  ht: 6.7,
  married: true,
};
for (const key in object) {
    const elements = object[key];
    console.log(key+": "+elements);
}

//do while loop
let i = 0;
do {
  i++;
  console.log("Do-While Statement "+ i);
} while (i < 10);

// while loop
i= 0;
while (i < 10) {
  i++;
  console.log("While Statement "+ i);
}


function countSelected(selectObject) {
  let numberSelected = 0;
  console.log("Options: "+ selectObject.options.length )
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  console.log(numberSelected);
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
