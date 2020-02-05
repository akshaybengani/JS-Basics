// variables
const name = "Akshay";
let age = 21
const hasHobbies = false;
const data = [];

// while using const I cannot change the value I will get an error
//name = "Shivank";
age = 25;

// Classic and Default way of defining a function
function summarizeUser(username, userage, userhobbie) {
    return 'Name is ' + username + ' age is ' + userage + ' and user has hobbies ' + userhobbie;
}

// We can write function in this way too where we have the function name on the other side.
const summarizerUser = function (username, userage, userhobbie) {
    return 'Name is ' + username + ' age is ' + userage + ' and user has hobbies ' + userhobbie;
}

// Here summarizeeUser is the Function name and we dont need to use the function keyword if we
// use the arrow => Operator
const summarizeeUser = (username, userage, userhobbie) => {
    return 'Name is ' + username + ' age is ' + userage + ' and user has hobbies ' + userhobbie;
}

// When we have only 1 line in return statement we can put the function body in the same line.
const add = (a,b) => a+b;

// When we have only 1 argument then we can use this way of writing the function
const addOne = a => a+1;

// When we dont have any data to pass in the function this is a pure annonymous function
// Annonymous Functions woh jinka koi mai baap nahi hota, like naam ki jaroorat nahi
// abhi toh dae rahe hai par kahi pae koi function pass karna pade aur naam nahi chahiye baad 
// mae use karne kae liye toh yeh benaam anaath function kaam aate hai
const addRandom = () => 1+2;

console.log(summarizeUser(name,age,hasHobbies));
console.log(summarizeeUser(name,age,hasHobbies));
console.log(summarizerUser(name,age,hasHobbies));
console.log(add(512,256));
console.log(addOne(age));


