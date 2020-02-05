const hobbies = ['Code', 'Music'];

// This will make a copy of the array
const copiedArray = hobbies.slice();
console.log(copiedArray);

// Another way of copying an array so here the spread operator is ...
// The spread operator takes value from the object and spread it around who is using it
// In this case the hobbies will be spread and it is covered with [] empty list so basically
// Over here the values of hobbies will create a new array of those values simply copy of array
const copy1 = [...hobbies];
console.log(copy1);


// We can copy a Map also
const person = {
    name: "Akshay",
    age: 21,
    great() {
        console.log('Hi I am ' + this.name);
    }
};
const copiedPerson = {...person};
console.log(copiedPerson);


// Here we created a function which will take values as parameters and convert in an array
// But this is fixed to 3 values of array only
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2,arg3];
};
console.log(toArray(1,2,3));

// This is something we called rest for binding all the values in single set and send back
const toArray1 = (...args) => {
    return args;
};
console.log(toArray1(1,2,3));
