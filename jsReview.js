//How to declare variables in javascript

//We use the var keyword to declare a variable. There are many different types of variables in javascript
var string = "This is a string. We know because of the quotes";

//Numbers - all numbers are number in javascript. There are no floats/ints/longs/doubles
var number = 42;

//booleans - true or false
var boolean = true;

//Arrays - containers for multiple pieces of data within a single variable. 
//They are declared with [] - square brackets
//Array's can hold many different types of data and they are not mutually exclusive.
var array = ['string', 12, true, 'another string'];

//Arrays can even hold other arrays or objects as well!
var nestedArray = ['a string', ['This string is in a nested array', 
								'These values are all stored in the same index',
								'No matter how many there are'],
					'This value is back in the main array'];

/*
* Objects are very important in javascript. They hold key-value pairs called properties
* The values can be anything, even arrays or other objects. Objects are declared with {} curly braces
* The properties and values are seperated by a colon :
* After each property, use a comma to seperate the next set of keys
*/
var obj = {
	key: 'value',
	property: "this is a value",
	boolean: true,
	number: 56,
	function: function() {
		console.log('Say hello');
	},
	array: ['these', 'are', 'in', 'an', 'array'],
	objProp: {
		example: "This property is on a nested object!"
	}

}


//Conditional logic is how you control the flow of you program. 
//If/else statements are used to conditionally 
//The syntax looks like this:
//if the statement within the parenthesis is true
if(statementBeingEvaluated){
	//This is the code that gets executed
	return something;
} else {
	//If the statement is not true
	return somethingElse;
}

//You can also use multiple if checks with if/elseif
if(thisIsTrue){
	dostuff();
} else if (thisOneisTrue) {
	doOtherStuff();
} else {
	doMoreStuff();
}


//A for loop is used for performing a task over and over
//For loop syntax looks like this:

/*We start with the iterator - var i = 0. 
* This initializes a variable for the loop and sets the starting point in the array
* We then set the condition - this is a statement that's evaluated to determine if the loop continues
* In this example, the condition is i < Things.length
* The final piece in a forloop is the incrementer. This is the operation that move the loop forward
* In this example, the incrementer is i++ which adds one to our iterator and runs the loop again
*/
for (var i = 0; i < Things.length; i++) {
	//The code between the curly braces is what's executed during each loop
	console.log(Things[i]);
	//The value of i changes each time we loop, so it won't print the same value twice
}

/*FUNCTIONS!
* Functions are reusable pieces of code that can be executed by "calling" the function
* Functions should be created whenever you execute operations more than once
* Functions are composed of a few pieces:
* The function name - this is represented by either var function = OR function functionName
* You can also write functions with parameters. Parameters are variables that are found in the function definition
* When you call a function, you pass in values for the parameters as arguments
* Syntax for functions looks like this
*/

//The function is declared with the keyword function and named. Paramters are also declared in the definition
function consoleLogger() {
	//This is the function body. All of the code between the {} gets executed when a function is called
	//The value of parameter is set when the function is called and it becomes 
	//a locally scoped variable within the scope of the function
	console.log("I am a log");
}

//The function below is known as an anonymous function. The function itself isn't named,
//it's saved as a variable
var returnValue = function(value) {
	//Functions can return a value using the return keyword
	//return sends a value back to whatever called the function
	//This is one way of getting private values out of a function
	return value;
}

//Calling a function is done simply by typing the function name and passing in the arguments
consoleLogger("This is an argument");
console.log(returnValue("Another argument"));

//In the above example, both of these function calls do essentailly the same thing

//Functions can do almost anything. You can enclose conditional logic, loops, other function calls etc.
//Anything you want to do multiple times can be a function

/* 
* Here are a few guidelines for writing functions:
* Functions, above all, should contain encapsulated, reusable code
* The code should focus on doing one job. This is known as the single responsibility principle
* By ensuring that your function code only does one job, you create very readable, reusable functions 
* that you can use to compose your software. Several smaller functions that each perform a single job
* can be used together to create programs
*/

