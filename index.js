// VAR, LET, CONST

// var -> function scope
// let -> block scope
// const -> block scope
function sayHello() {
    for (let i = 0; i < 5; i++) {
        // console.log(i)
    }
    // console.log(i)
}

sayHello();

// const x = 1;
// x = 2; // reassign is not possible


// OBJECT
const person = {
    name: 'Rimon',
    walk() { },
    talk() { }
};

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'Kabir';


// ARROW FUNCTIONS
// old way
const square = function (number) {
    return number * number;
}

// ES6 way
const square2 = number => number * number;
// console.log(square2(5));

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) { return job.isActive; });
const activeJobs2 = jobs.filter(job => job.isActive);


// ARRAY.map()
const colors = ['red', 'green', 'blue'];
// old way
const items = colors.map(function (color) {
    return '<li>' + color + '</li>';
});

// ES6 way
const items2 = colors.map(color => `<li>${color}</li>`);
console.log(items2);


// OBJECT DESTRUCTURING
const address = {
    street: '',
    city: '',
    country: '',
};

// old way
const street = address.street;
const city = address.city;
const country = address.country;

// ES6 way
// const { street, city, country } = address;
const { street: st } = address; // change the 'street' property by 'st' using allias 


// SPREAD OPERATOR
const first = [1, 2, 3];
const second = [4, 5, 6];

// old way
// const combined = first.concat(second);
// ES6 way
const combined = [...first, 'a', ...second, 'b']; // possible to insert new elements

const clone = [...first];
// console.log(first);
// console.log(combined);

// SPREAD OPERATOR in OBJECTS
const name = { name: 'Rimon' };
const status = { occupation: 'Student' };

const addThem = { ...name, ...status, location: 'Germany' };
// console.log(addThem)


// INHERITANCE
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        // console.log("walk");
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        // console.log("teach")
    }
}

const teacher = new Teacher("Rimon", "MSc");

