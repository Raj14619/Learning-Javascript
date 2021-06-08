
    //PART 1 DECLARING VARIABLES
/*
    let js = "amazing"; // DECLARING A VARIABLE CALLED 'js' AS STRING
    console.log(40 + 8 + 23 - 10); //OUTPUTTING CALCULATIONS TO CONSOLE

    console.log("Jonas"); //OUTPUTTING TO CONSOLE
    console.log(23); //OUTPUTTING TO CONSOLE

    let firstName ="Jonas";
    console.log(firstName);

    let age = 23;// THIS IS STORED USING THE NUMBER DATA TYPE IN JS (WHICH STORES INTEGERS AND FLOATS)
    let firstName = "Raj" // THIS IS THE STRING DATA TYPE IN JS
    let checkbox = true // THIS IS THE BOOLEAN DATA TYPE IN JS
    let undefinedVariable; // A variable which is declared and has an 'empty value'
    let ok = null; // Null
*/












//PART 2 - USING TYPEOF TO FIGURE OUT DATA TYPE OF VARIABLES

/*
    console.log(typeof 23); // Number
    console.log(typeof "Raj"); // String

    let javscriptIsFun = true; //javascriptIsFun is a boolean
    console.log(typeof javascriptIsFun); // javascriptIsFun is a boolean
    javscriptIsFun = "YES!"; // javascriptIsFun is now a string
    console.log(typeof javascriptIsFun) // this will now output string

    let year;
    console.log(year); // will be undefined because no data type and no value has been given
    console.log(typeof year); // will be undefined because no data type and no value has been given
    year = 1991;
    console.log(typeof year) //will now be number

    console.log(typeof null) //this is an error in javascript with using typeof on null, which returns an "object" although it shoudld actually be "null". This bug has not been fixed in javascript for legacy reasons.

*/










//PART 3 - Using FINAL AND VAR  in javascript

/*
const birthYear = 1991; // Const variable which is basically a final variblae in java (It cannot change it's value)

var job = "programmer"; // VAR IS SOMETHING IN LEGACY CODE OF JAVSCRIPT, AVOID USING IT. IT IS USED TO DECLARE VARIABLES
job = "teacher"; // VAR IS SOMETHING IN LEGACY CODE OF JAVSCRIPT, AVOID USING IT. IT IS USED TO DECLARE VARIABLES

lastName = "Schmdetmann" // This is another way to declare a variable, but is bad way of doing so, Always use "let before declaring."
*/









//PART 4 - concatination of strings, Learning operators, and Incrementing variables in javascript

const currentYear = 2037;
const ageRaj = currentYear - 1991; // ageRaj = 2037 - 1991
const ageJonas = currentYear - 2018; // ageJonas = 2037 - 2018

console.log(ageRaj * 2, ageRaj / 10, 2**3); // So the "," in the consoleLog allows for printing out multiple values in the same consoleLog. In this line we are printing out ageRaj multiplied by 2, ageRaj divided by 10, and 2 to the power of 3 (2*2*2 which is equal to 8). 

//Below are assignment operators (till the first line of console.log(x) below )
const firstName = 'Jonas'
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); // concatination (adding) of strings together and adding a space inbetween and then outputting it to console.

//Below are assignment operators ( (till the first line of console.log(x) below )
let x = 10 + 5; // add 10 and 5 together and store to variable x
x += 10; // add 10 to current value of x (which is 15). So output should be 15, since 10+15 = 25.
x *= 4; // x multiplied by 4 (value of x is 25) * 4 = 100, so output should be 100.
x++; // increment x by 1 (x which is 100 + 1 = 101, so output should be 101.)
x--; // minus x by 1 which should output 100; 
console.log(x);

//Below are comparison operators ( (till the first line of console.log(x) below )
console.log(ageRaj > ageJonas) // Raj is older than Jonas so output should be true. Same like java when it comes to (>, <, >= and <=)

const isRajOlderThanJonas = ageRaj > ageJonas; // Declaring a variable "isRajOlderThanJonas" as Boolean, and will be true if Raj's age is greater than Jonas's age. This will be true.
