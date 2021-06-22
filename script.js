/*
Below is code in javascript and comments which will help you understand javascript if you already know a programming language such as Java.
This code was intended for myself to help remember and as a self reference.
You may also find this helpful.
The code posted below is from the complete javascript course on udemy, while the comments have been written by me.
*/


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

/*
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
*/











//PART 5 - Strings and template Literals
/*
const firstName = 'Raj'
const job = 'student';
const birthYear = 1997;
const year = 2020;

const test = 'i am' // when declaring string using '' you are unable to use a ' in the string itself, so you have to use "" (See below line)
const jonas = "I'm" // we are able to declare "I'm" but in the above line we are unable to declare I'm as we are using ''

const text = "I'm " + firstName + ' a ' + (year - birthYear) + ' years old ' + job + '!'; 
console.log(text); 

//In javascript we now have template literals which makes concatinating strings easier (see below lines). NOTE RAJ: WE ARE USING ` WHICH IS THE KEY NEXT TO 1 ON THE KEYBOARD

const newText = `I'm ${firstName}, a ${year-birthYear} year old + ${job}!`;
console.log(newText)

// The below three lines is an old school way of writing string in multiple lines which existed only because of a bug in javascript
console.log("String with \n\
multiple \n\
lines");

//Below is the latest and better way of writing strings in multiple lines in javascript. BELOW WE ARE USING LITERALS. THE KEY NEXT TO THE NUMBER 1 ON THE KEYBOARD IS BEIGN USED.
console.log(`String with
multiple
lines`)
*/














// PART 6 - IF STATEMENTS AND ELSE STATEMENTS

/*
const rajAge = 23;
const isRajOldEnoughToDrink = rajAge >= 18; // here we are declaring a boolean which wil be true if age is equal to or greater than 18, in this case it will be true.
const jonasAge = 16;
const isJonasOldEnoughToDrink = jonasAge >= 18;

if(isRajOldEnoughToDrink){
    console.log(`Raj is old enough to drink 😂`);
} else {
    const yearsLeft = 18 - rajAge;
    console.log(``)
}

if(isJonasOldEnoughToDrink){
    console.log(`Jonas is old enough to drink 😂`);
} else {
    const yearsLeft = 18 - jonasAge;
    console.log(`Jonas is not old enough to drink, wait ${18-jonasAge} years`)
}
*/











// PART 7 - CONVERTING DATA TYPES | Converting Strings, Converting Numbers, Converting Booleans
var inputYear = "1991"; // declaring inputYear as a string
console.log(inputYear); // when looking at this output in console it will show a black colour because it's a string 
var inputYear = Number(inputYear); // converting inputYear from String to Number
console.log(inputYear); // when looking at this output in console it will show a blue colour because it's a numbers

console.log(Number('Raj')); // Here we are converting the string Raj into a number which isn't valid, which outputs NaN which stands for Not a number
console.log(typeof NaN); // When checking the typeof NaN it's data type is a number, this is 'strange' and will lead to bugs when checking if a number is valid or not, so be careful Raj









//Part 8 - TYPE COERCION | TYPE COERCION HAPPENS WHENEVER AN OPERATOR IS DEALING WITH TWO VALUES OF DIFFERENT TYPES, IN WHICH JS WILL CONVERT ONE OF THE DATA TYPES TO MATCH THE OTHER DATA TYPE.
/*
console.log('I am'+ 23 + ' years old') // here we have a string, a number, and a string which outputs a whole line of strings, this is done with type coercion. the + operator triggers a coercion to strings. So whenever there is an operator between a string and a number the number will be converted to a string.
console.log('23' - '10' - 3) // here we have a string, another string and a number. This time Javascript converted the strings into numbers which is why we get the output as 10. 
// So in the above two lines, using the + operator between numbers and strings convers the numbers data type into string and concatenates them while as using the "-" operator between strings and numbners will trigger a numeric minus calculations between the values

console.log('23' + 10 + '3') // This will not add all the numbers up numerically, this will just concatenate the strings together.

console.log('10' * '10')// this will output 100, the strings will be converted into numbers and then multiplied
console.log('100' / '10') // this will output 10, the strings will be converted into numbers and then divided.

console.log('23' > '18') // the strings will be converted into numbers and then true will be the output


var n = '1' + 1; // this will output "11" which is a string
n = n - 1; // this will output 10 as a number since n will be converted into a number (which is 11) and minused by 1.
console.log(n); // the output will be 10

console.log(2+3+4+'5'); // this will output 95, since 2+3+4 = 9 and then 9 will be converted into a string and be concatenatted with '5' which is another string, resulting in 95.
console.log('10'-'4'-'3'-2+'5'); // this will output 15
*/












//Part 9 Truthy and Falsy values

/*
//Falsy values are values which are not exactly false, but will become false if we try to convert them into a boolean. The 5 falsey values in JS are: 0, an empty string, undefined, null and NaN
//Anything which isn't a falsy value (which you listed above) are truthy values. truthy values will be converted to true when converting them to a boolean

console.log(Boolean(0)) // this will be false
console.log(undefined) // this is undefined
console.log(Boolean('Jonas')) // true  
console.log(Boolean({}));// this is an empty object, which will also be true
console.log(Boolean('')); // empty string will be false


const money = 0; 

if(money){ // if money is any number other than 0, the below if statement line will be executed
    console.log("Don't spend it all");
} else{ // if money is 0 the else statement will be executed since 0 will be false when converted into a boolean
    console.log("You should get a job");
}


let height;

if(height) {
    console.log("Height is defined");
} else{
    console.log("Height is undefined"); // this statement will be executed because height has not been defined, since height has been declared, but no value has been set for it.
}
*/










//Part 10  Equality operators == vs ===

/*
// The "===" operator is the strict equality operator. It's strict because it does not perform type coercion, so it only returns true when both values are exactly the same. 
// The "==" operator is the loose equality operator. The loose equality operator does type coercion 
const age = 18;

if(age === 18) console.log("You just became an adult"); // when using === we do not need the curly brackets


if('18' == 18){ // the string 18 will be converted to a number and then compared to the other number 18 resulting in true, so the if statement will be executed.
    console.log("this if statement works")
}

if('18' === 18){ // this will be false since the triple equals does not perform type coercion, and therefore the line below will not be executed
    console.log("This if statement will not be executed")
}


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);


if(favourite != 23){ // this is the loose not equal to

}

if(favourite !== 23){

}
*/










//Part 11  Boolean logic | Logical operators

/*
const rajHasDriverLicence = true;
const rajHasGoodVision = true;

if(rajHasDriverLicence && rajHasGoodVision){
    console.log("Raj can drive");
} else{
    console.log("Raj can not drive");
}

if(!rajHasDriverLicence){
    console.log("Raj does not have a driving license");
}
*/