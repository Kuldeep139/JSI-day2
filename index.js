//Explain call(), apply() and, bind() methods.

//call() method :  It is  used for calling the function, which needs to be given comma seperated.
//  Each and every arguments which is required to be passed to the function will be passed individually.
// eg: displayUserDetails.call(user, "Kuldeep", "Mumbai")
    // displayUserDetails(user);

//apply() method 
//      Each and every arguments which is required to be passed to the function will be passed inside an array.
//eg:   displayUserDetails.apply(user, ["Kuldeep", "Mumbai"])

//bind() method returns a new function, allowing you to pass any number of arguments.
//eg:  const newFunc = displayUserDetails.bind(user)
        // newFunc("Rakesh", "Gujarat")


//Example of call(), apply(), and bind().
let student1 = {
    name : "Kuldeep",
    id : 201,
    branch : "Etrx"
}

let student2 = {
    name : "pankaj",
    id : 101,
    branch : "civil"
}

let student3 = {
    name : "Namrata",
    id : 301,
    branch: "Extc"
}

function displayDetails(age,year) {
    console.log(this.name,this.id,this.branch,age,year);
}

displayDetails.call(student1,23,2020);
displayDetails.call(student2,24,2019);
displayDetails.call(student3,22,2021);

displayDetails.apply(student1, [23,2020])
displayDetails.apply(student2, [24,2019])
displayDetails.apply(student3, [22,2021])

let show1 = displayDetails.bind(student1)
show1(23,2020);


// What is creation phase and execution phase?
// A=> Creation phase: 
// Compiler runs through the entire code for 2 time before actually executing the code,
// 1.) In the first run, It picks all function declarations and stores them in memory with their reference.
// 2.) In the second run, It picks all variables and assign undefined to them. 
//        In the event of a conflict between variable and function declaration name then that variable is ignored.

    //  B=> Execution phase:
    // 1.)undefined is removed and Variables are assigned with the values.
    // 2.)Then, Functions are executed.


// What are objects in javascript?
// 1.) A javaScript object is an entity having state and behavior (properties and method).
// 2.) JavaScript is an object-based language. Everything is an object in JavaScript.
// 3.)JavaScript is template based not class based. Here, we don't create class to get the object. 
//     But, we direct create objects.
 const myData = {
    name: "Kuldeep Rathod",
    age: 23,
    clg : "SLRTCE"
  };
  console.log( myData.name, myData.age, myData.clg);


//   What are function constructors?
//What are function constructors?
//The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically

function Car(brand,model,color){
    this.brand=brand;
    this.model=model;
    this.color=color;
}
let car1 = new Car("Mercedes","Maybach S600","Black" );

console.log(new Car("lamborghini","aventador","white"));
console.log(car1);


// Explain prototypes:
// The prototype is an object that is associated with every functions and objects by default in JavaScript
// Prototype is a base class for all the objects, and it helps us to achieve the inheritance.

const studentPrototype = {
    calcAge(){
        console.log(2022 -this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const name1 = Object.create(studentPrototype);
console.log(name1);
name1.initialise("kuldeep","rathod",1997);
console.log(name1);
name1.calcAge();
console.log(name1.__proto__);//studentprototype
console.log(name1.__proto__.__proto__);//obj
console.log(name1.__proto__.__proto__.__proto__);//null


// What is prototype chain?
// Each object has a private property which holds a link to another object called its prototype. 
// That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.

console.log(name1.__proto__);//studentprototype
console.log(name1.__proto__.__proto__);//obj
console.log(name1.__proto__.__proto__.__proto__);//null


//Give an example of inheritance using function constructor

function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, 
specialization) {

    //Calling Employee constructor function
    Employee.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;
}
console.log(Employee.prototype);
console.log(Developer.prototype);


// What are callbacks?
// A callback is a function passed as an argument to another function.

function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = ('Kuldeep Rathod');
    callback(name);
  }
  
  processUserInput(greeting);
  
//   As seen, the 1st function name is passed as argument for 2nd function. 


// What is the use of setTimeout?
// It is an web api function. It doesn't execute directly in js engine for which we need to use event loop.
//after the given time the ouptup gets printed.

// eg:
setTimeout(() => {
    console.log("Hello, How r u?");
}, 2000);



//What is an event loop and call stack

//A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) 
// to keep track of its place in a script that calls multiple functions.

//JavaScript has a runtime model based on an event loop, which is responsible for executing the code, 
// collecting and processing events, and executing queued sub-tasks.







 

// dom: it allows us to create, change, or remove elements from the document. it is used to make page more dynamic.