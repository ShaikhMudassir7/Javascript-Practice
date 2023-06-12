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
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString() {
    return "I'm an object!";
  },
};

// try and catch
function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("InvalidMonthNo"); // throw keyword is used here
  }
}
try {
  // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
  console.log(monthName);
} catch (e) {
  monthName = "unknown";
  console.log(e.message); // pass exception object to error handler (i.e. your own function)
}

console.log();
