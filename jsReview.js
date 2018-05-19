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

/*Objects are very important in javascript. They hold key-value pairs called properties
* The values can be anything, even arrays or other objects. Objects are declared with {} curly braces
* The properties and values are seperated by a colon :
* After each property, use a comma to seperate the next set of keys
*/
var obj = {
	key: 'value',
	property: "this is a value",
	boolean: true,
	number: 56,
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
} else if {
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
*/





