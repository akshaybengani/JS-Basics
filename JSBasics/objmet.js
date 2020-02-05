const person = {
    name: 'Akshay',
    age: 21,
};
console.log(person);

// This will not work since here in the nabalik function the console.log is getting global scope
// And it is not looking in the map insteed going out and looking for name
// Since this function is correct in syntax but will give error while calling it
const personfun = {
    name: 'Akshay',
    age: 21,
    greet: () => {
        console.log('Hi I am '+ this.name);
    }
};
//personfun.greet();

// We can use the classic function approach here and therefore the this keyword will point inside the map
const personFun = {
    name:'AKshay Bengani',
    age:21,
    greet: function() {
        console.log('Hi I am '+this.name);
    }
}
personFun.greet();

// One Another way of doing so is by removing collan and using great as both key and value of map
// This syntax I will be using now its cool
const personfunc = {
    name: "Akshay Bengani",
    age: 21,
    greet() {
        console.log("Hi I am "+ this.name);
    }
};
personfunc.greet();









