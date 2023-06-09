# 1. Introduction
This chapter introduces JavaScript and discusses some of its fundamental concepts.

## What you should already know
This guide assumes you have the following basic background:

- A general understanding of the Internet and the World Wide Web (WWW).
- Good working knowledge of HyperText Markup Language (HTML).
- Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.

## Where to find JavaScript information

The JavaScript documentation on MDN includes the following:

- [Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn) provides information for beginners and introduces basic concepts of programming and the Internet.
- [JavaScript Guide (this guide)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) provides an overview about the JavaScript language and its objects.
- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) provides detailed reference material for JavaScript.

If you are new to JavaScript, start with the articles in the learning area and the JavaScript Guide. Once you have a firm grasp of the fundamentals, you can use the JavaScript Reference to get more details on individual objects and statements.

## What is JavaScript?
JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.

JavaScript contains a standard library of objects, such as ```Array``` , ```Date```, and ```Math```, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:

- Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.

- Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.
This means that in the browser, JavaScript can change the way the webpage (DOM) looks. And, likewise, Node.js JavaScript on the server can respond to custom requests sent by code executed in the browser.

* For more information goto here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction

# 2. Basics
JavaScript borrows most of its syntax from Java, C, and C++, but it has also been influenced by Awk, Perl, and Python.

JavaScript is case-sensitive and uses the Unicode character set. For example, the word वस्तु (which means "thing" in Hindi) could be used as a variable name.

``` const वस्तु= "Thing"; ```

the variable früh is not the same as Früh because JavaScript is case sensitive.

In JavaScript, instructions are called statements and are separated by semicolons (;).

A semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they must be separated by semicolons.

It is considered best practice, however, to always write a semicolon after a statement, even when it is not strictly needed. This practice reduces the chances of bugs getting into the code.

The source text of JavaScript script gets scanned from left to right, and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments, or whitespace. (Spaces, tabs, and newline characters are considered whitespace.)

## Comments
The syntax of comments is the same as in C++ and in many other languages:
```javascript
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```
You can't nest block comments. This often happens when you accidentally include a */ sequence in your comment, which will terminate the comment.
```javascript
/* You can't, however, /* nest comments */ SyntaxError */
```
In this case, you need to break up the ```*/``` pattern. For example, by inserting a backslash:

```javascript
/* You can /* nest comments *\/ by escaping slashes */
```
Comments behave like whitespace, and are discarded during script execution.

## Declarations
JavaScript has three kinds of variable declarations.
```javascript
var
```
Declares a variable, optionally initializing it to a value.
```javascript
let
```
Declares a block-scoped, local variable, optionally initializing it to a value.
```javascript
const
```
Declares a block-scoped, read-only named constant.

* Read more on here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types

# 3. Control flow and error handling

JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in your application. This chapter provides an overview of these statements.

The [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements) contains exhaustive details about the statements in this chapter. The semicolon (```;```) character is used to separate statements in JavaScript code.

Any JavaScript expression is also a statement. See Expressions and operators for complete information about expressions.

## Block statement
The most basic statement is a block statement, which is used to group statements. The block is delimited by a pair of curly brackets:

```javascript
    {
  statement1;
  statement2;
  // …
  statementN;
}
```
## Example
Block statements are commonly used with control flow statements (```if```, ```for```, ```while```).

```javascript
while (x < 10) {
  x++;
}
```

Here, ```{ x++; }``` is the block statement.

> **_NOTE:_**  declared variables are not block-scoped, but are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. For example:
>```javascript
> var x = 1;
>{
>  var x = 2;
>}
>console.log(x); // 2
>```
>This outputs 2 because the ```var x``` statement within the block is in the same scope as the var ```x``` statement before the block. (In C or Java, the equivalent code would have output 1.)
>
> This scoping effect can be mitigated by using let or const.

## Conditional statements
A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: ```if...else``` and ```switch```.

### ```if...else``` statement
Use the if statement to execute a statement ```if``` a logical condition is ```true```. Use the optional ```else``` clause to execute a statement if the condition is ```false```.

An if statement looks like this:

```javascript
if (condition) {
  statement1;
} else {
  statement2;
}
```

Here, the condition can be any expression that evaluates to true or false. (See Boolean for an explanation of what evaluates to true and false.)

If condition evaluates to ```true```, ```statement_1``` is executed. Otherwise, ```statement_2``` is executed. ```statement_1``` and ```statement_2``` can be any statement, including further nested if statements.

You can also compound the statements using else if to have multiple conditions tested in sequence, as follows:

```javascript
if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (conditionN) {
  statementN;
} else {
  statementLast;
}
```

In the case of multiple conditions, only the first logical condition which evaluates to true will be executed. To execute multiple statements, group them within a block statement ```({ /* … */ })```.

### Best practice
In general, it's good practice to always use block statements—especially when nesting if statements:

```javascript
if (condition) {
  // Statements for when condition is true
  // …
} else {
  // Statements for when condition is false
  // …
}
```
* For more information goto here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling