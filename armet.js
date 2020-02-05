const person = {
    name: "Akshay",
    age: 21,
    great() {
        console.log('Hi I am ' + this.name);
    }
};
// A basic array or list or anything you can say collection of bunch of elements 
const hobbies = ['Code', 'Music'];

// The for can be used by the classical method and also by using of
// Its similar to "in" in python and dart
for (let hobby of hobbies) {
    console.log(hobby);
}

// This is interesting this will instantly convert an array or list to map with a built in function
// NOTE Map always takes a function else it will give error if we dont pass anything
console.log(hobbies.map(hobby => {
    return 'I love ' + hobby;
}));
console.log(hobbies);

// Since this function have single line so we can remove brackets
console.log(hobbies.map(hobby => 'I love ' + hobby));
console.log(hobbies);


const hobbies2 = ['Code', 'Music'];

// Here is somethig to notice the hobbies array is made constant but still this push will add a value in the list
// This is because we are not really editing a thing which is constant we are only editing the thing that constant thing is pointing at. 
hobbies2.push('Programming');
console.log(hobbies);

