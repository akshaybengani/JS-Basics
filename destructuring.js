const person = {
    name: "Akshay",
    age: 21,
    great() {
        console.log('Hi I am ' + this.name);
    }
};

// In this example we are going to pass a Map and the function will get the map and print the name field
// so the function name can be used to print name of the object key value
const printName = (personData) => {
    console.log(personData.name);
}
printName(person);

// There is another way of doing the same thing over here we entered map brackets with the key name
// The key we provided will give us its value and since we are printing the key we should use the key name
// the key became a new variable and therefore can be used in the function body
// This is also called as Object Destructuring
const printName1 = ({name}) => console.log(name);
printName1(person);

// While in array destructuring we dont have the key name since we can use any variable names to destructure the arrauy
// Here I have used random names hobby1 and hobby2 which will destructure values of hobbies
const hobbies = ['Music', 'Coding'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);

