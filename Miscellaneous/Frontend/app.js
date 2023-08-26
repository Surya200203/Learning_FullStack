// OOPs

/*
let arr1 =[1,2,3];
let arr2 =[1,2,3];

arr1.sayHello = ()=>{
    console.log('hello, i am arr');
};
arr2.sayHello = ()=>{
    console.log('hello, i am arr');
};
*/

/*
//Constructor - dosen't return anything & start with capital letter
//new operator

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.talk = function (){
    console.log(`Hi, my name is ${this.name}`);
};

let p1 = new Person('sanket', 20);
let p2 = new Person('sumit', 21);
*/

// Person class

class Person{
    
    //constructor of Person class
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // talk function
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{

    //constructor of Student class
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }

    greet(){
        console.log(`hello, Student ${this.name}`);
    }
}

let p1 = new Person('sanket',21); // object for Person class
let s1 = new Student('sanket',21,95); // object for Student class