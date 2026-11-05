/* =====================================================================
   JAVASCRIPT BASIC DSA PRACTICE - PART 1
   Topics:
     1. Concatenation & Type Coercion
     2. Taking Input (prompt) & Type Casting
     3. Swapping Two Variables (3 methods)
     4. Operators
     5. Math Functions
     6. Math Problems
   ===================================================================== */


/* =====================================================================
   SECTION 1: CONCATENATION & TYPE COERCION
   ===================================================================== */

// let a = 12;
// let b = "13";
// console.log(typeof(a+b));

// Concatenation:
// Joining two values together is called concatenation.
// When we use + between a number and a string, JavaScript joins them
// and the answer becomes a string.


// ---------- Sum and message ----------

// let a = 10;
// let b = 20;
// console.log("sum of 10 and 20 is "+ a+b );     // wrong: it joins 10 and 20 as text
// console.log("sum of 10 and 20 is " + (a+b) );  // correct: brackets add first, then join


// ---------- Q1 Type coercion ----------
// Type coercion means JavaScript automatically changes
// one data type into another data type by itself.

// console.log("1"+1); // 11 (concatenation)
// console.log("1"-1); // 0  (minus works only with numbers, so "1" becomes number 1)


/* =====================================================================
   SECTION 2: TAKING INPUT & TYPE CASTING
   ===================================================================== */

// ---------- Q2 Accept and print the number ----------
// prompt() is a function that shows a small box in the browser
// and asks the user to type something.
// Whatever the user types always comes as a string.


// ---------- Q3 Conversion of string to number is called type casting or conversion ----------

// let age = prompt("enter your age");
// console.log(age);

// let age = Number(prompt("enter your age"));
// console.log(typeof(age));

// Number() changes a string into a number, only if it is possible to convert.
// If the string is not a proper number (like "abc"), the answer is NaN (Not a Number).


// ---------- Q4 Type casting ----------
// Converting one data type into another data type is called type casting.
// Coercion is done by JavaScript automatically.
// Casting is done by us manually, for example string to number.


/* =====================================================================
   SECTION 3: SWAP TWO VARIABLES (3 METHODS)
   Swapping means exchanging the values of two variables.
   Example: a = 10, b = 20  ->  after swap  a = 20, b = 10
   ===================================================================== */

// ---------- Q5 Swap two variables via 3 methods ----------

// Method 1: swap with an extra variable
// let a = 10 ;
// let b = 20;

// let c = a ;
// a=b;
// b = c;
// console.log(a);
// console.log(b);


// Method 2: swap without an extra variable

// let a = 10;
// let b =20;

// a = a+b; // a = 30
// b = a-b; // b = 10
// a = a-b; // a = 20
// console.log(a);
// console.log(b);


// Method 3: destructuring method
// Destructuring means taking values out of an array
// and putting them in variables in one line.
// let a = 10;
// let b = 20;
// [a,b]=[b,a];
// console.log(a)
// console.log(b)


/* =====================================================================
   SECTION 4: OPERATORS
   An operator is a symbol that does some work on values.
   Example: +, -, *, /, =, >, <
   ===================================================================== */

// ---------- Q6 Operators and their questions ----------

// Assignment operator =
// It is used to put a value inside a variable.
// var x = 20;


// Comparison operators ==, ===
// They compare two values and give true or false.
// == checks only the value, === checks value and data type both.
// 13 == "13"  // true
// 13 === "13" // false


// Arithmetic operators = + , - , / , * , %
// They are used to do mathematical calculations.
// % (modulus) gives the remainder after division.

// let a = 12;
// let b = 10;
// console.log(a+b,a-b,a*b,a/b,a%b);


// Relational operators = > , < , <= , >= , !== , == , ===
// They check the relation between two values
// (bigger, smaller, equal, not equal) and give true or false.

// let a = 12;
// let b = 10;
// console.log(a>b , a<b , a<=b , a>=b , a==b ,a!==b)


// Logical operators = && , ||
// They are used to join two or more conditions.
// &&  => both conditions must be true, then the answer is true
// ||  => if any one condition is true, then the answer is true

// console.log(10 > 6 && 5 < 9); // true
// console.log(10 >5 || 15 <9); // true


// Unary operators -> -- , ++
// A unary operator works on only one value (one operand).
// ++  => increment operator (increases the value by 1)
// --  => decrement operator (decreases the value by 1)

// post increment and pre increment
// post decrement and pre decrement
// Post means first use the value, then change it.
// Pre means first change the value, then use it.

// post ++
// let a = 10;
// let b = a++;
// console.log(a);  // 11
// console.log(b);  // 10

// pre ++
// let a = 10;
// let b =++a;
// console.log(a);  // 11
// console.log(b);  // 11

// post --
// let x = 10;
// let y = x--;
// console.log(x);  // 9
// console.log(y);  // 10

// pre --
// let x = 10;
// let y = --x;
// console.log(x);  // 9
// console.log(y);  // 9


/* =====================================================================
   SECTION 5: MATH FUNCTIONS
   Math is a built-in JavaScript object which has many ready-made
   functions to do calculations. There are many types of Math functions.
   ===================================================================== */

// Math.round();
// It rounds the number to the nearest whole number.
// If the decimal is .5 or above, it goes up. If it is below .5, it goes down.
console.log(Math.round(10.6)); // 11
console.log(Math.round(10.3)); // 10


// Math.ceil();
// Ceil means roof. It always goes up to the next bigger whole number.
// Whatever number we write after the decimal point, it moves up by one.
console.log(Math.ceil(10.1)); // 11


// Math.floor();
// Floor means ground. It always goes down to the next smaller whole number.
// It removes the decimal part and keeps the lower whole number.
console.log(Math.floor(10.3));10 // 10


// Math.trunc();
// Trunc means cut. It cuts off the decimal part
// and gives only the whole number.
console.log(Math.trunc(19.69));


// Math.pow();
// Pow means power. It takes two parameters (base, exponent) and gives the power.
// Example: 2^5 = 2*2*2*2*2 = 32
console.log(Math.pow(2,5));


// Math.sqrt();
// Sqrt means square root. It gives a number which equals the original
// number when multiplied by itself. Example: sqrt of 9 is 3.
console.log(Math.sqrt(70));


// Math.cbrt();
// Cbrt means cube root. It gives a number which equals the original number
// when multiplied by itself 3 times. Example: cbrt of 8 is 2.
console.log(Math.cbrt(8));


// Math.abs();
// Abs means absolute value. It converts a negative number to positive
// (it removes the minus sign).
console.log(Math.abs(-10));


// Math.max();
// It gives the largest number from many numbers. It takes many parameters.
console.log(Math.max(5,8,2,9,4,7));


// Math.min();
// It gives the lowest (minimum) value from the given numbers.
// It can take two or more than two parameters.
console.log(Math.min(9,8,6,7,5,1,2,3));


// Math.random();
// It generates a random decimal number between 0 and 1.
// (0 can come but 1 never comes)
console.log(Math.random());

// If we want a whole number without decimal (0 to 9), we use this
let num = Math.floor(Math.random()*10);
console.log(num)


// toFixed();
// It rounds a decimal number to a fixed number of digits after the decimal
// point and converts it into a string.

let pi = 3.14159; // toFixed converts the number into a string
console.log(pi.toFixed(2));


/* =====================================================================
   SECTION 6: MATH PROBLEMS
   ===================================================================== */

// ---------- Q1 Calculate area and perimeter of rectangle ----------
// Area is the space inside the rectangle.
// Perimeter is the total length of the outer boundary.

// area formula = length * breadth
// let a = 5;
// let b= 7;
// console.log(a*b);

// perimeter formula = 2 * (length + breadth)
// let a = 5;
// let b = 8;
// console.log(2*(a+b));


// ---------- Q2 Generate random OTP ----------
// OTP means One Time Password. Here we make a random 4 digit number.
// Math.random()*9000 gives 0 to 8999, adding 1000 makes it 1000 to 9999.

console.log(Math.floor(Math.random()*9000)+1000);


// ---------- Q3 Area of a triangle by Heron's formula ----------
// Heron's formula gives the area of a triangle when we know
// the length of all 3 sides.
// formula = sqrt of s*(s-a)*(s-b)*(s-c)
// s = semi perimeter (half of the perimeter)

let a = 5;
let b = 10;
let c = 8;

let s = (a+b+c)/2;
console.log(s);
console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));